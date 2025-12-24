
import React, { useState, useCallback } from 'react';
import { InlineWidget } from 'react-calendly';
import { ParentInfo, BookingStep } from '../types';
import { CALENDLY_LINKS } from '../constants';
import { User, Mail, Baby, CalendarDays, ArrowLeft, Phone, AlertTriangle } from 'lucide-react';

const BookingWizard: React.FC = () => {
  const [step, setStep] = useState<BookingStep>(BookingStep.FORM);
  const [formData, setFormData] = useState<ParentInfo>({
    parentName: '',
    parentEmail: '',
    childName: '',
    childAge: 0
  });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'childAge' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Simple validation
    if (!formData.parentName || !formData.parentEmail || !formData.childName || !formData.childAge) {
      setError("Please fill in all fields correctly.");
      return;
    }

    if (formData.childAge >= 4 && formData.childAge <= 15) {
      setStep(BookingStep.CALENDAR);
    } else {
      setStep(BookingStep.OUT_OF_RANGE);
    }
  };

  const getTargetUrl = () => {
    if (formData.childAge >= 4 && formData.childAge <= 8) return CALENDLY_LINKS.GROUP_A;
    if (formData.childAge >= 9 && formData.childAge <= 15) return CALENDLY_LINKS.GROUP_B;
    return '';
  };

  const reset = () => {
    setStep(BookingStep.FORM);
    setError(null);
  };

  return (
    <section id="booking" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100">
          
          {/* Progress Header */}
          <div className="bg-slate-900 px-8 py-6 flex justify-between items-center">
            <div>
              <h2 className="text-white text-xl md:text-2xl font-display font-bold">Free Evaluation</h2>
              <p className="text-slate-400 text-sm">Secure your child's spot in 60 seconds</p>
            </div>
            {step !== BookingStep.FORM && (
              <button 
                onClick={reset}
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-semibold"
              >
                <ArrowLeft className="w-4 h-4" /> Edit Details
              </button>
            )}
          </div>

          <div className="p-8 md:p-12">
            {step === BookingStep.FORM && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <User className="w-4 h-4 text-emerald-600" /> Parent's Full Name
                    </label>
                    <input 
                      required
                      type="text" 
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-emerald-600" /> Parent's Email
                    </label>
                    <input 
                      required
                      type="email" 
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleInputChange}
                      placeholder="jane@example.com"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Baby className="w-4 h-4 text-emerald-600" /> Child's Name
                    </label>
                    <input 
                      required
                      type="text" 
                      name="childName"
                      value={formData.childName}
                      onChange={handleInputChange}
                      placeholder="Leo Doe"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <CalendarDays className="w-4 h-4 text-emerald-600" /> Child's Age
                    </label>
                    <input 
                      required
                      type="number" 
                      min="1"
                      max="18"
                      name="childAge"
                      value={formData.childAge || ''}
                      onChange={handleInputChange}
                      placeholder="8"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-100 border-none focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" /> {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-display font-extrabold text-xl py-5 rounded-2xl transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-emerald-200"
                >
                  Find Classes Now
                </button>
                <p className="text-center text-slate-400 text-xs">
                  By clicking, you agree to receive communications regarding your evaluation.
                </p>
              </form>
            )}

            {step === BookingStep.CALENDAR && (
              <div className="min-h-[600px] animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="mb-6 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-between">
                  <span className="text-emerald-800 font-bold">
                    Class Filter: {formData.childAge <= 8 ? 'Junior Stars (4-8)' : 'Future Pros (9-15)'}
                  </span>
                  <span className="text-emerald-600 text-sm font-medium">Auto-filled for {formData.childName}</span>
                </div>
                <InlineWidget 
                  url={getTargetUrl()}
                  styles={{
                    height: '650px',
                    width: '100%'
                  }}
                  prefill={{
                    email: formData.parentEmail,
                    name: formData.parentName,
                    customAnswers: {
                      a1: formData.childName
                    }
                  }}
                />
              </div>
            )}

            {step === BookingStep.OUT_OF_RANGE && (
              <div className="text-center py-12 px-6 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Phone className="w-10 h-10 text-slate-400" />
                </div>
                <h3 className="text-3xl font-display font-extrabold text-slate-900 mb-4">
                  Custom Assessment Needed
                </h3>
                <p className="text-slate-600 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
                  For children aged <span className="font-bold text-slate-900">{formData.childAge}</span>, we recommend a private assessment to ensure the best fit. Our group academy focuses on ages 4-15.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:5551234567" 
                    className="flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold transition-transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5" /> Call Directly
                  </a>
                  <button 
                    onClick={reset}
                    className="px-8 py-4 border border-slate-200 rounded-2xl font-bold hover:bg-slate-50"
                  >
                    Try Different Age
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingWizard;
