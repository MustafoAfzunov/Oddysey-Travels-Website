import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const blockedDates = ['2026-07-12', '2026-07-18', '2026-08-02', '2026-08-19'];

const Booking = () => {
    const [searchParams] = useSearchParams();
    const preselectedPackage = searchParams.get('package') || '';
    const [step, setStep] = useState(1);
    const [paid, setPaid] = useState(false);
    const [bookingId, setBookingId] = useState('');

    const [formData, setFormData] = useState({
        packageName: preselectedPackage,
        fullName: '',
        phone: '',
        email: '',
        people: 1,
        date: '',
        comment: '',
        agree: false,
    });

    const isDateBlocked = useMemo(() => blockedDates.includes(formData.date), [formData.date]);
    const total = useMemo(() => Number(formData.people || 1) * 900, [formData.people]);

    const handleChange = (field, value) => setFormData((prev) => ({ ...prev, [field]: value }));

    const goToConfirm = (e) => {
        e.preventDefault();
        if (!formData.agree || isDateBlocked) return;
        setBookingId(`BK-${Date.now().toString().slice(-6)}`);
        setStep(2);
    };

    const payNow = () => {
        setPaid(true);
        setStep(3);
    };

    return (
        <div className="min-h-screen pt-24 pb-20 bg-background text-on-background px-6">
            <div className="max-w-5xl mx-auto">
                <h1 className="font-playfair text-4xl md:text-5xl mb-4">Booking Module</h1>
                <p className="text-on-surface-variant mb-10">
                    Complete your booking details, review the summary, and confirm payment.
                </p>

                <div className="flex items-center gap-3 mb-8">
                    {[1, 2, 3].map((s) => (
                        <div key={s} className={`h-2 flex-1 rounded-full ${step >= s ? 'bg-primary' : 'bg-white/10'}`} />
                    ))}
                </div>

                {step === 1 && (
                    <form onSubmit={goToConfirm} className="glass-panel rounded-2xl p-8 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="text-xs uppercase tracking-wider text-on-surface-variant block mb-2">Selected Package</label>
                                <input
                                    required
                                    value={formData.packageName}
                                    onChange={(e) => handleChange('packageName', e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                                    placeholder="Package name"
                                />
                            </div>
                            <div>
                                <label className="text-xs uppercase tracking-wider text-on-surface-variant block mb-2">Date</label>
                                <input
                                    required
                                    type="date"
                                    value={formData.date}
                                    onChange={(e) => handleChange('date', e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                                />
                                {formData.date ? (
                                    <p className={`text-xs mt-2 ${isDateBlocked ? 'text-red-400' : 'text-green-400'}`}>
                                        {isDateBlocked ? 'Selected date is occupied.' : 'Selected date is available.'}
                                    </p>
                                ) : null}
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                required
                                value={formData.fullName}
                                onChange={(e) => handleChange('fullName', e.target.value)}
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                                placeholder="Name / Surname"
                            />
                            <input
                                required
                                value={formData.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                                placeholder="Phone"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <input
                                required
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                                placeholder="Email"
                            />
                            <input
                                required
                                type="number"
                                min="1"
                                value={formData.people}
                                onChange={(e) => handleChange('people', e.target.value)}
                                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                                placeholder="Number of people"
                            />
                        </div>

                        <textarea
                            value={formData.comment}
                            onChange={(e) => handleChange('comment', e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3"
                            rows="4"
                            placeholder="Comment"
                        />

                        <label className="flex items-start gap-3 text-sm text-on-surface-variant">
                            <input
                                type="checkbox"
                                checked={formData.agree}
                                onChange={(e) => handleChange('agree', e.target.checked)}
                                className="mt-1 rounded border-white/20 bg-white/5"
                            />
                            I agree with privacy policy and booking/refund terms.
                        </label>

                        <button
                            disabled={!formData.agree || isDateBlocked}
                            className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold disabled:opacity-50"
                            type="submit"
                        >
                            Review before payment
                        </button>
                    </form>
                )}

                {step === 2 && (
                    <div className="glass-panel rounded-2xl p-8 space-y-6">
                        <h2 className="font-playfair text-2xl">Booking Summary</h2>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                            <p><span className="text-on-surface-variant">Booking ID:</span> {bookingId}</p>
                            <p><span className="text-on-surface-variant">Package:</span> {formData.packageName}</p>
                            <p><span className="text-on-surface-variant">Date:</span> {formData.date}</p>
                            <p><span className="text-on-surface-variant">People:</span> {formData.people}</p>
                            <p><span className="text-on-surface-variant">Email:</span> {formData.email}</p>
                            <p><span className="text-on-surface-variant">Total:</span> ${total}</p>
                        </div>
                        <div className="flex gap-3">
                            <button type="button" onClick={() => setStep(1)} className="px-5 py-3 rounded-xl border border-white/20">
                                Back
                            </button>
                            <button type="button" onClick={payNow} className="px-5 py-3 rounded-xl bg-primary text-on-primary font-bold">
                                Pay
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="glass-panel rounded-2xl p-8 text-center">
                        <h2 className="font-playfair text-3xl mb-4">Payment Successful</h2>
                        <p className="text-on-surface-variant mb-2">Booking ID: {bookingId}</p>
                        <p className="text-on-surface-variant">Status: {paid ? 'Paid' : 'Pending'}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Booking;
