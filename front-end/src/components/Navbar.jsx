import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const location = useLocation();
    const { t, i18n } = useTranslation();
    const [isVisible, setIsVisible] = React.useState(true);
    const [lastScrollY, setLastScrollY] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down & past threshold
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const navLinks = [
        { name: t('navbar.home'), path: '/' },
        { name: t('navbar.packages'), path: '/packages' },
        { name: t('navbar.destinations', 'Destinations'), path: '/destinations' },
        { name: t('navbar.about'), path: '/about' },
        { name: t('navbar.documents'), path: '/documents' },
        { name: t('navbar.gallery'), path: '/gallery' },
        { name: t('navbar.contacts'), path: '/inquiry' },
    ];

    const navShell = 'glass-nav shadow-lg';

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 ${navShell} transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3 group shrink-0">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                        <img
                            src="/logo-nav.png"
                            alt="Odyssey Travels Logo"
                            className="w-full h-full object-contain transition-transform group-hover:scale-110 group-hover:rotate-3"
                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-black tracking-tight drop-shadow-md font-serif text-forest-deep dark:text-white">
                            Odyssey Travels
                        </h2>
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase leading-none block text-primary">
                            {t('navbar.slogan')}
                        </span>
                    </div>
                </Link>

                <div className="hidden lg:flex items-center gap-8 ml-10 lg:ml-14 xl:ml-16 mr-auto">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-semibold transition-colors uppercase tracking-wider text-[11px] whitespace-nowrap ${
                                location.pathname === link.path
                                    ? 'text-primary'
                                    : 'text-forest-deep dark:text-white hover:text-primary'
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4 ml-6">
                    <div className="hidden sm:flex rounded-lg p-1 bg-gray-100">
                        {['ru', 'en'].map((l) => (
                            <button
                                key={l}
                                type="button"
                                onClick={() => i18n.changeLanguage(l)}
                                className={`px-2 py-1 text-[10px] font-bold rounded-md transition-all ${
                                    i18n.resolvedLanguage === l
                                        ? 'bg-primary text-white shadow-sm'
                                        : 'text-forest-deep dark:text-white/60 hover:text-primary dark:hover:text-white'
                                }`}
                            >
                                {l.toUpperCase()}
                            </button>
                        ))}
                    </div>

                    <Link
                        to="/packages"
                        className="hidden sm:flex text-white px-6 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest whitespace-nowrap transition-all shadow-lg active:scale-95 bg-primary hover:bg-primary/90 shadow-primary/20"
                    >
                        {t('navbar.book_now')}
                    </Link>
                    <button
                        type="button"
                        className="p-2 rounded-full transition-colors lg:hidden hover:bg-primary/10 text-forest-deep dark:text-white"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
