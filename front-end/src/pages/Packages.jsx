import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TOURS, localizeTour } from '../data/tours';

const Packages = () => {
    const { t, i18n } = useTranslation();

    const packages = TOURS.map((tour) => localizeTour(tour, i18n.resolvedLanguage));
    const [selectedLevels, setSelectedLevels] = useState([]);
    const [maxDays, setMaxDays] = useState(21);
    const [minPrice, setMinPrice] = useState(500);
    const [maxPrice, setMaxPrice] = useState(8000);

    const levels = useMemo(() => [...new Set(packages.map((pkg) => pkg.level))], [packages]);

    const parseDays = (duration = '') => {
        const match = duration.match(/\d+/);
        return match ? Number(match[0]) : 0;
    };

    const parsePrice = (price = '') => Number(price.replace(/[^\d]/g, '')) || 0;

    const filteredPackages = useMemo(
        () =>
            packages.filter((pkg) => {
                const price = parsePrice(pkg.price);
                const days = parseDays(pkg.duration);
                const levelMatch = selectedLevels.length === 0 || selectedLevels.includes(pkg.level);
                const daysMatch = days <= maxDays;
                const priceMatch = price >= minPrice && price <= maxPrice;
                return levelMatch && daysMatch && priceMatch;
            }),
        [packages, selectedLevels, maxDays, minPrice, maxPrice]
    );

    const toggleLevel = (level) => {
        setSelectedLevels((prev) => (prev.includes(level) ? prev.filter((item) => item !== level) : [...prev, level]));
    };

    return (
        <div className="pt-24 min-h-screen bg-background text-on-surface relative overflow-hidden">
            <div className="absolute inset-0 topo-bg" />
            <section className="relative px-6 md:px-12 lg:px-16 pt-8 pb-16 bg-gradient-to-b from-surface-container-lowest/40 to-transparent">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-primary font-jakarta text-label-caps uppercase tracking-[0.2em] mb-4">TACTICAL-LUXE MOUNTAINEERING</p>
                    <h1 className="font-playfair text-4xl md:text-6xl text-on-surface mb-5">{t('packages.title')}</h1>
                    <p className="max-w-2xl mx-auto text-on-surface-variant text-base md:text-lg">
                        Traverse the high passes of the Silk Road and conquer the untamed summits of the Roof of the World with our expert guides.
                    </p>
                </div>
            </section>

            <main className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-16 pb-24 flex flex-col xl:flex-row gap-10">
                <aside className="w-full xl:w-[320px] space-y-8">
                    <div className="glass-panel p-7 rounded-2xl">
                        <h3 className="font-playfair text-2xl text-on-surface mb-7">Advanced Filters</h3>
                        <div className="mb-7">
                            <p className="font-jakarta text-label-caps text-primary mb-4">DIFFICULTY LEVEL</p>
                            <div className="space-y-3 text-sm text-on-surface-variant">
                                {levels.map((level) => (
                                    <label key={level} className="flex items-center gap-3 cursor-pointer hover:text-primary transition-colors">
                                        <input
                                            type="checkbox"
                                            checked={selectedLevels.includes(level)}
                                            onChange={() => toggleLevel(level)}
                                            className="rounded border-outline-variant bg-surface-variant text-primary focus:ring-primary"
                                        />
                                        <span>{level}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mb-7">
                            <p className="font-jakarta text-label-caps text-primary mb-4">DURATION</p>
                            <input
                                type="range"
                                min="7"
                                max="30"
                                value={maxDays}
                                onChange={(e) => setMaxDays(Number(e.target.value))}
                                className="w-full accent-primary"
                            />
                            <div className="flex justify-between mt-2 text-[10px] font-bold text-on-surface-variant">
                                <span>7 DAYS</span>
                                <span>{maxDays} DAYS</span>
                            </div>
                        </div>
                        <div>
                            <p className="font-jakarta text-label-caps text-primary mb-4">PRICE RANGE (USD)</p>
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="bg-surface-variant p-2 rounded-lg border border-outline-variant text-center">
                                    <p className="text-[10px] text-on-surface-variant">MIN</p>
                                    <p className="font-bold text-on-surface">${minPrice}</p>
                                </div>
                                <div className="bg-surface-variant p-2 rounded-lg border border-outline-variant text-center">
                                    <p className="text-[10px] text-on-surface-variant">MAX</p>
                                    <p className="font-bold text-on-surface">${maxPrice}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <input
                                    type="range"
                                    min="500"
                                    max="8000"
                                    step="50"
                                    value={minPrice}
                                    onChange={(e) => setMinPrice(Math.min(Number(e.target.value), maxPrice))}
                                    className="w-full accent-primary"
                                />
                                <input
                                    type="range"
                                    min="500"
                                    max="8000"
                                    step="50"
                                    value={maxPrice}
                                    onChange={(e) => setMaxPrice(Math.max(Number(e.target.value), minPrice))}
                                    className="w-full accent-primary"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-2xl overflow-hidden aspect-[3/4] flex flex-col justify-end p-6 shadow-2xl">
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbDXoNjcQLgoUy9YZIRZR8EymgUSxXmLJU2s47MVmJlLL-Aqoh9htvprlhflfWhI6R6Yy3PRjlXSalcmRYClD40llOgSgYQLkRnOZG3WhH58EoRg_6LQJ1v9U_KJX3E-ozzQ7zxVaiPddP2bQqqmDH4itDkwnpyY5-tGM_chUASl5sUsWtfO8cgQ_0sZpsINMzOeiwR_3gjlkfymPGcjlzxAXXOD4MxdF2OzySL8ZJka7IkPAqosWppdiAkhye4aiGXqtJAwhWpnmm"
                            alt="Promotion"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-transparent" />
                        <div className="relative z-10">
                            <span className="inline-block bg-primary text-on-primary text-[10px] font-jakarta font-bold uppercase px-2 py-1 rounded mb-4">NEW FOR 2026</span>
                            <h4 className="font-playfair text-white text-xl mb-2">Winter Solstice K7 Ascent</h4>
                            <p className="text-white/70 text-sm mb-5">Experience the absolute peak of adventure in the harshest conditions.</p>
                            <Link
                                to="/packages/tajikistan-kyrgyzstan-epic-2026-14d"
                                className="block text-center w-full bg-white/10 backdrop-blur-md border border-white/20 text-white py-3 rounded-xl font-bold hover:bg-white/20 transition-all"
                            >
                                Explore Expedition
                            </Link>
                        </div>
                    </div>
                </aside>

                <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                        <span className="font-jakarta text-label-caps text-on-surface-variant">SHOWING {filteredPackages.length} EXPEDITIONS</span>
                        <div className="flex items-center gap-3">
                            <span className="text-sm text-on-surface-variant">Sort by:</span>
                            <button className="bg-surface-container-high px-4 py-2 rounded-lg flex items-center gap-2 border border-outline-variant">
                                <span className="font-bold text-sm text-on-surface">Popularity</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {filteredPackages.map((pkg) => (
                            <div
                                key={pkg.slug}
                                className="group bg-surface-container-low rounded-3xl overflow-hidden border border-outline-variant/30 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img src={pkg.img} alt={pkg.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="bg-primary text-on-primary font-jakarta text-[10px] px-3 py-1 rounded-full uppercase">{pkg.level}</span>
                                        <span className="bg-black/50 backdrop-blur-md text-white font-jakarta text-[10px] px-3 py-1 rounded-full uppercase">{pkg.duration}</span>
                                    </div>
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4 gap-4">
                                        <h3 className="font-playfair text-card-title text-on-surface">{pkg.title}</h3>
                                        <span className="text-primary font-bold text-xl whitespace-nowrap">{pkg.price}</span>
                                    </div>
                                    <p className="text-on-surface-variant text-sm mb-7 line-clamp-3">{pkg.highlights}</p>
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex items-center text-on-surface-variant text-[10px] font-bold uppercase tracking-wider">
                                            <span className="material-symbols-outlined text-sm mr-1">map</span>
                                            {pkg.route}
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Link
                                                to={`/booking?package=${encodeURIComponent(pkg.title)}`}
                                                className="px-3 py-2 rounded-lg border border-primary/40 text-primary text-[10px] font-jakarta font-bold uppercase tracking-wider hover:bg-primary/10 transition-colors"
                                            >
                                                Book
                                            </Link>
                                            <Link to={`/packages/${pkg.slug}`} className="flex items-center gap-2 text-primary font-bold hover:translate-x-1 transition-transform">
                                                <span className="font-jakarta text-label-caps uppercase">{t('packages.view_details')}</span>
                                                <span className="material-symbols-outlined">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {filteredPackages.length === 0 && (
                        <div className="mt-8 text-center text-on-surface-variant">
                            No expeditions match your selected filters.
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default Packages;
