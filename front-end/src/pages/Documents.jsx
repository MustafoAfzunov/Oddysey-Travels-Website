import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../components/Modal';

const Documents = () => {
    const { t } = useTranslation();
    const [viewDoc, setViewDoc] = useState(null);

    const docs = [
        { title: t('documents.license'), size: '2.4 MB', type: 'PDF', url: 'https://pdfobject.com/pdf/sample.pdf', icon: 'travel_explore' },
        { title: t('documents.agreement'), size: '1.1 MB', type: 'PDF', url: 'https://pdfobject.com/pdf/sample.pdf', icon: 'backpack' },
        { title: t('documents.privacy'), size: '0.8 MB', type: 'PDF', url: 'https://pdfobject.com/pdf/sample.pdf', icon: 'health_and_safety' },
        { title: t('documents.safety'), size: '3.5 MB', type: 'PDF', url: 'https://pdfobject.com/pdf/sample.pdf', icon: 'verified_user' },
    ];

    return (
        <div className="min-h-screen pt-24 bg-background text-on-background relative overflow-hidden">
            <div className="absolute inset-0 topo-bg pointer-events-none" />

            <main className="min-h-screen pt-8 pb-20 bg-fixed relative z-10">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
                    <header className="mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 bg-emerald-500/10 border border-emerald-500/20 px-4 py-1 rounded-full">
                            <span className="material-symbols-outlined text-[14px] text-primary">folder_managed</span>
                            <span className="font-jakarta text-label-caps text-primary uppercase">Mission Protocol Repository</span>
                        </div>
                        <h1 className="font-playfair text-4xl md:text-6xl text-on-background mb-6">
                            Essential Expedition <br />
                            <span className="text-primary italic">Documentation</span>
                        </h1>
                        <p className="text-body-lg text-on-surface-variant max-w-2xl">
                            Access all critical permits, safety manuals, and equipment manifests required for high-altitude Pamir mountaineering.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                        <div className="md:col-span-8 space-y-12">
                            <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {docs.map((doc, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => setViewDoc(doc)}
                                        className="group bg-surface-container border border-outline-variant p-8 rounded-2xl hover:border-primary/40 transition-all backdrop-blur-xl relative overflow-hidden cursor-pointer"
                                    >
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8" />
                                        <span className="material-symbols-outlined text-primary mb-6 block text-4xl">{doc.icon}</span>
                                        <h3 className="font-playfair text-card-title text-on-background mb-3">{doc.title}</h3>
                                        <p className="text-body-sm text-on-surface-variant mb-6">{doc.type} • {doc.size}</p>
                                        <button className="flex items-center gap-2 text-primary font-jakarta text-label-caps uppercase group-hover:gap-4 transition-all">
                                            <span>Download PDF</span>
                                            <span className="material-symbols-outlined">download</span>
                                        </button>
                                    </div>
                                ))}
                            </section>

                            <section className="bg-surface-container-high border-2 border-primary/20 rounded-3xl p-10 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                                <div className="flex flex-col lg:flex-row gap-12">
                                    <div className="lg:w-1/2">
                                        <h2 className="font-playfair text-headline-md text-on-background mb-4">Technical Grade Specifications</h2>
                                        <p className="text-body-sm text-on-surface-variant mb-8">
                                            All participants must submit verified medical clearance forms and evidence of technical mountaineering proficiency for Grade 5+ summits.
                                        </p>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-outline-variant">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-primary">clinical_notes</span>
                                                    <span className="text-body-sm">Medical Release Form V.2.4</span>
                                                </div>
                                                <span className="material-symbols-outlined cursor-pointer hover:text-primary">cloud_download</span>
                                            </div>
                                            <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-outline-variant">
                                                <div className="flex items-center gap-3">
                                                    <span className="material-symbols-outlined text-primary">altitude</span>
                                                    <span className="text-body-sm">Altitude Acclimatization History</span>
                                                </div>
                                                <span className="material-symbols-outlined cursor-pointer hover:text-primary">cloud_download</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lg:w-1/2 relative min-h-[300px] rounded-2xl overflow-hidden">
                                        <img
                                            alt="Expedition Planning"
                                            className="absolute inset-0 w-full h-full object-cover"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj_8uJkZIevW_86yz-u89TJBVYmtQ31N9UVhCNtW9YzIeN5Q90f1BYZLDP7dw7r_Q5xFRLg8h0Zne7gZ1DkAJSu_yTXJ8N8LACQmeGQ1Uu_4_Md-VCv6KiQDMM63ZhCx5pWSl4sCCn9YB18IHwBSqUydz2LY6Jz5H2QOpb04U-YnkzZdM4tMAC3NjdcJ6Yu6jBPWHEujc-4VmAQhjlzJ2JvOI-D1IQgSpsKpIzrfnBk5NMj5OZyughIfg-cfVYz4upjqbDkFKL5q0p"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/80 to-transparent" />
                                        <div className="absolute bottom-6 left-6">
                                            <div className="bg-primary px-3 py-1 rounded text-on-primary font-jakarta text-label-micro uppercase tracking-widest mb-2 inline-block">
                                                Security Level: Alpha
                                            </div>
                                            <p className="font-playfair text-white text-lg">Verified Mountaineering Portfolios</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <aside className="md:col-span-4 space-y-8">
                            <div className="bg-surface-container-highest rounded-2xl p-8 border border-outline-variant">
                                <h4 className="font-jakarta text-label-caps text-primary uppercase mb-6">Expedition Calendar</h4>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="bg-emerald-500/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 font-bold">15</div>
                                        <div>
                                            <p className="text-body-sm font-bold text-on-background">Permit Deadline</p>
                                            <p className="text-[12px] text-on-surface-variant italic">All visa documents due for October summit.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="bg-emerald-500/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 font-bold">22</div>
                                        <div>
                                            <p className="text-body-sm font-bold text-on-background">Medical Review</p>
                                            <p className="text-[12px] text-on-surface-variant italic">Final health clearance review with CMO.</p>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full mt-8 py-3 border border-emerald-500/30 rounded-xl text-label-caps font-jakarta text-primary uppercase text-[10px] hover:bg-primary hover:text-on-primary transition-all">
                                    Sync to Calendar
                                </button>
                            </div>

                            <div className="bg-emerald-900/20 rounded-2xl p-8 border border-emerald-500/10 relative overflow-hidden">
                                <div className="relative z-10">
                                    <h4 className="font-jakarta text-label-caps text-primary uppercase mb-4">Support Team</h4>
                                    <p className="text-body-sm text-on-surface-variant mb-6">Need assistance with documentation? Our logistics team is available 24/7 via satellite.</p>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary text-sm">call</span>
                                            <span className="text-[12px] font-mono">+992 00 123 4567</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary text-sm">satellite_alt</span>
                                            <span className="text-[12px] font-mono">CHANNEL 16 HF</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-emerald-500/5 text-9xl select-none">support_agent</span>
                            </div>

                            <div className="flex items-center gap-4 p-6 border border-outline-variant rounded-2xl bg-surface-container-low">
                                <span className="material-symbols-outlined text-primary text-4xl">shield_lock</span>
                                <div>
                                    <p className="font-jakarta text-on-background uppercase text-[10px] tracking-[0.2em]">End-to-End Encryption</p>
                                    <p className="text-[10px] text-on-surface-variant">Your documents are secured with AES-256 tactical grade protection.</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Modal isOpen={!!viewDoc} onClose={() => setViewDoc(null)} title={viewDoc?.title}>
                {viewDoc && (
                    <iframe
                        src={`${viewDoc.url}#toolbar=0`}
                        className="w-full h-full border-0"
                        title={viewDoc.title}
                    />
                )}
            </Modal>
        </div>
    );
};

export default Documents;
