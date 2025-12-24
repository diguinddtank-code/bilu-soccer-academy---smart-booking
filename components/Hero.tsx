
import React from 'react';
import { ChevronRight, Play, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden">
      {/* Abstract soccer field background effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-900/40 via-transparent to-transparent"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-600/20 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center py-16">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Registration Open: Charleston & Summerville
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white leading-tight mb-6">
            Unlock Your Child's <br />
            <span className="text-emerald-500">Soccer Potential</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-6 max-w-2xl mx-auto lg:mx-0">
            Professional coaching focused on technique, discipline, and fun. 
            Join the premier academy in <span className="text-white font-semibold">South Carolina</span> where champions are made, 
            one goal at a time.
          </p>
          
          <div className="flex items-center justify-center lg:justify-start gap-2 text-emerald-400 font-medium mb-10">
            <MapPin className="w-5 h-5" />
            <span>Charleston • Summerville • South Carolina</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="#booking" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-[0_10px_30px_rgba(16,185,129,0.3)]"
            >
              Book Trial Class <ChevronRight className="w-5 h-5" />
            </a>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-semibold px-8 py-4 border border-slate-700 rounded-xl hover:bg-slate-800 transition-all">
              <Play className="w-5 h-5 text-emerald-500" /> Watch Training
            </button>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-slate-800 pt-8">
            <div>
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-slate-400 text-sm">Students</p>
            </div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div>
              <p className="text-2xl font-bold text-white">10+</p>
              <p className="text-slate-400 text-sm">Pro Coaches</p>
            </div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div>
              <p className="text-2xl font-bold text-white">4.9/5</p>
              <p className="text-slate-400 text-sm">Rating</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative">
           <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800 rotate-1 transform transition-transform hover:rotate-0">
              <img 
                src="https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop" 
                alt="Soccer Training" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
           </div>
           {/* Decorative elements */}
           <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-600 rounded-2xl -z-0 opacity-50 blur-xl"></div>
           <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500 rounded-full -z-0 opacity-30 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
