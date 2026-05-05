import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Gallery = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('all');
    const [selectedImage, setSelectedImage] = useState(null);
    const [showFullArchive, setShowFullArchive] = useState(false);
    const categories = t('gallery.categories', { returnObjects: true });
    const categoryMap = {
        all: categories?.[0] || 'All',
        expeditions: categories?.[1] || 'Expeditions',
        landscapes: categories?.[2] || 'Landscapes',
        culture: categories?.[3] || 'Culture',
        alpinism: categories?.[4] || 'Alpinism',
    };

    // Curated tourism photos from Pamir Mountains and Central Asia
    const images = [
        {
            src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
            category: "landscapes",
            title: "Pamir Mountain Range",
            location: "Tajikistan"
        },
        {
            src: "https://images.unsplash.com/photo-1463694775559-eea25626346b?auto=format&fit=crop&w=1600&q=80",
            category: "expeditions",
            title: "Summit Sunrise",
            location: "Peak Lenin"
        },
        {
            src: "https://images.unsplash.com/photo-1508264165352-258a6f82f4ee?auto=format&fit=crop&w=1600&q=80",
            category: "culture",
            title: "Emerald Alpine Lake",
            location: "GBAO Highlands"
        },
        {
            src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?auto=format&fit=crop&w=1600&q=80",
            category: "alpinism",
            title: "Glacier Traverse",
            location: "Tian Shan"
        },
        {
            src: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=80",
            category: "expeditions",
            title: "Wakhan Ridgeline",
            location: "Wakhan Corridor"
        },
        {
            src: "https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1600&q=80",
            category: "landscapes",
            title: "Fann Valley Vista",
            location: "Fann Mountains"
        },
        {
            src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1600&q=80",
            category: "culture",
            title: "Lake Reflection",
            location: "High Pamirs"
        },
        {
            src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80",
            category: "alpinism",
            title: "Peak Ascent",
            location: "7000m+"
        },
        {
            src: "https://images.unsplash.com/photo-1510312305653-8ed496efafd7?auto=format&fit=crop&w=1600&q=80",
            category: "landscapes",
            title: "Glacial Peaks",
            location: "Karakoram"
        },
        {
            src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1600&q=80",
            category: "landscapes",
            title: "Highland Lake Basin",
            location: "Pamir Plateau"
        },
        {
            src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80",
            category: "expeditions",
            title: "Ridge Traverse",
            location: "Trans-Alay"
        },
        {
            src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
            category: "landscapes",
            title: "Mirrorwater Pass",
            location: "Eastern Pamir"
        },
        {
            src: "https://images.unsplash.com/photo-1464823063530-08f10ed1a2dd?auto=format&fit=crop&w=1600&q=80",
            category: "alpinism",
            title: "Summit Window",
            location: "Lenin Sector"
        },
        {
            src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1600&q=80",
            category: "landscapes",
            title: "Snowline Geometry",
            location: "Central Asia Highlands"
        },
        {
            src: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=80",
            category: "culture",
            title: "Lake Camp Horizon",
            location: "Alichur"
        },
        {
            src: "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?auto=format&fit=crop&w=1600&q=80",
            category: "expeditions",
            title: "Vertical World",
            location: "Pamir Range"
        },
        {
            src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1600&q=80",
            category: "landscapes",
            title: "Turquoise Valley Lake",
            location: "Wakhan Corridor"
        },
        {
            src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80",
            category: "alpinism",
            title: "Storm over Glacier",
            location: "Muztag Sector"
        },
        {
            src: "https://images.unsplash.com/photo-1434394354979-a235cd36269d?auto=format&fit=crop&w=1600&q=80",
            category: "landscapes",
            title: "Frozen Blue Lake",
            location: "High Karakul"
        },
        {
            src: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1600&q=80",
            category: "culture",
            title: "Nomad Lakeside Dawn",
            location: "Tulpar Kul"
        }
    ];

    const filteredImages = activeTab === 'all'
        ? images
        : images.filter(img => img.category === activeTab);

    const layouts = [
        'md:col-span-8 md:row-span-2',
        'md:col-span-4 md:row-span-2',
        'md:col-span-4 md:row-span-1',
        'md:col-span-8 md:row-span-1',
        'md:col-span-4 md:row-span-1',
        'md:col-span-4 md:row-span-1',
        'md:col-span-4 md:row-span-1',
    ];

    const sourceItems = filteredImages.length ? filteredImages : images;
    const galleryItems = showFullArchive ? sourceItems : sourceItems.slice(0, 7);

    return (
        <div className="pt-24 min-h-screen bg-surface text-on-surface relative overflow-hidden">
            <div className="absolute inset-0 carto-grid pointer-events-none" />

            <main className="pt-10 pb-24 relative z-10">
                <header className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-14">
                    <div className="flex flex-col gap-6 max-w-3xl">
                        <span className="text-label-caps font-jakarta text-primary uppercase tracking-[0.3em]">{t('gallery.visual_archive')}</span>
                        <h1 className="text-4xl md:text-6xl font-playfair text-on-surface">
                            {t('gallery.title')}: <span className="italic text-primary">{t('gallery.visual_journey', 'A Visual Journey')}</span>
                        </h1>
                        <p className="text-body-lg text-on-surface-variant leading-relaxed">
                            {t('gallery.description', 'Where the earth meets the heavens in a silent dialogue of stone and snow. Our archive captures the raw, technical precision of high-altitude navigation.')}
                        </p>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-10 overflow-x-auto custom-scrollbar">
                    <div className="flex items-center gap-3 pb-4">
                        {Object.entries(categoryMap).map(([id, label]) => (
                            <button
                                key={id}
                                onClick={() => setActiveTab(id)}
                                className={`px-6 py-2 rounded-full border text-label-caps font-jakarta uppercase whitespace-nowrap transition-all ${
                                    activeTab === id
                                        ? 'glass-panel text-primary border-primary/40 bg-emerald-500/10'
                                        : 'glass-panel text-on-surface-variant hover:text-primary border-black/10 dark:border-white/10'
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>

                <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[260px] md:auto-rows-[280px]">
                    {galleryItems.map((img, idx) => (
                        <button
                            type="button"
                            key={`${img.title}-${idx}`}
                            className={`${layouts[idx % layouts.length]} relative group overflow-hidden rounded-2xl glass-panel text-left`}
                            onClick={() => setSelectedImage(img)}
                        >
                            <img src={img.src} alt={img.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-transparent to-transparent opacity-70" />
                            <div className="absolute top-5 left-5 flex flex-col gap-2">
                                <span className="bg-primary text-on-primary px-2 py-1 rounded-sm text-label-micro font-jakarta uppercase">
                                    {categoryMap[img.category] || img.category}
                                </span>
                                <span className="text-white/50 text-label-caps font-jakarta">{img.location}</span>
                            </div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h3 className="text-card-title font-playfair text-white mb-1">{img.title}</h3>
                                <p className="text-body-sm text-on-surface-variant max-w-md">{t('gallery.tap_to_open', 'Tap to open full-resolution view.')}</p>
                            </div>
                            <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-white">visibility</span>
                            </div>
                        </button>
                    ))}
                </section>

                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mt-16 flex flex-col items-center">
                    <div className="w-full h-px bg-white/10 mb-10" />
                    <button
                        type="button"
                        onClick={() => setShowFullArchive((prev) => !prev)}
                        className="group flex items-center gap-4 px-10 py-4 rounded-full border border-primary/30 hover:bg-primary/5 transition-all"
                    >
                        <span className="text-label-caps font-jakarta text-primary tracking-[0.3em]">
                            {showFullArchive ? t('gallery.show_less', 'SHOW LESS') : t('gallery.access_full_archive', 'ACCESS FULL ARCHIVE')}
                        </span>
                        <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">
                            {showFullArchive ? 'expand_less' : 'arrow_forward'}
                        </span>
                    </button>
                </div>
            </main>

            {selectedImage && (
                <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
                    <button
                        className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <span className="material-symbols-outlined text-white">close</span>
                    </button>
                    <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage.src} alt={selectedImage.title} className="w-full h-auto rounded-2xl shadow-2xl mb-6" />
                        <div className="text-center">
                            <span className="inline-block px-4 py-1.5 bg-primary text-on-primary text-xs font-bold uppercase tracking-widest rounded-full mb-3">
                                {selectedImage.category}
                            </span>
                            <h2 className="text-3xl font-playfair font-bold mb-2">{selectedImage.title}</h2>
                            <p className="text-white/60 flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                                {selectedImage.location}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
