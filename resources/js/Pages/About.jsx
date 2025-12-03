import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import { motion } from 'framer-motion';

export default function About({ teamMembers = [] }) {
    return (
        <MainLayout>
            <Head title="About Us" />
            
            <div className="py-24 bg-dark-bg min-h-screen">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="text-center mb-20">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
                        >
                            About Abyssinya
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                        >
                            We are a team of passionate developers dedicated to building high-quality websites and applications.
                            With expertise in modern technologies, we create seamless digital experiences.
                        </motion.p>
                    </div>

                    {/* Team Members Section */}
                    {teamMembers.length > 0 && (
                        <div className="mt-24">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl font-heading font-bold text-white mb-4">Meet Our Team</h2>
                                <p className="text-gray-400">The talented people behind our success.</p>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {teamMembers.map((member, index) => (
                                    <motion.div
                                        key={member.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-dark-surface p-8 rounded-2xl border border-dark-border text-center hover:border-primary-500/50 transition-colors duration-300"
                                    >
                                        <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-primary-500/30">
                                            <img src={member.getFirstMediaUrl('images')} alt={member.name}/>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                        <p className="text-primary-400 font-medium mb-4">{member.role}</p>
                                        {member.bio && (
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6">{member.bio}</p>
                                        )}
                                        
                                        {member.social_links && (
                                            <div className="flex justify-center space-x-4">
                                                {/* Render social links if any */}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}
