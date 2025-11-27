import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function About() {
    return (
        <MainLayout>
            <Head title="About Us" />
            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-heading font-bold text-white mb-8">About Us</h1>
                <div className="prose prose-invert max-w-none">
                    <p className="text-xl text-gray-300 leading-relaxed">
                        We are a team of passionate developers dedicated to building high-quality software solutions.
                        With expertise in modern technologies, we create seamless digital experiences.
                    </p>
                </div>
                {/* Members */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                    <div className="bg-dark-bg rounded-xl p-6 text-center">
                        <img src="https://via.placeholder.com/150" alt="Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">John Doe</h3>
                        <p className="text-gray-400 text-sm">Software Engineer</p>
                    </div>
                    <div className="bg-dark-bg rounded-xl p-6 text-center">
                        <img src="https://via.placeholder.com/150" alt="Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">John Doe</h3>
                        <p className="text-gray-400 text-sm">Software Engineer</p>
                    </div>
                    <div className="bg-dark-bg rounded-xl p-6 text-center">
                        <img src="https://via.placeholder.com/150" alt="Member" className="w-24 h-24 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">John Doe</h3>
                        <p className="text-gray-400 text-sm">Software Engineer</p>
                    </div>
                </div>
                {/* End Members */}
            </div>
        </MainLayout>
    );
}
