import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { usePage } from '@inertiajs/react';

export default function MainLayout({ children }) {
    const { auth } = usePage().props;
    
    return (
        <div className="min-h-screen bg-dark-bg text-gray-100 font-sans selection:bg-primary-500 selection:text-white flex flex-col">
            <Navbar auth={auth} />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
