import React from 'react';
import { useTranslation } from 'react-i18next';

const Safety = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-forest-deep dark:text-white pt-20">
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 hero-gradient z-10"></div>
                    <img
                        alt="Mountain Rescue Team"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLs3r4u7T0FYp_EBL-1UeXrL-jEq-ClIFFXkvetf8derqYMwo4a0ZGh6v9NwmroJ8BDF5UkEQMCBnJnxOXS2-udNfXHJfi6FK7-ByspuGh5Y62jG7zlAaLQaI90Xfdy-HlvDkeGCjengEKe720EILAhcfMPQxtXputc80dzIhK0GBnesEx7XV7TSAyaCvhQUXjeZQ1pFVCR2fYlRyAkrrlvDJ32TOXQ9pMF3kyd8q7XnHQg-LCHox-mbk9EoZNU6C7uGW1VOYcI-7F"
                    />
                </div>
                <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
                    <span className="inline-block py-1 px-4 rounded-full border border-primary/50 text-primary text-xs font-bold tracking-widest uppercase mb-6 bg-primary/10 backdrop-blur-sm">
                        {t('safety.tag')}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">{t('safety.title')}</h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-12">
                        {t('safety.desc')}
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
                        {t('safety.standards', { returnObjects: true }).map((standard, idx) => {
                            const icons = ['medical_services', 'satellite_alt', 'helicopter', 'verified'];
                            return (
                                <div key={idx} className="flex items-center gap-2 text-white">
                                    <span className="material-symbols-outlined text-3xl">{icons[idx]}</span>
                                    <span className="text-sm font-bold uppercase tracking-tighter">{standard}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            title: t('safety.sections.medical.title'),
                            icon: "emergency",
                            items: t('safety.sections.medical.items', { returnObjects: true })
                        },
                        {
                            title: t('safety.sections.comms.title'),
                            icon: "settings_input_antenna",
                            items: t('safety.sections.comms.items', { returnObjects: true })
                        },
                        {
                            title: t('safety.sections.evac.title'),
                            icon: "hail",
                            items: t('safety.sections.evac.items', { returnObjects: true })
                        }
                    ].map((sec, idx) => (
                        <div key={idx} className="space-y-6">
                            <h3 className="text-2xl font-serif font-bold flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">{sec.icon}</span>
                                {sec.title}
                            </h3>
                            <div className="space-y-4">
                                {sec.items.map((item, i) => (
                                    <div key={i} className="grid-check-item group hover:border-primary/30 transition-all">
                                        <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                                        <div>
                                            <p className="font-bold mb-1">{item.name}</p>
                                            <p className="text-sm text-forest-deep/60 dark:text-white/60">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-24 bg-forest-deep text-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-4xl font-serif font-bold mb-6 italic">{t('safety.premium_basecamp')}</h2>
                            <p className="text-white/60 mb-8 leading-relaxed">
                                {t('safety.basecamp_desc')}
                            </p>
                            <ul className="space-y-4">
                                {t('safety.features', { returnObjects: true }).map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 group">
                                        <span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform">done_all</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="w-full md:w-1/2 relative aspect-square bg-forest-deep rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
                            <img
                                alt="Luxury Yurt Interior"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-[2000ms]"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTCtNYfxf6G5ziZXVwT27GT04rlnyQkXZQXSAkAtUQxx2vmxgSawaYZud-aoqCHWP9K_TjuLfX-lTHWDZz9NWwNHg3sVNRfA-D3nb5pJDCDoK2S_OiTxcHscCRnpfauuneUiKFyYo_Ht3oTjfL9GmxG8hGYq2lL7kiHrWVDbps1_iucGkJAvsM36nMjy4nvNNXwBruQhn3GYj-VR7v00_G4GVo5ufXf65YkjdV0lYv__2dPtmzOAYImaMKHyjLP3wsu4kbRL4f0U2V"
                            />

                            <div className="absolute inset-0 group/hotspot">
                                <div className="yurt-hotspot top-1/4 left-1/3">
                                    <span className="material-symbols-outlined text-[10px] text-white font-bold">add</span>
                                    <div className="yurt-callout">
                                        <p className="font-bold text-primary mb-1 uppercase tracking-widest text-[10px]">{t('safety.hotspots.dining.title')}</p>
                                        <p className="text-white">{t('safety.hotspots.dining.desc')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-0 group/hotspot">
                                <div className="yurt-hotspot bottom-1/4 right-1/4">
                                    <span className="material-symbols-outlined text-[10px] text-white font-bold">add</span>
                                    <div className="yurt-callout">
                                        <p className="font-bold text-primary mb-1 uppercase tracking-widest text-[10px]">{t('safety.hotspots.heating.title')}</p>
                                        <p className="text-white">{t('safety.hotspots.heating.desc')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-0 group/hotspot">
                                <div className="yurt-hotspot top-1/2 right-1/3">
                                    <span className="material-symbols-outlined text-[10px] text-white font-bold">add</span>
                                    <div className="yurt-callout">
                                        <p className="font-bold text-primary mb-1 uppercase tracking-widest text-[10px]">{t('safety.hotspots.medical.title')}</p>
                                        <p className="text-white">{t('safety.hotspots.medical.desc')}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute inset-0 pointer-events-none border-[20px] border-forest-deep/20"></div>
                            <div className="absolute bottom-6 left-6 right-6 p-4 bg-forest-deep/60 backdrop-blur-md rounded-xl border border-white/10">
                                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary">{t('safety.interactive_preview')}</p>
                                <p className="text-xs text-white/70">{t('safety.hover_instruction')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Section - Moved from Home */}
            <section className="py-24 bg-forest-deep text-white border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">{t('safety.pamir_peaks_standard')}</h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12">
                        {t('safety.standards_list', { returnObjects: true }).map((feature, idx) => {
                            const icons = ['verified_user', 'local_mall', 'public'];
                            return (
                                <div key={idx} className="flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        <span className="material-symbols-outlined text-4xl">{icons[idx]}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                                    <p className="text-white/60 leading-relaxed">{feature.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Safety;
