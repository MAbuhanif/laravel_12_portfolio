import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Dashboard() {
    return (
        <MainLayout>
            <Head title="Admin Dashboard" />

            <div className="py-12 bg-dark-bg min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                        <p className="text-gray-400 mt-2">Manage your portfolio content from here.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Projects Card */}
                        <div className="bg-dark-surface p-6 rounded-xl border border-dark-border hover:border-primary-500/50 transition-colors">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-white">Projects</h2>
                                <span className="p-2 bg-primary-500/10 text-primary-500 rounded-lg">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </span>
                            </div>
                            <p className="text-gray-400 mb-6">Manage your portfolio projects. Add new ones or edit existing details.</p>
                            <div className="flex space-x-4">
                                <Link
                                    href={route('projects.create')}
                                    className="flex-1 bg-primary-600 hover:bg-primary-500 text-white text-center px-4 py-2 rounded-lg font-medium transition-colors"
                                >
                                    Add New Project
                                </Link>
                                <Link
                                    href={route('projects.index')} // Assuming index route exists for listing/managing
                                    className="flex-1 bg-dark-bg hover:bg-dark-border text-white text-center px-4 py-2 rounded-lg font-medium border border-dark-border transition-colors"
                                >
                                    View All
                                </Link>
                            </div>
                        </div>

                        {/* Team Members Card */}
                        <div className="bg-dark-surface p-6 rounded-xl border border-dark-border hover:border-primary-500/50 transition-colors">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-white">Team Members</h2>
                                <span className="p-2 bg-primary-500/10 text-primary-500 rounded-lg">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </span>
                            </div>
                            <p className="text-gray-400 mb-6">Manage your team members. Add new members or update their profiles.</p>
                            <div className="flex space-x-4">
                                <Link
                                    href={route('team-members.create')}
                                    className="flex-1 bg-primary-600 hover:bg-primary-500 text-white text-center px-4 py-2 rounded-lg font-medium transition-colors"
                                >
                                    Add New Member
                                </Link>
                                <Link
                                    href={route('team-members.index')} // Assuming index route exists
                                    className="flex-1 bg-dark-bg hover:bg-dark-border text-white text-center px-4 py-2 rounded-lg font-medium border border-dark-border transition-colors"
                                >
                                    View All
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
