import { Head, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        role: '',
        bio: '',
        image: '',
        social_links: {},
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('team-members.store'));
    };

    return (
        <MainLayout>
            <Head title="Add Team Member" />

            <div className="py-12 bg-dark-bg min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto bg-dark-surface p-8 rounded-2xl border border-dark-border">
                        <h2 className="text-2xl font-bold text-white mb-6">Add Team Member</h2>

                        <form onSubmit={submit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                    className="mt-1 block w-full bg-dark-bg border-dark-border rounded-md shadow-sm text-white focus:border-primary-500 focus:ring-primary-500"
                                    required
                                />
                                {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                            </div>

                            <div>
                                <label htmlFor="role" className="block text-sm font-medium text-gray-300">Role</label>
                                <input
                                    id="role"
                                    type="text"
                                    value={data.role}
                                    onChange={(e) => setData('role', e.target.value)}
                                    className="mt-1 block w-full bg-dark-bg border-dark-border rounded-md shadow-sm text-white focus:border-primary-500 focus:ring-primary-500"
                                    required
                                />
                                {errors.role && <div className="text-red-500 text-sm mt-1">{errors.role}</div>}
                            </div>

                            <div>
                                <label htmlFor="bio" className="block text-sm font-medium text-gray-300">Bio</label>
                                <textarea
                                    id="bio"
                                    value={data.bio}
                                    onChange={(e) => setData('bio', e.target.value)}
                                    className="mt-1 block w-full bg-dark-bg border-dark-border rounded-md shadow-sm text-white focus:border-primary-500 focus:ring-primary-500"
                                    rows="4"
                                />
                                {errors.bio && <div className="text-red-500 text-sm mt-1">{errors.bio}</div>}
                            </div>

                            <div>
                                <label htmlFor="image" className="block text-sm font-medium text-gray-300">Image URL (Optional)</label>
                                <input
                                    id="image"
                                    type="text"
                                    value={data.image}
                                    onChange={(e) => setData('image', e.target.value)}
                                    className="mt-1 block w-full bg-dark-bg border-dark-border rounded-md shadow-sm text-white focus:border-primary-500 focus:ring-primary-500"
                                    placeholder="https://example.com/image.jpg"
                                />
                                {errors.image && <div className="text-red-500 text-sm mt-1">{errors.image}</div>}
                            </div>

                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-primary-600 hover:bg-primary-500 text-white px-6 py-2 rounded-md font-semibold transition-colors disabled:opacity-50"
                                >
                                    Add Member
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
