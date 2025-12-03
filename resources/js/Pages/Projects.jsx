import { Head, useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

export default function Projects({ projects = [] }) {
    const { auth } = usePage().props;
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [showTeamMemberForm, setShowTeamMemberForm] = useState(false);

    const projectForm = useForm({
        title: '',
        slug: '',
        description: '',
        tech_stack: '',
        image: '',
        url: '',
        featured: false,
    });

    const teamMemberForm = useForm({
        project_id: '',
        name: '',
        role: '',
        image: '',
        bio: '',
        social_links: {},
    });

    const handleProjectSubmit = (e) => {
        e.preventDefault();
        
        if (editingProject) {
            projectForm.put(route('projects.update', editingProject.id), {
                onSuccess: () => {
                    projectForm.reset();
                    setEditingProject(null);
                    setShowProjectForm(false);
                },
            });
        } else {
            projectForm.post(route('projects.store'), {
                onSuccess: () => {
                    projectForm.reset();
                    setShowProjectForm(false);
                },
            });
        }
    };

    const handleTeamMemberSubmit = (e) => {
        e.preventDefault();
        
        teamMemberForm.post(route('team-members.store'), {
            onSuccess: () => {
                teamMemberForm.reset();
                setShowTeamMemberForm(false);
            },
        });
    };

    const handleDeleteProject = (projectId) => {
        if (confirm('Are you sure you want to delete this project?')) {
            projectForm.delete(route('projects.destroy', projectId));
        }
    };

    const handleEditProject = (project) => {
        setEditingProject(project);
        projectForm.setData({
            title: project.title,
            slug: project.slug,
            description: project.description || '',
            tech_stack: project.tech_stack || '',
            image: project.image || '',
            url: project.url || '',
            featured: project.featured || false,
        });
        setShowProjectForm(true);
    };

    const Layout = auth?.user ? AuthenticatedLayout : MainLayout;

    return (
        <Layout user={auth?.user}>
            <Head title="Projects" />
            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-heading font-bold text-white">Projects</h1>
                    {auth?.user && (
                        <button
                            onClick={() => {
                                setEditingProject(null);
                                projectForm.reset();
                                setShowProjectForm(!showProjectForm);
                            }}
                            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors"
                        >
                            {showProjectForm ? 'Cancel' : 'Add Project'}
                        </button>
                    )}
                </div>

                {/* Project Form */}
                {showProjectForm && (
                    <div className="bg-dark-surface p-6 rounded-xl border border-dark-border mb-8">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            {editingProject ? 'Edit Project' : 'Create New Project'}
                        </h2>
                        <form onSubmit={handleProjectSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Title *
                                </label>
                                <input
                                    type="text"
                                    value={projectForm.data.title}
                                    onChange={(e) => projectForm.setData('title', e.target.value)}
                                    className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    required
                                />
                                {projectForm.errors.title && (
                                    <p className="text-red-500 text-sm mt-1">{projectForm.errors.title}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Slug *
                                </label>
                                <input
                                    type="text"
                                    value={projectForm.data.slug}
                                    onChange={(e) => projectForm.setData('slug', e.target.value)}
                                    className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    required
                                />
                                {projectForm.errors.slug && (
                                    <p className="text-red-500 text-sm mt-1">{projectForm.errors.slug}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Description
                                </label>
                                <textarea
                                    value={projectForm.data.description}
                                    onChange={(e) => projectForm.setData('description', e.target.value)}
                                    rows="4"
                                    className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Tech Stack
                                </label>
                                <input
                                    type="text"
                                    value={projectForm.data.tech_stack}
                                    onChange={(e) => projectForm.setData('tech_stack', e.target.value)}
                                    placeholder="React, Node.js, MongoDB"
                                    className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    value={projectForm.data.image}
                                    onChange={(e) => projectForm.setData('image', e.target.value)}
                                    className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">
                                    Project URL
                                </label>
                                <input
                                    type="url"
                                    value={projectForm.data.url}
                                    onChange={(e) => projectForm.setData('url', e.target.value)}
                                    className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                />
                            </div>

                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="featured"
                                    checked={projectForm.data.featured}
                                    onChange={(e) => projectForm.setData('featured', e.target.checked)}
                                    className="w-4 h-4 text-primary-600 bg-dark-bg border-dark-border rounded focus:ring-primary-500"
                                />
                                <label htmlFor="featured" className="ml-2 text-sm text-gray-300">
                                    Featured Project
                                </label>
                            </div>

                            <div className="flex gap-4">
                                <button
                                    type="submit"
                                    disabled={projectForm.processing}
                                    className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
                                >
                                    {projectForm.processing ? 'Saving...' : editingProject ? 'Update Project' : 'Create Project'}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowProjectForm(false);
                                        setEditingProject(null);
                                        projectForm.reset();
                                    }}
                                    className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.length === 0 ? (
                        <div className="col-span-full text-center py-12">
                            <p className="text-gray-400 text-lg">No projects yet. Create your first project!</p>
                        </div>
                    ) : (
                        projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-dark-surface p-6 rounded-xl border border-dark-border hover:border-primary-500 transition-all group"
                            >
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-48 object-cover rounded-lg mb-4"
                                    />
                                )}
                                
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                    {project.featured && (
                                        <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded">
                                            Featured
                                        </span>
                                    )}
                                </div>
                                
                                {project.tech_stack && (
                                    <p className="text-sm text-primary-400 mb-2">{project.tech_stack}</p>
                                )}
                                
                                <p className="text-gray-400 mb-4">{project.description}</p>
                                
                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-500 hover:text-primary-400 text-sm inline-block mb-4"
                                    >
                                        View Project →
                                    </a>
                                )}

                                {/* Team Members */}
                                {project.team_members && project.team_members.length > 0 && (
                                    <div className="mt-4 pt-4 border-t border-dark-border">
                                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Team Members</h4>
                                        <div className="space-y-2">
                                            {project.team_members.map((member) => (
                                                <div key={member.id} className="flex items-center gap-2">
                                                    {member.image && (
                                                        <img
                                                            src={member.image}
                                                            alt={member.name}
                                                            className="w-8 h-8 rounded-full"
                                                        />
                                                    )}
                                                    <div>
                                                        <p className="text-sm text-white">{member.name}</p>
                                                        <p className="text-xs text-gray-400">{member.role}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {auth?.user && (
                                    <div className="flex gap-2 mt-4 pt-4 border-t border-dark-border">
                                        <button
                                            onClick={() => {
                                                setSelectedProject(project);
                                                teamMemberForm.setData('project_id', project.id);
                                                setShowTeamMemberForm(true);
                                            }}
                                            className="text-sm bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition-colors"
                                        >
                                            Add Member
                                        </button>
                                        <button
                                            onClick={() => handleEditProject(project)}
                                            className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded transition-colors"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDeleteProject(project.id)}
                                            className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>

                {/* Team Member Form Modal */}
                {showTeamMemberForm && (
                    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
                        <div className="bg-dark-surface p-6 rounded-xl border border-dark-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <h2 className="text-2xl font-bold text-white mb-4">
                                Add Team Member to {selectedProject?.title}
                            </h2>
                            <form onSubmit={handleTeamMemberSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Name *
                                    </label>
                                    <input
                                        type="text"
                                        value={teamMemberForm.data.name}
                                        onChange={(e) => teamMemberForm.setData('name', e.target.value)}
                                        className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        required
                                    />
                                    {teamMemberForm.errors.name && (
                                        <p className="text-red-500 text-sm mt-1">{teamMemberForm.errors.name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Role *
                                    </label>
                                    <input
                                        type="text"
                                        value={teamMemberForm.data.role}
                                        onChange={(e) => teamMemberForm.setData('role', e.target.value)}
                                        placeholder="Frontend Developer, Designer, etc."
                                        className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Image URL
                                    </label>
                                    <input
                                        type="text"
                                        value={teamMemberForm.data.image}
                                        onChange={(e) => teamMemberForm.setData('image', e.target.value)}
                                        className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        Bio
                                    </label>
                                    <textarea
                                        value={teamMemberForm.data.bio}
                                        onChange={(e) => teamMemberForm.setData('bio', e.target.value)}
                                        rows="3"
                                        className="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        type="submit"
                                        disabled={teamMemberForm.processing}
                                        className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg transition-colors disabled:opacity-50"
                                    >
                                        {teamMemberForm.processing ? 'Adding...' : 'Add Team Member'}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowTeamMemberForm(false);
                                            setSelectedProject(null);
                                            teamMemberForm.reset();
                                        }}
                                        className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
