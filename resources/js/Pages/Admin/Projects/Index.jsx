import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Index({ projects }) {
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm('Are you sure you want to delete this project?')) {
            destroy(route('projects.destroy', id));
        }
    };

    return (
        <MainLayout>
            <Head title="Manage Projects" />

            <div className="py-12 bg-dark-bg min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-white">Projects</h1>
                            <p className="text-gray-400 mt-2">Manage your portfolio projects.</p>
                        </div>
                        <Link
                            href={route('projects.create')}
                            className="bg-primary-600 hover:bg-primary-500 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                        >
                            Add New Project
                        </Link>
                    </div>

                    <div className="bg-dark-surface rounded-xl border border-dark-border overflow-hidden">
                        <table className="min-w-full divide-y divide-dark-border">
                            <thead className="bg-dark-bg">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Slug
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-dark-border">
                                {projects.map((project) => (
                                    <tr key={project.id} className="hover:bg-dark-bg/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-white">{project.title}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-400">{project.slug}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                                project.featured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                            }`}>
                                                {project.featured ? 'Featured' : 'Standard'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <Link
                                                href={route('projects.edit', project.id)}
                                                className="text-primary-500 hover:text-primary-400 mr-4"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(project.id)}
                                                className="text-red-500 hover:text-red-400"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {projects.length === 0 && (
                            <div className="p-6 text-center text-gray-400">
                                No projects found. Start by adding one!
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
