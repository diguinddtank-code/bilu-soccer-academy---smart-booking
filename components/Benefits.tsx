
import React from 'react';
import { ShieldCheck, Target, Users, Zap } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    description: "Background-checked coaches and state-of-the-art facilities ensure your child's safety is always the priority."
  },
  {
    icon: Target,
    title: "Pro Methodology",
    description: "European-inspired training drills adapted for youth development to build fundamental technical skills."
  },
  {
    icon: Users,
    title: "Character Building",
    description: "We teach more than just soccer. We instill discipline, teamwork, and resilience in every player."
  },
  {
    icon: Zap,
    title: "High Intensity",
    description: "Small group sessions mean more touches on the ball and personalized feedback for faster growth."
  }
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-600 tracking-widest uppercase mb-3">Why Choose Bilu</h2>
          <p className="text-3xl md:text-5xl font-display font-extrabold text-slate-900 mb-6">
            The Gold Standard in <br />Youth Soccer Training
          </p>
          <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group"
            >
              <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
