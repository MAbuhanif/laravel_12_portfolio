import { Head, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import ImageInput from '@/Components/ImageInput';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        slug: '',
        description: '',
        tech_stack: '',
        image: '',
        url: '',
        featured: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('projects.store'));
    };

    return (
        <MainLayout>
            <Head title="Add Project" />

            <div className="py-12 bg-dark-bg min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto bg-dark-surface p-8 rounded-2xl border border-dark-border">
                        <h2 className="text-2xl font-bold text-white mb-6">Add New Project</h2>

                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium text-gray-300">Project Title</label>
                                <input
                                    id="title"
                                    type="text"
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    className="mt-1 block w-full bg-dark-bg border-dark-border rounded-md shadow-sm text-white focus:border-primary-500 focus:ring-primary-500"
                                    required
                                />
                                {errors.title && <div className="text-red-500 text-sm mt-1">{errors.title}</div>}
                            </div>

                            <div>
                                <label htmlFor="slug" className="block text-sm font-medium text-gray-300">Slug</label>
                                <input
                                    id="slug"
                                    type="text"
                                    value={data.slug}
                                    onChange={(e) => setData('slug', e.target.value)}
                                    className="mt-1 block w-full bg-dark-bg border-dark-border rounded-md shadow-sm text-white focus:border-primary-500 focus:ring-primary-500"
                                    placeholder="project-slug"
                                    required
                                />
                                {errors.slug && <div className="text-red-500 text-sm mt-1">{errors.slug}</div>}
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-300">Description</label>
                                <textarea
                                    id="description"
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    className="mt-1 block w-full bg-dark-bg border-dark-border rounded-md shadow-sm text-white focus:border-primary-500 focus:ring-primary-500"
                                    rows="4"
                                />
                                {errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
                            </div>

                            <div>
                                <label htmlFor="tech_stack" className="block text-sm font-medium text-gray-300">Tech Stack</label>
                                <input
                                    id="tech_stack"
                                    type="text"
                                    value={data.tech_stack}
                                    onChange={(e) => setData('tech_stack', e.target.value)}
                                    className="mt-1 block w-full bg-dark-bg border-dark-border rounded-md shadow-sm text-white focus:border-primary-500 focus:ring-primary-500"
                                    placeholder="Laravel, React, Tailwind CSS"
                                />
                                {errors.tech_stack && <div className="text-red-500 text-sm mt-1">{errors.tech_stack}</div>}
                            </div>

                            <div>
                                <ImageInput
                                    label="Project Image"
                                    name="image"
                                    error={errors.image}
                                    onChange={(file) => setData('image', file)}
                                />
                            </div>

                            <div>
                                <label htmlFor="url" className="block text-sm font-medium text-gray-300">Project URL (Optional)</label>
                                <input
                                    id="url"
                                    type="url"
                                    value={data.url}
                                    onChange={(e) => setData('url', e.target.value)}
                                    className="mt-1 block w-full bg-dark-bg border-dark-border rounded-md shadow-sm text-white focus:border-primary-500 focus:ring-primary-500"
                                    placeholder="https://project-url.com"
                                />
                                {errors.url && <div className="text-red-500 text-sm mt-1">{errors.url}</div>}
                            </div>

                            <div className="flex items-center">
                                <input
                                    id="featured"
                                    type="checkbox"
                                    checked={data.featured}
                                    onChange={(e) => setData('featured', e.target.checked)}
                                    className="h-4 w-4 bg-dark-bg border-dark-border rounded text-primary-600 focus:ring-primary-500"
                                />
                                <label htmlFor="featured" className="ml-2 block text-sm text-gray-300">
                                    Featured Project
                                </label>
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-primary-600 hover:bg-primary-500 text-white px-6 py-2 rounded-md font-semibold transition-colors disabled:opacity-50"
                                >
                                    Add Project
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
