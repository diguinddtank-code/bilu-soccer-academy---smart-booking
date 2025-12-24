
import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Parent of Leo (7)",
    content: "Bilu Soccer has changed my son's attitude towards sports. He's more confident and literally waits by the door for practice every Tuesday!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_au9OePfk3qI7VxmY6Rc7xJ1hu6XO9zbLsg&s"
  },
  {
    name: "Michael Chen",
    role: "Parent of Kevin (11)",
    content: "The technical improvement in just 3 months is staggering. The coaches actually care about individual progress, not just the team score.",
    img: "https://img.freepik.com/fotos-gratis/homem-sorridente-de-vista-frontal-no-trabalho_23-2149741200.jpg?semt=ais_hybrid&w=740&q=80"
  },
  {
    name: "Elena Rodriguez",
    role: "Parent of Sofia (5)",
    content: "Finding a place that balances fun and real skill-building is hard. Bilu does it perfectly. Best decision we made for her activities.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_o0NAj7eYavUKXhsxocjGdqByKUV9KaF7g&s"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-emerald-500 font-bold tracking-widest uppercase text-sm mb-3">Community Love</h2>
          <p className="text-3xl md:text-5xl font-display font-extrabold mb-4">Trusted by Local Parents</p>
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />)}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 relative hover:shadow-2xl hover:shadow-emerald-900/20 transition-all">
              <div className="absolute -top-4 -left-4">
                <img src={review.img} className="w-16 h-16 rounded-2xl border-4 border-slate-900 shadow-xl" alt={review.name} />
              </div>
              <p className="text-slate-300 italic mb-6 mt-6 leading-relaxed">
                "{review.content}"
              </p>
              <div>
                <h4 className="font-bold text-white text-lg">{review.name}</h4>
                <p className="text-emerald-500 text-sm font-semibold">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-[100px] -translate-y-1/2"></div>
    </section>
  );
};

export default Testimonials;
