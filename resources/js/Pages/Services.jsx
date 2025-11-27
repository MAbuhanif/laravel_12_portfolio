import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { motion } from 'framer-motion';

export default function Services() {
    const services = [
        {
            title: "Web Development",
            description: "We build fast, responsive, and scalable websites using modern frameworks like Laravel, React, and Vue.js.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Mobile App Development",
            description: "Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "UI/UX Design",
            description: "User-centered design that focuses on creating intuitive, engaging, and beautiful digital products.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
            )
        },
        {
            title: "E-Commerce Solutions",
            description: "Custom online stores with secure payment gateways, inventory management, and seamless checkout flows.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            )
        },
        {
            title: "SEO & Digital Marketing",
            description: "Strategies to improve your online visibility, drive traffic, and convert visitors into loyal customers.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
            )
        },
        {
            title: "Cloud Solutions",
            description: "Scalable cloud infrastructure setup, migration, and management using AWS, Google Cloud, or Azure.",
            icon: (
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        }
    ];

    return (
        <MainLayout>
            <Head title="Services" />
            
            <div className="py-24 bg-dark-bg min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                        >
                            Our Services
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-400 max-w-3xl mx-auto"
                        >
                            We offer a comprehensive range of digital solutions to help your business grow and succeed in the modern digital landscape.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-dark-surface p-8 rounded-2xl border border-dark-border hover:border-primary-500/50 transition-all duration-300 group hover:-translate-y-1"
                            >
                                <div className="w-14 h-14 bg-dark-bg rounded-xl flex items-center justify-center text-primary-500 mb-6 group-hover:scale-110 transition-transform duration-300 border border-dark-border group-hover:border-primary-500/30">
                                    {service.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-24 bg-gradient-to-r from-primary-900/20 to-dark-surface rounded-3xl p-8 md:p-12 text-center border border-dark-border relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your project?</h2>
                            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
                                Let's collaborate to bring your vision to life. Contact us today for a free consultation.
                            </p>
                            <a 
                                href="/contact" 
                                className="inline-block bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-primary-900/30 hover:shadow-primary-500/40 hover:-translate-y-1"
                            >
                                Get in Touch
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </MainLayout>
    );
}
