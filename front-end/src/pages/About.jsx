import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-background text-on-background topographic-bg pt-20">
            <main>
                <section className="relative h-[819px] w-full flex items-center px-6 md:px-10 lg:px-16 overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img
                            className="w-full h-full object-cover opacity-60"
                            alt="Pamir mountains panorama"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoGsww_tj7FMTt1oseeqMpEv4eNDgqpXJ7L8h_Pw4T7oAwx8masT9i8ZGvIhbaoeiYJ0wR_rjUD5UrH53cDBcses-o6iBr3_UnrKQ4wI64S6SX8ldUldDjAuwumQP9HqdSWN9VbrhLZHDpqdp8NAomlm4FF843FBX6Vam8U8JuY8DDs3rJxqSRsCFudBd0YPs7ewKEyy76bOMBGBSR40V97udgLi2Jyqe51q00pSPsl0pTOFwaEQZ5-DKY-yEMg_XMFcXKqXtKedxY"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
                    </div>
                    <div className="relative z-10 max-w-3xl">
                        <span className="font-jakarta text-label-caps text-primary mb-4 block">{t('about.title')}</span>
                        <h1 className="font-playfair text-display-xl text-on-background mb-6">
                            {t('about.heading')}<span className="italic text-primary">{t('about.heading_highlight')}</span>
                        </h1>
                        <p className="text-body-lg text-on-surface-variant max-w-xl mb-8">
                            {t('about.p1')}
                        </p>
                        <div className="flex gap-4">
                            <Link
                                to="/packages"
                                className="bg-primary-container text-on-primary-container px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:shadow-lg hover:shadow-emerald-500/20 transition-all"
                            >
                                {t('packages.view_details')}
                                <span className="material-symbols-outlined">north_east</span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="py-32 px-6 md:px-10 lg:px-16 bg-surface-container-lowest">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <div className="relative">
                            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-outline-variant/30 glass-panel">
                                <img
                                    className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                                    alt="Mountaineer with tactical gear"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfgO4WzZao-a0SzMEchHeYFgwwFFDVyStCjvgYobrremobrsC48TSBS6UYi-xVXil0eNHnvknT_i6dh2oKGqbk8b9MFxB9oXXoTd8Ptuevdmtaw4bosjzupts3s85yzG3eNy4xcGOHUyjSx3-0iylH1jaFl_EeyxlgXzlW2oDGp5VLWo3CjwNoLAvsBgSQbHGNOmADhIAZ77aoP9rVMjDjS3prOgK5AGovvY4OWcVdX-TZaNGb_wVGQr_ltqaRJM46pKqZN_KA_lv5"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-primary-container p-8 rounded-2xl shadow-2xl max-w-xs">
                                <p className="font-playfair text-headline-md text-on-primary-container mb-2">7,495m</p>
                                <p className="text-body-sm text-on-primary-container/80">Average Peak Accessibility via our Specialized Routes.</p>
                            </div>
                        </div>
                        <div>
                            <span className="font-jakarta text-label-caps text-primary mb-4 block">{t('about.why_choose_us')}</span>
                            <h2 className="font-playfair text-headline-md mb-8">{t('about.team_title')}</h2>
                            <div className="space-y-6 text-on-surface-variant">
                                <p>{t('about.p2')}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-outline-variant">
                                    <div>
                                        <p className="font-bold text-on-background mb-2">Tactical Strategy</p>
                                        <p className="text-body-sm">
                                            Every expedition is planned with military-grade precision, utilizing advanced satellite topography and real-time weather logistics.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-on-background mb-2">Luxury Logistics</p>
                                        <p className="text-body-sm">
                                            Experience the wild without sacrificing comfort. Our base camps feature gourmet provisions and high-spec habitat modules.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 px-6 md:px-10 lg:px-16">
                    <div className="text-center mb-20">
                        <span className="font-jakarta text-label-caps text-primary mb-4 block">{t('about.title')}</span>
                        <h2 className="font-playfair text-display-xl">{t('about.team_title')}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:h-[800px]">
                        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl border border-outline-variant/20 min-h-[360px]">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Chief operator portrait"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyUgptAhcUPOxvFI8kUON-0DaxDrq0IakGMQjgRzgqdwdH4ah1FK_Z9tm2gFadJXKoRRHDHJFEURUGn6IH3ngFgAXqbEaCJBYWyE19GwPdP6UmtLycmF2Ydfeweepu1QaVhV26NtHD9YkQIv4jNlJvNRmuFxX8lyqEBtDlyAiGRwdSB9Dzbf61nNBB7TwpgXUf8ydgq-d4JcFK4ALDd0Mr8GhKrc2x9C1rWkxo8xHjYCDu6spigyESW5jurD2eGrpPkfsRftTK7QFE"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                            <div className="absolute bottom-0 p-8">
                                <span className="font-jakarta text-label-caps text-primary mb-2 block">CHIEF OPERATOR</span>
                                <h3 className="font-playfair text-card-title text-on-background">Erik Valerius</h3>
                                <p className="text-body-sm text-on-surface-variant">Former Special Forces Alpine Division, 20+ years Pamir experience.</p>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-2xl border border-outline-variant/20 min-h-[260px]">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Cultural liaison portrait"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCptUvnduuUQGf7mx_AZW0dcCRPMEkhB-s_LdfVchONEEEf_zpoQU4ds7gqaDIWqPN8vNDDtN44dv7VYqesD_IXERMHswIbeAGHfo2e7YRklTGcvA5WHQ6W9LFIV37zsy0TJaaQjEFI75p1hR5E5W3-0xLWv4K3tfEAOgfuKGOiRL3hPVkNdqItznOb-oTQzKjj3JlfvpOiYevculhUEdKwciZIgqQF8dfJ_8NCWILzHghrGb_X8-xizYO9_cj_8mvvLvnsceSsYdZL"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                            <div className="absolute bottom-0 p-6">
                                <span className="font-jakarta text-label-caps text-primary mb-1 block">CULTURAL LIAISON</span>
                                <h3 className="font-playfair text-on-background text-lg">Zara Amira</h3>
                            </div>
                        </div>

                        <div className="relative group overflow-hidden rounded-2xl border border-outline-variant/20 min-h-[260px]">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Tech logistics portrait"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn6fmDOqS1YdJZioZ3YV59FvrZjAu3_FodaCKIftZD4eUrhce0kqyPd-wCBB3e11ezxJ1gRtsb4WQTX7UNO8zuexO0t6sW7nfYGlyCNbj3niwOT66-lbQwstmAPTo8YTA1il4UUt5yEy6QVjECTonGQ5UfVFvCT3wTfjPfZAWboQWH5wxt5sWU30lxTnmdJAld9OyIGILx5zByh7bTCLP9V-USFOi0nJEUR-V9dV3PMNjyUPa7iydZeZXvnHZ_pIwhCpYJ_oCzozE-"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                            <div className="absolute bottom-0 p-6">
                                <span className="font-jakarta text-label-caps text-primary mb-1 block">TECH LOGISTICS</span>
                                <h3 className="font-playfair text-on-background text-lg">Markus Thorne</h3>
                            </div>
                        </div>

                        <div className="md:col-span-2 relative group overflow-hidden rounded-2xl border border-outline-variant/20 min-h-[260px]">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                alt="Local network team"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_u7cOL9cOqURa9v5j0M-Plas-fRsvLKEBemlR8ppCGjTJxXlFcGUjBUgBZAOq0BCg0oDG3SfluA7KHSopVMb8hqgV1V2rzkPp4khPdV4fbF7nNzwti7PakenDg9MzcZlgKyfnY6MJRZNjP2kPlrq5UxhJEWlMoLBucIGrC2uXNMogpc1KrpBH4TUJv17JbWh0j_rUBAj9onwyS5PvAxjZCAAvhycsXz6picc8Sj21lGoyvsYkCdn2KuXTtB1846XvSlpzfqaE7Qmk"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                            <div className="absolute bottom-0 p-8">
                                <h3 className="font-playfair text-card-title text-on-background">Our Local Network</h3>
                                <p className="text-body-sm text-on-surface-variant max-w-md">
                                    Supported by a network of 50+ local Tajik and Kyrgyz guides with ancestral knowledge of the terrain.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 px-6 md:px-10 lg:px-16 bg-surface-container relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                        <svg className="w-full h-full text-primary fill-current" viewBox="0 0 500 500">
                            <path d="M50 450 Q 150 50 250 450 T 450 450" fill="none" stroke="currentColor" strokeWidth="2" />
                            <path d="M0 400 Q 100 100 200 400 T 400 400" fill="none" opacity="0.5" stroke="currentColor" strokeWidth="1" />
                        </svg>
                    </div>
                    <div className="max-w-4xl relative z-10">
                        <span className="font-jakarta text-label-caps text-primary mb-4 block">CENTURIES OF HERITAGE</span>
                        <h2 className="font-playfair text-display-xl mb-12">The Silk Road Legacy</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                            <div className="space-y-6">
                                <p className="text-body-lg italic border-l-4 border-primary pl-8 py-2">
                                    &quot;The Pamir is not just a destination; it is a historical artery that has connected civilizations for millennia.&quot;
                                </p>
                                <p className="text-on-surface-variant">
                                    Our lineage trace back to the early caravanserais. We honor this heritage by maintaining traditional hospitality standards while employing
                                    21st-century safety protocols.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-background/40 border border-outline-variant/10">
                                    <span className="material-symbols-outlined text-primary text-3xl">history_edu</span>
                                    <div>
                                        <p className="font-bold text-on-background">Ancient Maps</p>
                                        <p className="text-body-sm">Access to exclusive historical cartography archives.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 rounded-xl bg-background/40 border border-outline-variant/10">
                                    <span className="material-symbols-outlined text-primary text-3xl">castle</span>
                                    <div>
                                        <p className="font-bold text-on-background">Protected Sites</p>
                                        <p className="text-body-sm">Responsible exploration of Silk Road fortresses.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-32 px-6 md:px-10 lg:px-16 text-center">
                    <div className="glass-panel border border-primary/20 p-12 md:p-24 rounded-3xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-emerald-900/5 -z-10" />
                        <h2 className="font-playfair text-display-xl mb-8">Ready for the Ascent?</h2>
                        <p className="text-body-lg text-on-surface-variant mb-12 max-w-2xl mx-auto">
                            Applications for the Summer 2024 season are now open. Exclusive spots for the High Pamir Traverse are limited to 12 participants.
                        </p>
                        <Link
                            to="/booking"
                            className="inline-block bg-primary-container text-on-primary-container px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-emerald-500/10"
                        >
                            Begin Your Application
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default About;
