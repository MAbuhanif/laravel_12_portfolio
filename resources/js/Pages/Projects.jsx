import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Projects() {
    return (
        <MainLayout>
            <Head title="Projects" />
            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-heading font-bold text-white mb-8">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Project cards will go here */}
                    <div className="bg-dark-surface p-6 rounded-xl border border-dark-border">
                        <h3 className="text-xl font-bold text-white mb-2">Project 1</h3>
                        <p className="text-gray-400">Description of project 1.</p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
