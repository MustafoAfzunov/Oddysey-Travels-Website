import React from 'react';
import { useTranslation } from 'react-i18next';

const Inquiry = () => {
    const { t } = useTranslation();
    return (
        <div className="bg-surface text-on-background font-jakarta selection:bg-primary selection:text-on-primary">
            <main className="relative min-h-screen pt-nav-height topo-grid overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-emerald-400/5 blur-[100px]" />
                </div>

                <section className="relative z-10 pt-28 pb-16 px-6 md:px-10 lg:px-16 text-center max-w-4xl mx-auto">
                    <span className="font-jakarta text-label-caps text-primary tracking-[0.3em] mb-4 block">{t('inquiry.concierge')}</span>
                    <h1 className="font-playfair text-display-xl text-on-surface mb-6">{t('inquiry.title')}</h1>
                    <p className="text-body-lg text-on-surface-variant leading-relaxed">
                        {t('inquiry.desc')}
                    </p>
                </section>

                <section className="relative z-10 px-6 md:px-10 lg:px-16 pb-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="glass-panel p-10 rounded-2xl shadow-2xl shadow-black/40">
                        <div className="flex items-center space-x-3 mb-8">
                            <span className="material-symbols-outlined text-primary">description</span>
                            <h2 className="font-playfair text-headline-md text-on-surface">{t('inquiry.title')}</h2>
                        </div>

                        <form action="https://formspree.io/f/mvgzpope" method="POST" className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="font-jakarta text-label-caps text-on-surface-variant block">{t('inquiry.form.full_name')}</label>
                                    <input
                                        name="full_name"
                                        className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder={t('inquiry.form.full_name')}
                                        type="text"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-jakarta text-label-caps text-on-surface-variant block">{t('inquiry.form.email')}</label>
                                    <input
                                        name="email"
                                        className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                        placeholder="email@address.com"
                                        type="email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="font-jakarta text-label-caps text-on-surface-variant block">{t('inquiry.form.style')}</label>
                                <select
                                    name="interest"
                                    className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none"
                                >
                                    <option className="bg-surface">Peak Somoni (7,495m)</option>
                                    <option className="bg-surface">Istiqlol Peak (6,940m)</option>
                                    <option className="bg-surface">Fann Mountains Trek</option>
                                    <option className="bg-surface">Gorno-Badakhshan Logistics</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="font-jakarta text-label-caps text-on-surface-variant block">{t('inquiry.form.message')}</label>
                                <textarea
                                    name="message"
                                    className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-on-surface focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                                    placeholder={t('inquiry.form.message_placeholder')}
                                    rows="5"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-emerald-950 font-bold py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all transform active:scale-[0.98] flex items-center justify-center space-x-2"
                            >
                                <span>{t('inquiry.form.submit')}</span>
                                <span className="material-symbols-outlined text-[18px]">send</span>
                            </button>
                        </form>
                    </div>

                    <div className="space-y-12 py-6">
                        <div>
                            <h2 className="font-playfair text-headline-md text-on-surface mb-8 border-l-4 border-primary pl-6">Direct Communications</h2>
                            <div className="space-y-8">
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <span className="material-symbols-outlined">satellite_alt</span>
                                    </div>
                                    <div>
                                        <h3 className="font-jakarta text-label-caps text-on-surface-variant mb-1">SATELLITE PHONE</h3>
                                        <p className="font-playfair text-[1.25rem] text-on-surface tracking-tight">+992 93 123 4567</p>
                                        <p className="text-body-sm text-on-surface-variant opacity-60">Priority Basecamp Uplink</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <span className="material-symbols-outlined">settings_input_antenna</span>
                                    </div>
                                    <div>
                                        <h3 className="font-jakarta text-label-caps text-on-surface-variant mb-1">HF RADIO CHANNEL</h3>
                                        <p className="font-playfair text-[1.25rem] text-on-surface tracking-tight">VHF 144.500 MHz</p>
                                        <p className="text-body-sm text-on-surface-variant opacity-60">Monitored 0400 - 2000 GMT</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-6">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <h3 className="font-jakarta text-label-caps text-on-surface-variant mb-1">GLOBAL HEADQUARTERS</h3>
                                        <p className="font-playfair text-[1.25rem] text-on-surface tracking-tight leading-snug">
                                            45 Somoni Avenue
                                            <br />
                                            Dushanbe, Tajikistan 734000
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-playfair text-headline-md text-on-surface mb-8 border-l-4 border-primary pl-6">Expedition Concierges</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="glass-panel p-6 rounded-2xl flex items-center space-x-4 border border-white/5">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
                                        <img
                                            className="w-full h-full object-cover"
                                            alt="Anton Sokolov"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7OIRl3fmEkg4AbslagMBX36Wvn2hM8KfIKcBxxJzIxXX-dZMID6_aWMJw4LZxEstcBwCCyunFg9SCWK30X0NAdHtUQ1XgdKfMPlnTjCTu1pbxSMfLXOjGTECIrT3e116RLwE9kZF5zFtSkRm0z-iuOKhKjzvK5vUGHz8thV4-vpfIlzQ2xWmgeOKZrDBnrV9HNFPUfL4kAKZx3CjAcYCyfK0_CEtJAcMgRvIj9Vc9BHKHaxBXnt75pkFKFw0j-CHCAsXX27U2Z48P"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-playfair text-[1.1rem] text-on-surface">Anton Sokolov</h4>
                                        <p className="font-jakarta text-label-caps text-primary text-[9px]">LEAD LOGISTICS</p>
                                    </div>
                                </div>
                                <div className="glass-panel p-6 rounded-2xl flex items-center space-x-4 border border-white/5">
                                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
                                        <img
                                            className="w-full h-full object-cover"
                                            alt="Zarina Madonova"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ9uw7bbwI3XETwl7HYzZct0ghO3BFuk-TVD1gcoduSIlErW2sg-L-v29z013NxoeS5eYHBaVjzs5nD4wsVy-oZbmtqgC7TCgprh-CE4gXgWb8JuFOaLBz6TmiUb0DklIuYSMKgwekp79-P8PUwzlTUiwoAyKwSs7jLQOgF6OqlLSlw5_mAGKYfgMrq2T2A_SRUC-Ek0ZXLw95zYWJNxyYHhmXc7jrilGHhoXUCiJ7vqArfUe2AdEdIN2UKbpXcrwKq6siPhTJbLkk"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-playfair text-[1.1rem] text-on-surface">Zarina Madonova</h4>
                                        <p className="font-jakarta text-label-caps text-primary text-[9px]">CULTURAL LIAISON</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
};

export default Inquiry;
