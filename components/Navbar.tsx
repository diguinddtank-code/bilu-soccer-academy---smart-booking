
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900 text-white shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            {/* Optimized Logo Container for the provided URL */}
            <div className="h-14 w-14 bg-white rounded-xl flex items-center justify-center overflow-hidden p-1 shadow-[0_0_15px_rgba(16,185,129,0.4)] border border-emerald-500/30">
               <img 
                 src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png" 
                 alt="Bilu Soccer Academy" 
                 className="w-full h-full object-contain"
                 loading="eager"
                 onError={(e) => {
                   // Secondary fallback just in case
                   e.currentTarget.src = "https://i.ibb.co/Vv0V4xX/bilu-logo.png";
                 }}
               />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-extrabold text-xl tracking-tight italic">
                BILU<span className="text-emerald-500">SOCCER</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold opacity-80">International Academy</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#benefits" className="hover:text-emerald-400 transition-colors">Our Approach</a>
            <a href="#testimonials" className="hover:text-emerald-400 transition-colors">Testimonials</a>
            <a 
              href="#booking" 
              className="bg-emerald-600 hover:bg-emerald-500 px-6 py-3 rounded-xl font-bold transition-all shadow-md transform hover:-translate-y-0.5"
            >
              Book Evaluation
            </a>
          </div>
          <div className="md:hidden">
            <a 
              href="#booking" 
              className="bg-emerald-600 text-xs px-4 py-2 rounded-full font-bold shadow-lg"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
