import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const HERO_BG =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD3NtxqEa7zjxJsnV7_NRKcrB_hXqIu2Nn1TWUS28crhFoI_8gfMv7pTn2bBhXm95h0MnKzBwkJaxsJrSDE4q-HcvdcTtZg-0e5iwW0ufoSr8RBWVI91DfmNGsy7-7K2CSCnKjUaRLSEISpxbttSt16IEMQj-aOy8iYNB1ey27wZLeN8UZ97kcyvARZ_2MOrTBRzHc6knbKxG8nkx_qMs-7dMXROaVbrSl1_K8XOjql1QEdf6hU2yadfTQREFrTIicZVkQslBj0G-AY';

const Home = () => {
    const { t } = useTranslation();
    const [mode, setMode] = useState('tours');
    const [rating, setRating] = useState(4.5);
    const [starClass, setStarClass] = useState(5);

    const cards = useMemo(() => {
        const raw = t('home.landing.cards', { returnObjects: true });
        return Array.isArray(raw) ? raw : [];
    }, [t]);

    const labelCaps = 'font-jakarta text-label-caps uppercase tracking-[0.2em]';

    return (
        <div className="bg-pamir-bg text-pamir-on font-jakarta overflow-x-hidden">
            <main className="relative min-h-screen pt-24 carto-grid">
                <section className="relative px-6 md:px-12 lg:px-16 pt-12 md:pt-20 pb-24 md:pb-32 flex flex-col items-center">
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none max-h-[720px]">
                        <div className="absolute inset-0 bg-gradient-to-b from-pamir-bg via-transparent to-pamir-bg z-[1]" />
                        <img alt="" className="w-full h-full object-cover" src={HERO_BG} />
                    </div>

                    <div className="z-10 w-full max-w-6xl text-center mb-10 md:mb-12">
                        <h1 className="font-playfair text-4xl sm:text-5xl md:text-display-xl text-pamir-primary mb-4 md:mb-6 leading-tight">
                            {t('home.landing.hero_headline')}
                        </h1>
                        <p className="text-lg text-pamir-secondary max-w-2xl mx-auto leading-relaxed">
                            {t('home.landing.hero_sub')}
                        </p>
                    </div>

                    <div className="z-10 w-full max-w-6xl glass-panel-home p-6 md:p-8 rounded-3xl shadow-2xl shadow-pamir-primary/10">
                        <div className="flex flex-wrap justify-start gap-3 md:gap-4 mb-8">
                            <button
                                type="button"
                                onClick={() => setMode('tours')}
                                className={`${labelCaps} px-5 md:px-6 py-2 rounded-full flex items-center gap-2 shadow-md transition-all ${
                                    mode === 'tours'
                                        ? 'bg-pamir-primary text-white'
                                        : 'bg-pamir-surfaceHigh hover:bg-pamir-surfaceHighest text-pamir-primary'
                                }`}
                            >
                                <span className="material-symbols-outlined text-sm">flight</span>
                                {t('home.landing.mode_tours')}
                            </button>
                            <button
                                type="button"
                                onClick={() => setMode('hotels')}
                                className={`${labelCaps} px-5 md:px-6 py-2 rounded-full flex items-center gap-2 transition-all ${
                                    mode === 'hotels'
                                        ? 'bg-pamir-primary text-white shadow-md'
                                        : 'bg-pamir-surfaceHigh hover:bg-pamir-surfaceHighest text-pamir-primary'
                                }`}
                            >
                                <span className="material-symbols-outlined text-sm">hotel</span>
                                {t('home.landing.mode_hotels')}
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                            <div className="md:col-span-3">
                                <label className={`${labelCaps} text-pamir-primary mb-2 block ml-2`}>{t('home.landing.from_label')}</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-pamir-primary/40 text-xl">
                                        location_on
                                    </span>
                                    <input
                                        className="w-full bg-pamir-surfaceLow border border-pamir-primary/10 rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-pamir-on placeholder:text-pamir-secondary/50 focus:ring-2 focus:ring-pamir-primary focus:border-transparent outline-none transition-all"
                                        placeholder={t('home.landing.from_ph')}
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-3">
                                <label className={`${labelCaps} text-pamir-primary mb-2 block ml-2`}>{t('home.landing.to_label')}</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-pamir-primary/40 text-xl">map</span>
                                    <input
                                        className="w-full bg-pamir-surfaceLow border border-pamir-primary/10 rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-pamir-on placeholder:text-pamir-secondary/50 focus:ring-2 focus:ring-pamir-primary focus:border-transparent outline-none transition-all"
                                        placeholder={t('home.landing.to_ph')}
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <label className={`${labelCaps} text-pamir-primary mb-2 block ml-2`}>{t('home.landing.dates_label')}</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-pamir-primary/40 text-xl">
                                        calendar_today
                                    </span>
                                    <input
                                        className="w-full bg-pamir-surfaceLow border border-pamir-primary/10 rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-sm text-pamir-on placeholder:text-pamir-secondary/50 focus:ring-2 focus:ring-pamir-primary focus:border-transparent outline-none transition-all"
                                        placeholder={t('home.landing.dates_ph')}
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <label className={`${labelCaps} text-pamir-primary mb-2 block ml-2`}>{t('home.landing.guests_label')}</label>
                                <div className="relative">
                                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-pamir-primary/40 text-xl">group</span>
                                    <input
                                        className="w-full bg-pamir-surfaceLow border border-pamir-primary/10 rounded-2xl py-3.5 md:py-4 pl-12 pr-4 text-sm text-pamir-on placeholder:text-pamir-secondary/50 focus:ring-2 focus:ring-pamir-primary focus:border-transparent outline-none transition-all"
                                        placeholder={t('home.landing.guests_ph')}
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-2 flex items-end">
                                <Link
                                    to="/packages"
                                    className="w-full bg-pamir-primary hover:bg-pamir-primary/90 text-white font-playfair text-lg py-3.5 md:py-4 rounded-2xl transition-all shadow-lg shadow-pamir-primary/20 active:scale-95 text-center"
                                >
                                    {t('home.landing.find_cta')}
                                </Link>
                            </div>
                        </div>

                        <div className="mt-8 md:mt-10 pt-8 border-t border-pamir-primary/10 grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <span className={`${labelCaps} text-pamir-on/50 block mb-4`}>{t('home.landing.filter_stars')}</span>
                                <div className="flex gap-2">
                                    {[3, 4, 5].map((s) => (
                                        <button
                                            key={s}
                                            type="button"
                                            onClick={() => setStarClass(s)}
                                            className={`w-10 h-10 rounded-lg border border-pamir-primary/10 flex items-center justify-center text-pamir-primary hover:bg-pamir-primary hover:text-white transition-all font-bold ${
                                                starClass === s ? 'bg-pamir-primary text-white' : 'bg-pamir-surfaceHigh'
                                            }`}
                                        >
                                            {s}*
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <span className={`${labelCaps} text-pamir-on/50 block mb-4`}>{t('home.landing.filter_meals')}</span>
                                <select className="w-full bg-pamir-surfaceLow border border-pamir-primary/10 rounded-xl py-2 px-4 text-pamir-on focus:ring-pamir-primary focus:ring-2 outline-none">
                                    <option>{t('home.landing.meal_ai')}</option>
                                    <option>{t('home.landing.meal_ultra')}</option>
                                    <option>{t('home.landing.meal_bb')}</option>
                                </select>
                            </div>
                            <div>
                                <span className={`${labelCaps} text-pamir-on/50 block mb-4`}>{t('home.landing.filter_rating')}</span>
                                <div className="flex items-center gap-2">
                                    <input
                                        className="accent-pamir-primary w-full min-w-0"
                                        max={5}
                                        min={0}
                                        step={0.1}
                                        type="range"
                                        value={rating}
                                        onChange={(e) => setRating(Number(e.target.value))}
                                    />
                                    <span className="text-pamir-primary font-bold whitespace-nowrap text-sm">
                                        {rating.toFixed(1)}+
                                    </span>
                                </div>
                            </div>
                            <div className="flex items-end">
                                <button
                                    type="button"
                                    className="flex items-center gap-2 text-pamir-primary font-jakarta text-label-caps uppercase tracking-widest hover:text-pamir-primary/70 transition-colors"
                                >
                                    <span className="material-symbols-outlined">tune</span>
                                    {t('home.landing.adv_filters')}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 md:px-12 lg:px-16 py-16 md:py-24">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-10 md:mb-12">
                        <div>
                            <span className={`${labelCaps} text-pamir-primary uppercase tracking-widest block mb-2`}>
                                {t('home.landing.dest_kicker')}
                            </span>
                            <h2 className="font-playfair text-3xl md:text-headline-md text-pamir-on">{t('home.landing.dest_title')}</h2>
                        </div>
                        <Link
                            to="/destinations"
                            className="text-pamir-secondary/80 font-jakarta text-label-caps uppercase tracking-widest border-b border-pamir-primary/20 pb-1 hover:text-pamir-primary hover:border-pamir-primary transition-all self-start sm:self-auto"
                        >
                            {t('home.landing.dest_view_all')}
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                        {cards.map((card, i) => (
                            <Link
                                key={`${card.title}-${i}`}
                                to="/packages"
                                className="group relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-lg shadow-pamir-primary/5 block"
                            >
                                <img alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={cardImages[i]} />
                                <div className="absolute inset-0 bg-gradient-to-t from-pamir-primary/80 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full w-fit mb-3 border border-white">
                                        <span className={`${labelCaps} text-pamir-primary text-[10px]`}>{card.badge}</span>
                                    </div>
                                    <h3 className="font-playfair text-card-title text-white mb-2">{card.title}</h3>
                                    <p className="text-white/80 text-sm mb-4 md:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-3">
                                        {card.desc}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-white font-bold text-sm md:text-base">{card.price}</span>
                                        <span className="material-symbols-outlined text-white opacity-0 group-hover:opacity-100 transition-all">
                                            arrow_forward
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="px-6 md:px-12 lg:px-16 py-12 md:py-20">
                    <div className="glass-panel-home rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 overflow-hidden relative shadow-2xl shadow-pamir-primary/10">
                        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none hidden md:block">
                            <svg className="w-full h-full text-pamir-primary fill-current" viewBox="0 0 100 100">
                                <path d="M10,90 Q50,10 90,90" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                <path d="M10,80 Q50,0 90,80" fill="none" stroke="currentColor" strokeWidth="0.2" />
                            </svg>
                        </div>
                        <div className="max-w-xl z-10 text-center lg:text-left">
                            <h2 className="font-playfair text-headline-md text-pamir-primary mb-4">{t('home.landing.news_title')}</h2>
                            <p className="text-pamir-secondary">{t('home.landing.news_desc')}</p>
                        </div>
                        <form
                            className="flex flex-col sm:flex-row w-full lg:w-auto gap-4 z-10"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            <input
                                className="bg-pamir-surfaceLow border border-pamir-primary/10 rounded-2xl px-6 py-4 text-pamir-on w-full lg:w-80 focus:ring-2 focus:ring-pamir-primary outline-none"
                                placeholder={t('home.landing.news_placeholder')}
                                type="email"
                            />
                            <button
                                type="submit"
                                className="bg-pamir-primary text-white font-jakarta text-label-caps uppercase tracking-widest px-8 md:px-10 py-4 rounded-2xl whitespace-nowrap shadow-lg shadow-pamir-primary/20 active:scale-95 transition-all"
                            >
                                {t('home.landing.news_cta')}
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
};

const cardImages = [
    'https://lh3.googleusercontent.com/aida-public/AB6AXuBzAmrwYef8mn9JxMVgd0BdXhZfWrG9cJS7e48L74rXo3ahUR0gdEgddKUygxzD8_PuqQ8eA4bZEbONOnP1sw5cmClS_NiPshYJJ65JNs5I0DK1izwxnLg3mLniB-IITVZdUmRhlDo6RaktO-uFTL_qsUUL83YVz3yjk9s9Z0V-wUDuk6OWEPrk0EI9MycqxNYfnyXeahgB7rZiETFuYsS5Hp3nm_5Edc0_T_JFrQManxLnsj613iqI2D4_BzJEtTpuwCV41fmEO9gz',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD0_u0iH75JbWqH0UqsctljrFDzQvw3Frw7EKiCtkZk4M4SK6eWZgB9fSNO7Y1-ZLEcfGGZtaQ6DirDc03HglMM-3A9NiXGyJmOYCB_NZ2nmBLuG6vQA-SRIdP1aeADeDgf4pUEPC1d0NlHs1IjnUVbmRT1fhO87leNtoBrHbHWt4echgedfWyJlkcqoeDG9seYPl24VIQ4oahq_98cqkhXUQYfvLUXKpgO690pKC_BD_ZijMj8yhItlFyI1pbxaqYgJNZfbHMY9Vii',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCZFYDsOVW4oCblcRlpKlyn0k3CiLXO1vJ92x3Bn36CrnSp8D1rxvDyvxnr7x7iUaa1srL2t1nJwhEAtQxPn2wZEPARFAjYrT61O4YBS6nvYl_C1C-GoloWyrbFT0K1dsdFCst4btFWuDb5bh37eB5EkrUXA0tg-jABmtg0KteM7gzaVzdVlolJOHrdgzKrddDnmsMDB-sJFgBhXuZLDqsgq6NnH_3rXb1203tOJcb2ytax38SbXsVBbqCRYZIuaRKnUS9bZjIuJatz',
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAYzb1XnoVewcLGjJIVdHN7aEKR-3YF3kusXT0azLgudqFx2PBa5kLcUC3iPt3CaIsniPlKkaJ4zk3ECiGzu0F9l7A4SbqzszX022o7Viy32IRc7fFgu62ETUaTaXHvHkRA9rvYsXB8oV7FfMx_ljSEcAYvwdjJAFYHKEazDEZn0ACjBVN2vz-R5BoD44UMmE6mDs9S7hSEb10cQOJ9I8_fYNAfSideLhS72LyjzFz51bfnD1qvMp63oXbX4D243uKC3SAQ9Q2CU8B8',
];

export default Home;
