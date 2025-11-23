import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Contact() {
    return (
        <MainLayout>
            <Head title="Contact" />
            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-heading font-bold text-white mb-8">Get in Touch</h1>
                <div className="max-w-2xl">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                            <input type="text" id="name" className="mt-1 block w-full rounded-md bg-dark-bg border-dark-border text-white focus:border-primary-500 focus:ring-primary-500" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                            <input type="email" id="email" className="mt-1 block w-full rounded-md bg-dark-bg border-dark-border text-white focus:border-primary-500 focus:ring-primary-500" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                            <textarea id="message" rows={4} className="mt-1 block w-full rounded-md bg-dark-bg border-dark-border text-white focus:border-primary-500 focus:ring-primary-500" />
                        </div>
                        <button type="submit" className="bg-primary-600 hover:bg-primary-500 text-white px-6 py-3 rounded-md font-medium transition-colors">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </MainLayout>
    );
}
