
import React from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, CheckCircle2, Grid } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const FEED_POSTS = [
  { id: 1, url: 'https://i.imgur.com/WDXcXqQ.jpeg', likes: '245', comments: '18' },
  { id: 2, url: 'https://i.imgur.com/Js80dAr.jpeg', likes: '189', comments: '12' },
  { id: 3, url: 'https://i.imgur.com/GwrftG9.jpeg', likes: '312', comments: '24' },
  { id: 4, url: 'https://i.imgur.com/53UmZUW.jpeg', likes: '156', comments: '9' },
  { id: 5, url: 'https://i.imgur.com/tSmBWOC.jpeg', likes: '203', comments: '15' },
  { id: 6, url: 'https://i.imgur.com/PFudaDi.jpeg', likes: '278', comments: '21' },
];

const InstagramShowcase: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Widget Profile Header */}
        <div className="bg-white rounded-t-[2rem] border-x border-t border-slate-100 p-6 md:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="w-24 h-24 md:w-36 md:h-36 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-fuchsia-600 to-indigo-600 text-white">
                <div className="w-full h-full rounded-full border-4 border-white overflow-hidden bg-white flex items-center justify-center">
                  <img 
                    src="https://bilusoccer.com/wp-content/uploads/2025/03/h2-3.png" 
                    alt="Bilu Soccer"
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
              </div>
              <div className="absolute bottom-2 right-2 bg-white rounded-full p-0.5 shadow-md">
                <CheckCircle2 className="w-6 h-6 text-blue-500 fill-blue-500 text-white" />
              </div>
            </div>

            {/* Profile Stats & Bio */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <h2 className="text-2xl font-semibold text-slate-900 tracking-tight">bilu_soccer</h2>
                <div className="flex gap-2 justify-center">
                  <a 
                    href={CONTACT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-1.5 rounded-lg font-bold text-sm transition-all active:scale-95 shadow-lg shadow-emerald-100"
                  >
                    Follow
                  </a>
                  <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 px-5 py-1.5 rounded-lg font-bold text-sm transition-colors">
                    Message
                  </button>
                </div>
              </div>
              
              <div className="flex justify-center md:justify-start gap-8 mb-6">
                <div className="text-center md:text-left">
                  <span className="block font-bold text-slate-900">142</span>
                  <span className="text-slate-500 text-sm">posts</span>
                </div>
                <div className="text-center md:text-left">
                  <span className="block font-bold text-slate-900">1.2k</span>
                  <span className="text-slate-500 text-sm">followers</span>
                </div>
                <div className="text-center md:text-left">
                  <span className="block font-bold text-slate-900">480</span>
                  <span className="text-slate-500 text-sm">following</span>
                </div>
              </div>

              <div className="space-y-1">
                <p className="font-bold text-slate-900">Bilu Soccer Academy ⚽️</p>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md">
                  📍 Charleston, SC | High-performance athlete development.
🎟 Register Now!👇 <br />
                
                </p>
                <a href="https://bilusoccer.com" className="text-blue-900 font-semibold text-sm hover:underline block mt-1">
                  bilusoccer.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Post Grid Section */}
        <div className="bg-white border-x border-b border-slate-100 p-1 md:p-4 rounded-b-[2rem] shadow-sm">
          {/* Grid Tabs Icon */}
          <div className="flex justify-center border-t border-slate-100 mb-4">
            <div className="flex items-center gap-2 py-3 border-t-2 border-slate-900 -mt-[1px]">
              <Grid className="w-4 h-4 text-slate-900" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-900">Posts</span>
            </div>
          </div>

          {/* The Actual Image Grid */}
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {FEED_POSTS.map((post) => (
              <div 
                key={post.id} 
                className="group relative aspect-square bg-slate-100 overflow-hidden cursor-pointer"
              >
                <img 
                  src={post.url} 
                  alt={`Instagram Post ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
              
              
                />
                
                {/* Authentic Instagram Hover Overlay */}
                <a 
                  href={CONTACT_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 md:gap-8 text-white z-10"
                >
                  <div className="flex items-center gap-1 md:gap-2">
                    <Heart className="w-5 h-5 md:w-6 md:h-6 fill-white" />
                    <span className="font-bold text-sm md:text-lg">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 md:gap-2">
                    <MessageCircle className="w-5 h-5 md:w-6 md:h-6 fill-white" />
                    <span className="font-bold text-sm md:text-lg">{post.comments}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-8 text-center">
          <a 
            href={CONTACT_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 hover:text-emerald-600 transition-all shadow-sm"
          >
            <Instagram className="w-5 h-5" />
            See more on Instagram
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramShowcase;
