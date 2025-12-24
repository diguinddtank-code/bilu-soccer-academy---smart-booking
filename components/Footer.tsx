
import React from 'react';
import { Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-16 w-16 bg-white rounded-xl flex items-center justify-center overflow-hidden p-1 border-2 border-emerald-500 shadow-lg">
                <img 
                  src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png" 
                  alt="Bilu Soccer Academy" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display font-extrabold text-2xl tracking-tight italic">
                  BILU<span className="text-emerald-500">SOCCER</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">International Academy</span>
              </div>
            </div>
            <p className="text-slate-400 max-w-md leading-relaxed mb-8">
              Based in the Charleston and Summerville area, we are the premier choice for youth development. We foster a love for the game while building technical mastery in a professional environment.
            </p>
            <div className="flex gap-4">
              <a 
                href={CONTACT_INFO.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-all hover:-translate-y-1 shadow-xl"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-all hover:-translate-y-1 shadow-xl">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#benefits" className="hover:text-emerald-500 transition-colors">Our Approach</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-500 transition-colors">Testimonials</a></li>
              <li><a href="#booking" className="hover:text-emerald-500 transition-colors">Book Schedule</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Charleston Locations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Summerville & Charleston, SC</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>(843) Area Code</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Bilu International Soccer Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
