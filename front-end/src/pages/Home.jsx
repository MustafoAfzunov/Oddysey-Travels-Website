import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="bg-forest-deep font-display text-white relative min-h-[100dvh] overflow-x-hidden">
            <div className="relative min-h-[100dvh] w-full flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 md:pt-32 md:pb-24">
                <div
                    className="absolute inset-0 z-0 transition-transform duration-200 ease-out scale-110"
                    style={{ transform: `translate3d(${mousePos.x * -0.5}px, ${mousePos.y * -0.5}px, 0)` }}
                >
                    <div className="absolute inset-0 hero-gradient z-10 pointer-events-none" />
                    <img
                        alt="Pamir Mountains"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLs3r4u7T0FYp_EBL-1UeXrL-jEq-ClIFFXkvetf8derqYMwo4a0ZGh6v9NwmroJ8BDF5UkEQMCBnJnxOXS2-udNfXHJfi6FK7-ByspuGh5Y62jG7zlAaLQaI90Xfdy-HlvDkeGCjengEKe720EILAhcfMPQxtXputc80dzIhK0GBnesEx7XV7TSAyaCvhQUXjeZQ1pFVCR2fYlRyAkrrlvDJ32TOXQ9pMF3kyd8q7XnHQg-LCHox-mbk9EoZNU6C7uGW1VOYcI-7F"
                    />
                </div>

                <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col items-center gap-8">
                    <span className="inline-block py-1.5 px-6 rounded-full border border-primary/30 text-primary text-[10px] font-black tracking-[0.3em] uppercase bg-primary/10 backdrop-blur-md">
                        {t('home.hero_tag')}
                    </span>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold text-white leading-[1.12] md:leading-[1.1] tracking-tight [text-shadow:0_2px_32px_rgba(0,0,0,0.55)]">
                        <span className="block">{t('home.hero_title')}</span>
                        <span className="block mt-3 md:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium italic text-white/95">
                            {t('home.hero_subtitle')}
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed [text-shadow:0_1px_4px_rgba(0,0,0,0.85)]">
                        {t('home.hero_desc')}
                    </p>

                    <div className="w-full max-w-5xl rounded-3xl border border-white/15 bg-white/[0.08] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-5 md:p-7">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-left">
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/45 mb-2">
                                    {t('home.landing.from_label')}
                                </label>
                                <input
                                    type="text"
                                    placeholder={t('home.landing.from_ph')}
                                    className="w-full rounded-2xl border border-white/15 bg-forest-deep/70 py-3 px-4 text-sm font-semibold text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/45 mb-2">
                                    {t('home.landing.to_label')}
                                </label>
                                <input
                                    type="text"
                                    placeholder={t('home.landing.to_ph')}
                                    className="w-full rounded-2xl border border-white/15 bg-forest-deep/70 py-3 px-4 text-sm font-semibold text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/45 mb-2">
                                    {t('home.landing.dates_label')}
                                </label>
                                <input
                                    type="text"
                                    placeholder={t('home.landing.dates_ph')}
                                    className="w-full rounded-2xl border border-white/15 bg-forest-deep/70 py-3 px-4 text-sm font-semibold text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-bold uppercase tracking-widest text-white/45 mb-2">
                                    {t('home.landing.guests_label')}
                                </label>
                                <input
                                    type="text"
                                    placeholder={t('home.landing.guests_ph')}
                                    className="w-full rounded-2xl border border-white/15 bg-forest-deep/70 py-3 px-4 text-sm font-semibold text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div className="flex items-end">
                                <Link
                                    to="/packages"
                                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-primary text-forest-deep font-bold text-xs uppercase tracking-widest shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-[0.98]"
                                >
                                    {t('home.landing.find_cta')}
                                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                        <Link
                            to="/destinations"
                            className="w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-2xl font-bold transition-transform hover:scale-105 shadow-xl shadow-primary/20"
                        >
                            {t('home.explore_map')}
                        </Link>
                        <Link
                            to="/packages"
                            className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold transition-all hover:bg-white/20"
                        >
                            {t('home.view_packages')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
