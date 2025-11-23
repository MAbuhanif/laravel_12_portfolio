import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function About() {
    return (
        <MainLayout>
            <Head title="About Me" />
            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-heading font-bold text-white mb-8">About Me</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-gray-300 leading-relaxed">
                        I am a passionate developer dedicated to building high-quality web applications.
                        With expertise in Laravel and React, I create seamless digital experiences.
                    </p>
                    {/* Add more content here */}
                </div>
            </div>
        </MainLayout>
    );
}
