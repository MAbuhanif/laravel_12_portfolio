import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home" />
            
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-dark-bg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-bg z-0" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-primary-400 font-medium tracking-wider uppercase mb-4">Full Stack Developer</h2>
                        <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
                            Building digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                                experiences that matter.
                            </span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                            I craft high-performance websites and applications with a focus on design, user experience, and clean code.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/projects"
                                className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-primary-900/30 hover:shadow-primary-500/40 hover:-translate-y-1"
                            >
                                View My Work
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-dark-surface hover:bg-dark-border text-white border border-dark-border px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Section (Placeholder) */}
            <section className="py-24 bg-dark-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Selected Works</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">A glimpse into my recent projects and experiments.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item * 0.1 }}
                                className="group relative bg-dark-bg rounded-2xl overflow-hidden border border-dark-border hover:border-primary-500/50 transition-colors duration-300"
                            >
                                <div className="aspect-video bg-dark-surface/50 group-hover:bg-dark-surface transition-colors duration-300 flex items-center justify-center">
                                    <span className="text-gray-600">Project Preview</span>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">Project Name</h3>
                                    <p className="text-gray-400 text-sm mb-4">Laravel, React, Tailwind CSS</p>
                                    <Link href="/projects" className="text-primary-400 text-sm font-medium hover:text-primary-300 inline-flex items-center">
                                        View Details 
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-12">
                        <Link href="/projects" className="text-white hover:text-primary-400 font-medium transition-colors border-b border-primary-500/30 hover:border-primary-500 pb-1">
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
