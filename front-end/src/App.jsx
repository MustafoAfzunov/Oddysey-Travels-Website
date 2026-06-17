import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Packages from './pages/Packages';
import TourDetail from './pages/TourDetail';
import About from './pages/About';
import Documents from './pages/Documents';
import Gallery from './pages/Gallery';
import Safety from './pages/Safety';
import Inquiry from './pages/Inquiry';
import Booking from './pages/Booking';
import SEO from './components/SEO';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function AppShell() {
    const { t } = useTranslation();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const packageName = params.get('package') || 'tour package';
    const date = params.get('date') || 'requested date';
    const chatText = encodeURIComponent(`Здравствуйте! Интересует пакет ${packageName} на дату ${date}.`);

    useEffect(() => {
        // Force light mode by ensuring dark class is never present.
        document.documentElement.classList.remove('dark');
        localStorage.removeItem('theme');
    }, []);

    return (
        <>
            <ScrollToTop />
            <div className="min-h-screen flex flex-col font-sans">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <SEO title={`Pamir Peaks | ${t('home.landing.hero_headline')}`} description={t('home.landing.hero_sub')} />
                                    <Home />
                                </>
                            }
                        />
                        <Route
                            path="/destinations"
                            element={
                                <>
                                    <SEO title={`${t('destinations.subtitle')} | Pamir Peaks`} description={t('destinations.desc')} />
                                    <Destinations />
                                </>
                            }
                        />
                        <Route
                            path="/packages"
                            element={
                                <>
                                    <SEO title={`${t('packages.title')} | Pamir Peaks`} description={t('packages.title')} />
                                    <Packages />
                                </>
                            }
                        />
                        <Route
                            path="/packages/:slug"
                            element={
                                <>
                                    <SEO title={`Tour Details | Pamir Peaks`} description="Detailed itinerary and route information for this expedition." />
                                    <TourDetail />
                                </>
                            }
                        />
                        <Route
                            path="/about"
                            element={
                                <>
                                    <SEO title={`${t('about.title')} | Pamir Peaks`} description={t('about.p1')} />
                                    <About />
                                </>
                            }
                        />
                        <Route
                            path="/documents"
                            element={
                                <>
                                    <SEO title={`${t('documents.title')} | Pamir Peaks`} description={t('documents.legal_info')} />
                                    <Documents />
                                </>
                            }
                        />
                        <Route
                            path="/gallery"
                            element={
                                <>
                                    <SEO title={`${t('gallery.title')} | Pamir Peaks`} description={t('gallery.visual_archive')} />
                                    <Gallery />
                                </>
                            }
                        />
                        <Route
                            path="/safety"
                            element={
                                <>
                                    <SEO title={`${t('safety.tag')} | Pamir Peaks`} description={t('safety.desc')} />
                                    <Safety />
                                </>
                            }
                        />
                        <Route
                            path="/inquiry"
                            element={
                                <>
                                    <SEO title={`${t('inquiry.title')} | Pamir Peaks`} description={t('inquiry.desc')} />
                                    <Inquiry />
                                </>
                            }
                        />
                        <Route
                            path="/booking"
                            element={
                                <>
                                    <SEO title={`Booking | Pamir Peaks`} description="Create booking and complete payment." />
                                    <Booking />
                                </>
                            }
                        />
                    </Routes>
                </main>
                <Footer />

                <div className="fixed bottom-8 right-8 z-[60] group">
                    <button
                        type="button"
                        className="w-16 h-16 bg-[#25D366] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] flex items-center justify-center text-white hover:scale-110 transition-transform peer"
                    >
                        <span className="material-symbols-outlined text-3xl">chat</span>
                    </button>
                    <div className="absolute bottom-full right-0 mb-4 w-48 bg-white text-forest-deep rounded-2xl shadow-xl p-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto origin-bottom-right scale-95 group-hover:scale-100 transform duration-300">
                        <p className="text-xs font-bold mb-3 uppercase tracking-wider text-gray-500">Chat with us</p>
                        <a
                            href={`https://wa.me/992000000000?text=${chatText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors mb-1"
                        >
                            <span className="material-symbols-outlined text-[#25D366]">chat_bubble</span>
                            <span className="font-bold text-sm">WhatsApp</span>
                        </a>
                        <a
                            href={`https://t.me/pamirpeaks?text=${chatText}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <span className="material-symbols-outlined text-[#0088cc]">send</span>
                            <span className="font-bold text-sm">Telegram</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

function App() {
    return (
        <Router>
            <AppShell />
        </Router>
    );
}

export default App;
