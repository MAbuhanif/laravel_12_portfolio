import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen bg-dark-bg text-gray-100 font-sans selection:bg-primary-500 selection:text-white flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
