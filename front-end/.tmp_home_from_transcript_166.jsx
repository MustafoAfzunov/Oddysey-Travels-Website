import React, { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DEPARTURE_KEYS } from '../data/departureFilter';
import { WORLD_REGION_KEYS, buildPlannerQueryString } from '../data/travelPlanner';

function isoAddDays(fromDate, days) {
    const d = new Date(fromDate);
    d.setDate(d.getDate() + days);
    return d.toISOString().slice(0, 10);
}

const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hub, setHub] = useState('dushanbe');
    const [region, setRegion] = useState('western_europe');
    const [start, setStart] = useState(() => isoAddDays(new Date(), 60));
    const [end, setEnd] = useState(() => isoAddDays(new Date(), 75));
    const [adults, setAdults] = useState(2);
    const [children, setChildren] = useState(0);

    const hubOptions = useMemo(
        () =>
            DEPARTURE_KEYS.map((key) => ({
                value: key,
                label: t(`home.planner_city_${key}`),
            })),
        [t]
    );

    const regionOptions = useMemo(
        () =>
            WORLD_REGION_KEYS.map((key) => ({
                value: key,
                label: t(`home.planner_world_${key}`),
            })),
        [t]
    );

    const plannerSearch = useMemo(
        () =>
            buildPlannerQueryString({
                hub,
                region,
                start,
                end,
                adults,
                children,
            }),
        [hub, region, start, end, adults, children]
    );

    const onSubmitPlanner = (e) => {
        e.preventDefault();
        let s = start;
        let en = end;
        if (s && en && s > en) {
            const tmp = s;
            s = en;
            en = tmp;
        }
        navigate(`/packages?${buildPlannerQueryString({ hub, region, start: s, end: en, adults, children })}`);
    };

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

    const selectClass =
        'w-full appearance-none rounded-2xl border border-white/15 bg-forest-deep/70 py-3 pl-4 pr-11 text-sm font-semibold text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer';
    const labelClass = 'block text-[10px] font-bold uppercase tracking-widest text-white/45 mb-2';

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

                    <form
                        onSubmit={onSubmitPlanner}
                        className="w-full max-w-4xl mx-auto rounded-3xl border border-white/15 bg-white/[0.08] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] p-5 md:p-8 text-left space-y-5"
                    >
                        <div>
                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">{t('home.planner_kicker')}</p>
                            <h2 className="font-serif text-xl md:text-2xl font-bold text-white mb-1">{t('home.planner_title')}</h2>
                            <p className="text-sm text-white/55">{t('home.planner_subtitle')}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="planner-region" className={labelClass}>
                                    {t('home.planner_world_label')}
                                </label>
                                <div className="relative">
                                    <select id="planner-region" value={region} onChange={(e) => setRegion(e.target.value)} className={selectClass}>
                                        {regionOptions.map((opt) => (
                                            <option key={opt.value} value={opt.value} className="bg-forest-deep text-white">
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50 text-xl">
                                        expand_more
                                    </span>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="planner-hub" className={labelClass}>
                                    {t('home.planner_hub_label')}
                                </label>
                                <div className="relative">
                                    <select id="planner-hub" value={hub} onChange={(e) => setHub(e.target.value)} className={selectClass}>
                                        {hubOptions.map((opt) => (
                                            <option key={opt.value} value={opt.value} className="bg-forest-deep text-white">
                                                {opt.label}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="material-symbols-outlined pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/50 text-xl">
                                        expand_more
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="text-xs text-white/50 border-l-2 border-primary/50 pl-3">{t('home.planner_region_value')}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <label htmlFor="planner-start" className={labelClass}>
                                    {t('home.planner_date_start')}
                                </label>
                                <input
                                    id="planner-start"
                                    type="date"
                                    value={start}
                                    onChange={(e) => setStart(e.target.value)}
                                    className="w-full rounded-2xl border border-white/15 bg-forest-deep/70 py-3 px-4 text-sm font-semibold text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary [color-scheme:dark]"
                                />
                            </div>
                            <div>
                                <label htmlFor="planner-end" className={labelClass}>
                                    {t('home.planner_date_end')}
                                </label>
                                <input
                                    id="planner-end"
                                    type="date"
                                    value={end}
                                    onChange={(e) => setEnd(e.target.value)}
                                    className="w-full rounded-2xl border border-white/15 bg-forest-deep/70 py-3 px-4 text-sm font-semibold text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary [color-scheme:dark]"
                                />
                            </div>
                            <div>
                                <label htmlFor="planner-adults" className={labelClass}>
                                    {t('home.planner_adults')}
                                </label>
                                <input
                                    id="planner-adults"
                                    type="number"
                                    min={1}
                                    max={9}
                                    value={adults}
                                    onChange={(e) => setAdults(Math.min(9, Math.max(1, parseInt(e.target.value, 10) || 1)))}
                                    className="w-full rounded-2xl border border-white/15 bg-forest-deep/70 py-3 px-4 text-sm font-semibold text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                            <div>
                                <label htmlFor="planner-children" className={labelClass}>
                                    {t('home.planner_children')}
                                </label>
                                <input
                                    id="planner-children"
                                    type="number"
                                    min={0}
                                    max={6}
                                    value={children}
                                    onChange={(e) => setChildren(Math.min(6, Math.max(0, parseInt(e.target.value, 10) || 0)))}
                                    className="w-full rounded-2xl border border-white/15 bg-forest-deep/70 py-3 px-4 text-sm font-semibold text-white outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                            <p className="text-[11px] text-white/45 max-w-xl leading-relaxed">{t('home.planner_estimate_note')}</p>
                            <button
                                type="submit"
                                className="shrink-0 inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-primary text-forest-deep font-bold text-sm uppercase tracking-widest shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all active:scale-[0.98] whitespace-nowrap"
                            >
                                {t('home.planner_cta')}
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                        <Link to="/destinations" className="w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-2xl font-bold transition-transform hover:scale-105 shadow-xl shadow-primary/20">
                            {t('home.explore_map')}
                        </Link>
                        <Link to={`/packages?${plannerSearch}`} className="w-full sm:w-auto px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold transition-all hover:bg-white/20">
                            {t('home.view_packages')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
