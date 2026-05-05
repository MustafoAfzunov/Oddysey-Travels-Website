import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-forest-deep text-white pt-24 pb-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-2">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="relative w-16 h-16 flex items-center justify-center">
                                <img src="/logo-nav.png" alt="Pamir Peaks Logo" className="w-full h-full object-contain" />
                            </div>
                            <h2 className="text-xl font-serif font-bold tracking-tight">Pamir Peaks</h2>
                        </div>
                        <p className="text-white/50 max-w-sm mb-8 leading-relaxed">{t('footer.desc')}</p>
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
                            >
                                <span className="material-symbols-outlined text-sm">public</span>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
                            >
                                <span className="material-symbols-outlined text-sm">alternate_email</span>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
                            >
                                <span className="material-symbols-outlined text-sm">share</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">{t('footer.quick_links')}</h4>
                        <ul className="space-y-4 text-white/60">
                            <li>
                                <Link to="/" className="hover:text-white transition-colors text-sm">
                                    {t('navbar.home')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/packages" className="hover:text-white transition-colors text-sm">
                                    {t('footer.expeditions')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-white transition-colors text-sm">
                                    {t('navbar.about')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/documents" className="hover:text-white transition-colors text-sm">
                                    {t('navbar.documents')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/safety" className="hover:text-white transition-colors text-sm">
                                    {t('footer.safety')}
                                </Link>
                            </li>
                            <li>
                                <Link to="/inquiry" className="hover:text-white transition-colors text-sm">
                                    {t('navbar.contacts')}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Contacts</h4>
                        <ul className="space-y-3 text-white/60 text-sm">
                            <li>+992 93 123 45 67</li>
                            <li>info@pamirpeaks.tj</li>
                            <li>Dushanbe, Tajikistan</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">{t('footer.newsletter')}</h4>
                        <p className="text-white/60 text-sm mb-4">{t('footer.newsletter_desc')}</p>
                        <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                className="bg-white/5 border-white/10 rounded-lg py-3 px-4 text-sm focus:border-primary focus:ring-0 text-white"
                                placeholder={t('footer.email_placeholder')}
                                type="email"
                            />
                            <button
                                type="submit"
                                className="bg-primary text-white py-3 px-4 rounded-lg font-bold text-sm hover:opacity-90 transition-opacity"
                            >
                                {t('footer.subscribe')}
                            </button>
                        </form>
                    </div>
                </div>
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs font-bold uppercase tracking-widest">
                    <p>{t('footer.rights_reserved')}</p>
                    <div className="flex gap-8">
                        <a href="/documents" className="hover:text-white transition-colors">
                            {t('footer.privacy')}
                        </a>
                        <a href="/documents" className="hover:text-white transition-colors">
                            {t('footer.terms')}
                        </a>
                        <a href="/documents" className="hover:text-white transition-colors">
                            Public offer
                        </a>
                        <a href="#" className="hover:text-white transition-colors">
                            {t('footer.cookies')}
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
