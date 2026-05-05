import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { TOURS, localizeTour } from '../data/tours';

const Destinations = () => {
    const { t, i18n } = useTranslation();
    const [activeRegion, setActiveRegion] = useState('Wakhan');
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const allTag = t('packages.filters.0', 'All');
    const [selectedTag, setSelectedTag] = useState(allTag);
    const [activeCity, setActiveCity] = useState(null);
    const sidebarRef = React.useRef(null);
    const cardRefs = React.useRef({});

    React.useEffect(() => {
        if (activeRegion && cardRefs.current[activeRegion] && sidebarRef.current) {
            const card = cardRefs.current[activeRegion];
            sidebarRef.current.scrollTo({
                top: card.offsetTop - sidebarRef.current.offsetTop - 20, // Adjust offset as needed
                behavior: 'smooth'
            });
        }
    }, [activeRegion]);

    React.useEffect(() => {
        // Keep "All" filter label in sync with selected language.
        setSelectedTag(allTag);
    }, [allTag, i18n.resolvedLanguage]);

    const regions = [
        {
            id: 'Wakhan',
            name: t('destinations.regions.Wakhan.name'),
            alt: '3,200m',
            terrain: t('destinations.regions.Wakhan.terrain'),
            desc: t('destinations.regions.Wakhan.desc'),
            temp: '-10° to 25°C',
            months: 'May — Oct',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe_g58z-zE9BJFeptzQo8ZAborNL47RIj6dgDHF53BJhhYvLIrBqSWql81O7K-sXQ-8hu_6HEBGrruF7ttaQHq6Sy3_vYEoa6bKrjEXVFOet2UYqUt-DxqodJ1aPtukwPW0JQdJfR2r-OQd46u11qu1ebViontd4eP1v-DVelpvgF09Zka8zeyuVSVwMs6VnFrvywSMBeWWB6Kf0eW9BKLEU7hqmWSyU-zmol25TjZAsYuhUJesPBTiqnEZ1BdzgXK7hTt0wsEBV_u',
            tag: t('destinations.regions.Wakhan.tag')
        },
        {
            id: 'Fann',
            name: t('destinations.regions.Fann.name'),
            alt: '4,100m',
            terrain: t('destinations.regions.Fann.terrain'),
            desc: t('destinations.regions.Fann.desc'),
            temp: '-5° to 18°C',
            months: 'June — Sept',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBOOHgBGHMNwV5boJrY4TJvET85rpjLr3hpkdZ82aW4l-FBY5zlZ34FH6WPFO4CF47_Z0pN6z5PHfTn-T6SYyOMYPafAKSoTklE0ROm353IpmgeAgEdjoR8PsjWBJ1TD9uL2lA1FD7EDtwzclh0NjCCssdLZZXNcwt7maYB8ErEWjDAHEibRajnyVIZmjaCJn3M7cJvPdnRGAI3iCL7FchyRQS7ZVhZwRc6NrM8t4qc0AV61FvKdsumZor4bgibBHo9IcxvBnFatFbw',
            tag: t('destinations.regions.Fann.tag')
        },
        {
            id: 'GBAO',
            name: t('destinations.regions.GBAO.name'),
            alt: '4,800m',
            terrain: t('destinations.regions.GBAO.terrain'),
            desc: t('destinations.regions.GBAO.desc'),
            temp: '-15° to 12°C',
            months: 'July — Aug',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDheGFfaGYONHWdxILmQpNdHTy57FZL8PhKqfNHUxyAGqMIZB-TYr4uzzH3UfuGd2cS96ZYylYroQCAw6EHhUbhqegQ77j4OGUM4ALE9oaRx1nP2srwBtpgO7hBLWZeO54gl-tQDbsYYgFqvJt1a56lA9DPOgfUXS8-mcaX4Xx-z8jnbQ0VwkJPqXbr2IGyY6ROpS7vRYjfL83T_RawHCuJ6EPQlWPRyazX6i6cYlVK5Ps-pcJbwj93gzVu9exeygmfNgsfavH4aqUQ',
            tag: t('destinations.regions.GBAO.tag')
        },
        {
            id: 'TianShan',
            name: t('destinations.regions.TianShan.name'),
            alt: '7,439m',
            terrain: t('destinations.regions.TianShan.terrain'),
            desc: t('destinations.regions.TianShan.desc'),
            temp: '-20° to 10°C',
            months: 'July — Aug',
            img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1mVkWC6XoMSB4weZvKV_V8GgtZvccFpBQ8LToTr75Ec2U-LCJv8iFdkJfJyO_UfUCC9BJwUQtknA2i7TFg-3cxcVXfI002aPXRSdPD_5Yb93mFvczXD1H5oTFOpjArGMDqZz6YRR8C4RwiHwYHUxG0ngv6wPzsfkqOfRkVYM1HlRAMt6Tt_No8woLvafzFPL8Kia2cFll8_3uDDlaXKbb95uWnUpvdBjozSsi5dCWQckq9vGGyriAZOAT_dq7LfgoEX5r33N7f3Yd',
            tag: t('destinations.regions.TianShan.tag')
        }
    ];

    const uniqueTags = [allTag, ...new Set(regions.map(r => r.tag))];

    const filteredRegions = regions.filter(region => {
        const matchesSearch = region.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            region.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
            region.terrain.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesTag = selectedTag === allTag || region.tag === selectedTag;
        return matchesSearch && matchesTag;
    });

    const cityHotspots = [
        { id: 'dushanbe', label: 'Dushanbe', x: '18%', y: '58%', keywords: ['dushanbe'] },
        { id: 'khorog', label: 'Khorog', x: '34%', y: '54%', keywords: ['khorog'] },
        { id: 'ishkashim', label: 'Ishkashim', x: '39%', y: '61%', keywords: ['ishkashim'] },
        { id: 'langar', label: 'Langar', x: '47%', y: '52%', keywords: ['langar'] },
        { id: 'murghab', label: 'Murghab', x: '57%', y: '43%', keywords: ['murghab'] },
        { id: 'karakul', label: 'Karakul', x: '64%', y: '32%', keywords: ['karakul'] },
        { id: 'osh', label: 'Osh', x: '73%', y: '41%', keywords: ['osh'] },
        { id: 'sary-tash', label: 'Sary Tash', x: '69%', y: '36%', keywords: ['sary tash'] },
        { id: 'bishkek', label: 'Bishkek', x: '74%', y: '18%', keywords: ['bishkek'] },
        { id: 'song-kol', label: 'Song Kol', x: '66%', y: '22%', keywords: ['song kol'] },
        { id: 'arslanbob', label: 'Arslanbob', x: '71%', y: '30%', keywords: ['arslanbob'] },
        { id: 'karakol', label: 'Karakol', x: '67%', y: '20%', keywords: ['karakol'] },
    ];

    const localizedTours = TOURS.map((tour) => localizeTour(tour, i18n.resolvedLanguage));
    const tourMatchesForCity = activeCity
        ? localizedTours.filter((tour) => {
            const haystack = `${tour.title} ${tour.route} ${tour.overview} ${tour.itinerary.join(' ')}`.toLowerCase();
            return activeCity.keywords.some((k) => haystack.includes(k));
        })
        : [];

    return (
        <div className="bg-background text-on-surface font-sans min-h-screen">
            <div className="fixed inset-0 topo-pattern pointer-events-none opacity-40"></div>

            <main className="flex h-screen pt-20 relative">
                {/* Interactive Map Section */}
                <section className="hidden lg:flex flex-[1.4] relative items-center justify-center overflow-hidden bg-surface-container-low">
                    <div className="absolute top-24 left-16 z-10 max-w-md pointer-events-none">
                        <span className="inline-block py-1 px-3 glass-panel rounded-full text-[10px] font-bold text-primary uppercase tracking-widest mb-6">{t('destinations.subtitle')}</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-medium leading-[1.1] mb-6">{t('destinations.title')} <br /><span className="italic text-primary">{t('destinations.title_highlight')}</span></h1>
                        <p className="text-on-surface-variant text-lg leading-relaxed">
                            {t('destinations.desc')}
                        </p>
                    </div>

                    <div className="relative w-[800px] h-[600px] flex items-center justify-center translate-x-24">
                        <div className="absolute inset-0 rounded-full globe-glow border border-emerald-500/10 animate-pulse"></div>
                        <div className="relative w-[600px] h-[600px] rounded-full overflow-hidden bg-surface-container backdrop-blur-xl border border-outline-variant/40 flex items-center justify-center rotating-map">
                            <img
                                alt="Pamir Terrain"
                                className="w-full h-full object-cover opacity-95 saturate-125 contrast-105 scale-137 transition-transform duration-1000"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLs3r4u7T0FYp_EBL-1UeXrL-jEq-ClIFFXkvetf8derqYMwo4a0ZGh6v9NwmroJ8BDF5UkEQMCBnJnxOXS2-udNfXHJfi6FK7-ByspuGh5Y62jG7zlAaLQaI90Xfdy-HlvDkeGCjengEKe720EILAhcfMPQxtXputc80dzIhK0GBnesEx7XV7TSAyaCvhQUXjeZQ1pFVCR2fYlRyAkrrlvDJ32TOXQ9pMF3kyd8q7XnHQg-LCHox-mbk9EoZNU6C7uGW1VOYcI-7F"
                            />
                            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20">
                                {[...Array(144)].map((_, i) => <div key={i} className="border-[0.5px] border-primary/20"></div>)}
                            </div>
                        </div>

                        {/* Hotspots */}
                        {/* Wakhan (South) */}
                        <div className={`absolute bottom-[25%] left-[30%] flex items-center group cursor-pointer transition-all ${activeRegion === 'Wakhan' ? 'scale-125 z-50' : 'z-40'}`} onClick={() => setActiveRegion('Wakhan')}>
                            {/* Hover Card */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-40 h-28 rounded-xl overflow-hidden glass-panel border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none transform origin-bottom scale-90 group-hover:scale-100 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-50">
                                <img src={regions.find(r => r.id === 'Wakhan').img} className="w-full h-full object-cover" alt="Wakhan" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                                    <span className="text-[10px] font-bold uppercase tracking-wider">{t('destinations.regions.Wakhan.name')}</span>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute inset-0 bg-primary/50 rounded-full animate-ping scale-150"></div>
                                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10 shadow-lg shadow-primary/50"></div>
                            </div>
                            <div className={`ml-3 px-3 py-1 bg-surface-container-high/90 backdrop-blur rounded-lg text-[11px] font-bold tracking-tight transition-all whitespace-nowrap ${activeRegion === 'Wakhan' ? 'bg-primary text-on-primary' : 'group-hover:bg-primary/20'}`}>WAKHAN</div>
                        </div>

                        {/* GBAO (East) */}
                        <div className={`absolute top-[40%] right-[20%] flex items-center group cursor-pointer transition-all ${activeRegion === 'GBAO' ? 'scale-125 z-50' : 'z-40'}`} onClick={() => setActiveRegion('GBAO')}>
                            {/* Hover Card */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-40 h-28 rounded-xl overflow-hidden glass-panel border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none transform origin-bottom scale-90 group-hover:scale-100 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-50">
                                <img src={regions.find(r => r.id === 'GBAO').img} className="w-full h-full object-cover" alt="GBAO" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                                    <span className="text-[10px] font-bold uppercase tracking-wider">{t('destinations.regions.GBAO.name')}</span>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10 shadow-lg shadow-primary/50"></div>
                            </div>
                            <div className={`ml-3 px-3 py-1 bg-surface-container-high/90 backdrop-blur rounded-lg text-[11px] font-bold tracking-tight transition-all whitespace-nowrap uppercase ${activeRegion === 'GBAO' ? 'bg-primary text-on-primary' : 'group-hover:bg-primary/20'}`}>EASTERN PAMIR</div>
                        </div>

                        {/* Fann (West) */}
                        <div className={`absolute top-[30%] left-[20%] flex items-center group cursor-pointer transition-all ${activeRegion === 'Fann' ? 'scale-125 z-50' : 'z-40'}`} onClick={() => setActiveRegion('Fann')}>
                            {/* Hover Card */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-40 h-28 rounded-xl overflow-hidden glass-panel border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none transform origin-bottom scale-90 group-hover:scale-100 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-50">
                                <img src={regions.find(r => r.id === 'Fann').img} className="w-full h-full object-cover" alt="Fann" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                                    <span className="text-[10px] font-bold uppercase tracking-wider">{t('destinations.regions.Fann.name')}</span>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="w-3 h-3 bg-surface rounded-full border-2 border-background relative z-10"></div>
                            </div>
                            <div className={`ml-3 px-3 py-1 bg-surface-container-high/90 backdrop-blur rounded-lg text-[10px] font-bold transition-all whitespace-nowrap uppercase ${activeRegion === 'Fann' ? 'bg-primary text-on-primary' : 'opacity-60 group-hover:opacity-100 group-hover:bg-primary/20'}`}>Fann Mtns</div>
                        </div>

                        {/* Tian Shan (North) */}
                        <div className={`absolute top-[15%] right-[30%] flex items-center group cursor-pointer transition-all ${activeRegion === 'TianShan' ? 'scale-125 z-50' : 'z-40'}`} onClick={() => setActiveRegion('TianShan')}>
                            {/* Hover Card */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-40 h-28 rounded-xl overflow-hidden glass-panel border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none transform origin-bottom scale-90 group-hover:scale-100 shadow-[0_0_30px_rgba(0,0,0,0.5)] z-50">
                                <img src={regions.find(r => r.id === 'TianShan').img} className="w-full h-full object-cover" alt="Tian Shan" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                                    <span className="text-[10px] font-bold uppercase tracking-wider">{t('destinations.regions.TianShan.name')}</span>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="w-4 h-4 bg-surface rounded-full border-4 border-background relative z-10 shadow-lg shadow-white/30"></div>
                            </div>
                            <div className={`ml-3 px-3 py-1 bg-surface-container-high/90 backdrop-blur rounded-lg text-[10px] font-bold transition-all whitespace-nowrap uppercase ${activeRegion === 'TianShan' ? 'bg-surface text-on-surface' : 'opacity-60 group-hover:opacity-100 group-hover:bg-surface/60'}`}>TIAN SHAN</div>
                        </div>

                        {/* City Hotspots */}
                        {cityHotspots.map((city) => (
                            <button
                                key={city.id}
                                type="button"
                                className={`absolute z-[60] group -translate-x-1/2 -translate-y-1/2 ${activeCity?.id === city.id ? 'scale-110' : ''}`}
                                style={{ left: city.x, top: city.y }}
                                onClick={() => setActiveCity(city)}
                            >
                                <div className="w-3 h-3 bg-emerald-300 rounded-full border border-white shadow-lg shadow-emerald-400/50" />
                                <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-black/60 text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                    {city.label}
                                </span>
                            </button>
                        ))}
                    </div>

                    <div className="absolute bottom-12 left-16 flex items-center gap-10">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-[2px] bg-primary/30"></div>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">{t('destinations.stats.elevation')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-[2px] bg-outline-variant/50"></div>
                            <span className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">{t('destinations.stats.flow')}</span>
                        </div>
                    </div>
                </section>

                {/* Sidebar Region Guide */}
                <aside className="w-full lg:w-[500px] bg-surface-container-low/95 backdrop-blur-2xl border-l border-outline-variant/40 flex flex-col h-full relative z-40 shadow-2xl">
                    <div className="p-8 pt-10">
                        <div className="flex items-end justify-between mb-8">
                            <div>
                                <h3 className="text-3xl font-serif font-medium">{t('destinations.region_guide')}</h3>
                                <p className="text-sm text-on-surface-variant mt-1">{t('destinations.sub_region')}</p>
                            </div>
                            <button
                                className={`p-2 glass-panel rounded-lg hover:text-primary transition-colors ${isFilterOpen ? 'text-primary bg-white/10' : ''}`}
                                onClick={() => setIsFilterOpen(!isFilterOpen)}
                            >
                                <span className="material-symbols-outlined text-xl">tune</span>
                            </button>
                        </div>

                        <div className={`transition-all duration-300 overflow-hidden ${isFilterOpen ? 'max-h-20 mb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <div className="flex gap-2 overflow-x-auto custom-scrollbar pb-2">
                                {uniqueTags.map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => setSelectedTag(tag)}
                                        className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wide whitespace-nowrap transition-all ${selectedTag === tag
                                            ? 'bg-primary text-forest-deep'
                                            : 'glass-panel hover:bg-white/10'
                                            }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <input
                                className="w-full bg-surface border-outline-variant/40 rounded-2xl py-4 pl-12 pr-4 text-sm focus:ring-1 focus:ring-primary focus:border-primary transition-all placeholder:text-on-surface-variant text-on-surface outline-none"
                                placeholder={t('destinations.filter_placeholder')}
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors text-xl">search</span>
                        </div>
                    </div>

                    <div className="flex-1 overflow-y-auto custom-scrollbar px-8 pb-32 space-y-10" ref={sidebarRef}>
                        {activeCity && (
                            <div className="rounded-2xl border border-primary/25 bg-primary/10 p-5">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Tours covering {activeCity.label}</h4>
                                    <button
                                        type="button"
                                        onClick={() => setActiveCity(null)}
                                        className="text-xs text-on-surface-variant hover:text-on-surface transition-colors"
                                    >
                                        Clear
                                    </button>
                                </div>
                                {tourMatchesForCity.length > 0 ? (
                                    <div className="space-y-2">
                                        {tourMatchesForCity.map((tour) => (
                                            <Link
                                                key={tour.slug}
                                                to={`/packages/${tour.slug}`}
                                                className="block rounded-lg bg-surface-container-high hover:bg-surface-container-highest border border-outline-variant/50 px-3 py-2 transition-colors"
                                            >
                                                <p className="text-sm font-bold text-on-surface">{tour.title}</p>
                                                <p className="text-[11px] text-on-surface-variant mt-1">{tour.route}</p>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-sm text-on-surface-variant">No direct route found yet for this city in current catalog.</p>
                                )}
                            </div>
                        )}

                        {filteredRegions.map((region) => (
                            <div
                                key={region.id}
                                ref={el => cardRefs.current[region.id] = el}
                                className={`group relative transition-all duration-500 ${activeRegion === region.id ? 'opacity-100' : 'opacity-60 grayscale hover:grayscale-0 hover:opacity-90'}`}
                                onMouseEnter={() => setActiveRegion(region.id)}
                            >
                                <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-2xl">
                                    <img src={region.img} alt={region.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/80 via-transparent to-transparent"></div>
                                    <div className="absolute top-4 right-4 bg-primary text-forest-deep px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                        {region.tag}
                                    </div>
                                </div>
                                <div className="flex justify-between items-start mb-3">
                                    <h4 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors">{region.name}</h4>
                                    <div className="text-right">
                                        <span className="text-[10px] font-bold text-primary uppercase block mb-1">{t('destinations.stats.elevation')}</span>
                                        <p className="text-xl font-medium font-serif leading-none">{region.alt}</p>
                                    </div>
                                </div>
                                <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
                                    {region.desc}
                                </p>
                                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-outline-variant/40">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary text-xl">thermostat</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-on-surface-variant uppercase block">{t('destinations.stats.avg_temp')}</span>
                                            <span className="text-xs font-bold">{region.temp}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl glass-panel flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary text-xl">calendar_month</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-on-surface-variant uppercase block">{t('destinations.stats.best_season')}</span>
                                            <span className="text-xs font-bold">{region.months}</span>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/packages" className={`block text-center w-full mt-6 py-4 bg-surface-container-high rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-surface-container-highest transition-all ${activeRegion === region.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                                    {t('destinations.stats.explore_expedition')}
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-surface/90 backdrop-blur border-t border-outline-variant/40">
                        <div className="flex items-center gap-4">
                            <Link to="/inquiry" className="flex-1 block text-center bg-primary hover:bg-primary/90 text-on-primary py-4 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all active:scale-95 shadow-xl shadow-primary/20">
                                {t('destinations.stats.speak_specialist')}
                            </Link>
                            <Link to="/inquiry" className="w-14 h-14 bg-surface-container-high text-primary rounded-2xl flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                                <span className="material-symbols-outlined">forum</span>
                            </Link>
                        </div>
                    </div>
                </aside>
            </main>

            {/* Stats Section - Moved from Home */}
            <section className="py-20 bg-surface-container border-y border-outline-variant/40 relative z-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
                        <div>
                            <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">15+</p>
                            <p className="text-on-surface-variant text-sm uppercase tracking-widest font-bold">{t('destinations.stats.years_exp')}</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">100%</p>
                            <p className="text-on-surface-variant text-sm uppercase tracking-widest font-bold">{t('destinations.stats.safety_rec')}</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">7.4k</p>
                            <p className="text-on-surface-variant text-sm uppercase tracking-widest font-bold">{t('destinations.stats.meters_peaked')}</p>
                        </div>
                        <div>
                            <p className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">120+</p>
                            <p className="text-on-surface-variant text-sm uppercase tracking-widest font-bold">{t('destinations.stats.local_guides')}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Destinations;
