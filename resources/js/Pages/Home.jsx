import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <MainLayout>
            <Head title="Home" />
            
            {/* Hero Section */}
            <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden py-12 sm:py-16">
                <div className="absolute inset-0 bg-dark-bg">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-dark-bg z-0" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-4 sm:space-y-6"
                    >
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white">
                            We are Abyssinya
                        </h2>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white leading-tight px-4 sm:px-0">
                            We are a{' '}
                            <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                                digital agency
                            </span>
                            <span className="block sm:inline"> that creates</span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                                experiences that matter.
                            </span>
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4 sm:px-6">
                            We are a team of passionate developers dedicated to building high-quality websites and applications.
                            With expertise in modern technologies, we create seamless digital experiences.
                        </p>
                        

                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4 sm:px-0">
                            <Link
                                href="/services"
                                className="bg-primary-600 hover:bg-primary-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-primary-900/30 hover:shadow-primary-500/40 hover:-translate-y-1 text-sm sm:text-base"
                            >
                                Our Services
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-dark-surface hover:bg-dark-border text-white border border-dark-border px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-dark-bg relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
                            Our Services
                        </h2>
                        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
                            Comprehensive digital solutions to help your business grow.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {[
                            {
                                title: "Web Development",
                                description: "We build fast, responsive, and scalable websites using modern frameworks like Laravel, React, and Vue.js.",
                                icon: (
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Mobile App Development",
                                description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
                                icon: (
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                )
                            },
                            {
                                title: "UI/UX Design",
                                description: "User-centered design that focuses on creating intuitive, engaging, and beautiful digital products.",
                                icon: (
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                                    </svg>
                                )
                            },
                            {
                                title: "E-Commerce Solutions",
                                description: "Custom online stores with secure payment gateways, inventory management, and seamless checkout flows.",
                                icon: (
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                )
                            },
                            {
                                title: "SEO & Digital Marketing",
                                description: "Strategies to improve your online visibility, drive traffic, and convert visitors into loyal customers.",
                                icon: (
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                )
                            },
                            {
                                title: "Cloud Solutions",
                                description: "Scalable cloud infrastructure setup, migration, and management using AWS, Google Cloud, or Azure.",
                                icon: (
                                    <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                )
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-dark-surface p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-dark-border hover:border-primary-500/50 transition-all duration-300 group hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-dark-bg rounded-xl flex items-center justify-center text-primary-500 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 border border-dark-border group-hover:border-primary-500/30">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-primary-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-8 sm:mt-10 md:mt-12">
                        <Link 
                            href="/services" 
                            className="text-white hover:text-primary-400 font-medium transition-colors border-b border-primary-500/30 hover:border-primary-500 pb-1 text-sm sm:text-base"
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Section*/}
            <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-dark-surface">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-12 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
                            Selected Works
                        </h2>
                        <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
                            A glimpse into our recent projects and experiments.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                        {[1, 2, 3].map((item) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: item * 0.1 }}
                                className="group relative bg-dark-bg rounded-xl sm:rounded-2xl overflow-hidden border border-dark-border hover:border-primary-500/50 transition-colors duration-300"
                            >
                                <div className="aspect-video bg-dark-surface/50 group-hover:bg-dark-surface transition-colors duration-300 flex items-center justify-center">
                                    <span className="text-gray-600 text-sm sm:text-base">Project Preview</span>
                                </div>
                                <div className="p-4 sm:p-5 md:p-6">
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2 group-hover:text-primary-400 transition-colors">
                                        Project Name
                                    </h3>
                                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                                        Laravel, React, Tailwind CSS
                                    </p>
                                    <Link 
                                        href="/projects" 
                                        className="text-primary-400 text-xs sm:text-sm font-medium hover:text-primary-300 inline-flex items-center"
                                    >
                                        View Details 
                                        <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    
                    <div className="text-center mt-8 sm:mt-10 md:mt-12">
                        <Link 
                            href="/projects" 
                            className="text-white hover:text-primary-400 font-medium transition-colors border-b border-primary-500/30 hover:border-primary-500 pb-1 text-sm sm:text-base"
                        >
                            View All Projects
                        </Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
