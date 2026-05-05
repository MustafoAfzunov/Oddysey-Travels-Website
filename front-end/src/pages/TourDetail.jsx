import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getTourBySlug } from '../data/tours';

export default function TourDetail() {
    const { i18n } = useTranslation();
    const { slug } = useParams();
    const tour = getTourBySlug(slug, i18n.resolvedLanguage);

    if (!tour) {
        return <Navigate to="/packages" replace />;
    }

    const dayCount = tour.itinerary.length;
    const firstMilestone = tour.itinerary[0] || '';
    const midMilestone = tour.itinerary[Math.floor(dayCount / 2)] || '';
    const lastMilestone = tour.itinerary[dayCount - 1] || '';

    return (
        <div className="min-h-screen bg-background text-on-background relative overflow-hidden">
            <div className="absolute inset-0 topo-bg" />
            <main className="pt-20">
                <section className="relative h-[72vh] min-h-[560px] w-full overflow-hidden">
                    <img src={tour.img} alt={tour.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 lg:px-16 pb-14 flex flex-col xl:flex-row justify-between items-end gap-8">
                        <div className="max-w-3xl">
                            <span className="bg-primary text-on-primary px-3 py-1 rounded-lg text-label-caps font-jakarta uppercase tracking-[0.2em] mb-4 inline-block">
                                {tour.route}
                            </span>
                            <h1 className="text-4xl md:text-6xl font-playfair text-white mb-4 leading-tight">{tour.title}</h1>
                            <p className="text-body-lg text-white/90 max-w-2xl">{tour.overview}</p>
                        </div>
                        <div className="flex gap-8 glass-panel p-6 rounded-2xl border-primary/20 shadow-2xl">
                            <div className="text-center">
                                <div className="text-label-caps font-jakarta text-primary mb-1">DURATION</div>
                                <div className="text-headline-md font-playfair text-on-surface">{tour.duration}</div>
                            </div>
                            <div className="text-center border-x border-outline-variant/50 px-8">
                                <div className="text-label-caps font-jakarta text-primary mb-1">DIFFICULTY</div>
                                <div className="text-headline-md font-playfair text-on-surface">{tour.level}</div>
                            </div>
                            <div className="text-center">
                                <div className="text-label-caps font-jakarta text-primary mb-1">PRICE</div>
                                <div className="text-headline-md font-playfair text-on-surface">{tour.price}</div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 py-16 flex flex-col xl:flex-row gap-12">
                    <div className="flex-1 space-y-20">
                        <section>
                            <div className="flex items-center gap-4 mb-8">
                                <span className="w-12 h-[1px] bg-primary" />
                                <h2 className="text-label-caps font-jakarta text-primary uppercase tracking-[0.2em]">EXPEDITION OVERVIEW</h2>
                            </div>
                            <p className="text-card-title font-playfair text-on-surface leading-relaxed mb-6">{tour.highlights}</p>
                            <p className="text-body-lg text-on-surface-variant leading-relaxed">{tour.overview}</p>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-10">
                                <span className="w-12 h-[1px] bg-primary" />
                                <h2 className="text-label-caps font-jakarta text-primary uppercase tracking-[0.2em]">THE ITINERARY</h2>
                            </div>
                            <div className="space-y-10">
                                {tour.itinerary.map((dayText, idx) => {
                                    const dayNumber = String(idx + 1).padStart(2, '0');
                                    return (
                                        <div key={`${tour.slug}-${idx}`} className="flex gap-6 group">
                                            <div className="flex flex-col items-center">
                                                <div className="w-11 h-11 rounded-full border border-primary flex items-center justify-center text-primary font-bold group-hover:bg-primary group-hover:text-on-primary transition-colors">
                                                    {dayNumber}
                                                </div>
                                                {idx !== dayCount - 1 && <div className="w-[1px] flex-1 bg-outline-variant/50 my-3" />}
                                            </div>
                                            <div className={`flex-1 ${idx !== dayCount - 1 ? 'pb-7 border-b border-outline-variant/40' : ''}`}>
                                                <p className="text-body-sm text-on-surface leading-relaxed whitespace-pre-line">{dayText}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>

                        {tour.map?.embedUrl && (
                            <section>
                                <div className="flex items-center gap-4 mb-8">
                                    <span className="w-12 h-[1px] bg-primary" />
                                    <h2 className="text-label-caps font-jakarta text-primary uppercase tracking-[0.2em]">ROUTE MAP</h2>
                                </div>
                                <div className="rounded-3xl overflow-hidden border border-outline-variant/50 bg-surface-container-low shadow-xl">
                                    <iframe
                                        title={`${tour.title} route map`}
                                        src={tour.map.embedUrl}
                                        className="w-full h-[420px] border-0"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>
                                <p className="mt-3 text-xs text-on-surface-variant">{tour.map.label}</p>
                            </section>
                        )}

                        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="glass-panel p-8 rounded-3xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="material-symbols-outlined text-primary">check_circle</span>
                                    <h3 className="text-label-caps font-jakarta text-primary uppercase tracking-[0.2em]">WHAT&apos;S INCLUDED</h3>
                                </div>
                                <ul className="space-y-3 text-on-surface">
                                    {(tour.includes || []).map((item, idx) => (
                                        <li key={`inc-${idx}`} className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-primary text-sm">verified</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="glass-panel p-8 rounded-3xl opacity-80">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="material-symbols-outlined text-tertiary">cancel</span>
                                    <h3 className="text-label-caps font-jakarta text-tertiary uppercase tracking-[0.2em]">NOT INCLUDED</h3>
                                </div>
                                <ul className="space-y-3 text-on-surface">
                                    {(tour.excludes || []).map((item, idx) => (
                                        <li key={`exc-${idx}`} className="flex items-start gap-2">
                                            <span className="material-symbols-outlined text-tertiary text-sm">close</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </section>
                    </div>

                    <aside className="w-full xl:w-[380px]">
                        <div className="sticky top-28 glass-panel p-7 rounded-3xl border-primary/20 shadow-2xl">
                            <div className="flex justify-between items-center mb-7">
                                <div>
                                    <p className="text-label-caps font-jakarta text-primary uppercase tracking-[0.2em]">STARTING FROM</p>
                                    <p className="text-4xl font-playfair text-on-surface">{tour.price}</p>
                                </div>
                                <span className="bg-surface-container-high px-3 py-1 rounded-full text-label-micro font-jakarta text-primary">PER PERSON</span>
                            </div>

                            <div className="space-y-5 mb-8">
                                <div>
                                    <label className="text-label-caps font-jakarta text-on-surface-variant mb-2 block uppercase tracking-[0.2em]">SELECT DEPARTURE</label>
                                    <div className="bg-surface-container p-4 rounded-xl flex items-center justify-between border border-outline-variant/40">
                                        <span className="text-body-sm text-on-surface">{firstMilestone || 'Departure date on request'}</span>
                                        <span className="material-symbols-outlined text-primary">calendar_month</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="text-label-caps font-jakarta text-on-surface-variant mb-2 block uppercase tracking-[0.2em]">ITINERARY STAGE</label>
                                    <div className="bg-surface-container p-4 rounded-xl border border-outline-variant/40 space-y-2 text-sm text-on-surface">
                                        <p>{midMilestone}</p>
                                        <p className="text-on-surface-variant">{lastMilestone}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 mb-8 text-sm">
                                <div className="flex justify-between"><span className="text-on-surface-variant">Base Expedition Cost</span><span>{tour.price}</span></div>
                                <div className="flex justify-between"><span className="text-on-surface-variant">Logistics Package</span><span>Included</span></div>
                                <div className="pt-3 border-t border-outline-variant/50 flex justify-between font-bold">
                                    <span className="text-on-surface">Total</span>
                                    <span className="text-primary">{tour.price}</span>
                                </div>
                            </div>

                            <Link
                                to={`/booking?package=${encodeURIComponent(tour.title)}`}
                                className="w-full block text-center bg-primary text-on-primary py-4 rounded-2xl font-bold text-body-lg shadow-lg shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all mb-3"
                            >
                                Secure Your Spot
                            </Link>
                            <Link to="/packages" className="w-full block text-center py-3 rounded-xl border border-outline-variant/50 text-on-surface hover:bg-surface-container-high transition-colors">
                                Back to all expeditions
                            </Link>

                            <div className="mt-6 flex gap-3 p-4 rounded-2xl bg-primary-container/10 border border-primary/20">
                                <span className="material-symbols-outlined text-primary">security</span>
                                <div>
                                    <p className="text-label-caps font-jakarta text-primary uppercase tracking-[0.2em]">FLEXIBLE BOOKING</p>
                                    <p className="text-label-micro text-on-surface-variant">Final terms are confirmed with your expedition manager.</p>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}
