
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import InstagramShowcase from './components/InstagramShowcase';
import Testimonials from './components/Testimonials';
import BookingWizard from './components/BookingWizard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Benefits />
        <InstagramShowcase />
        <Testimonials />
        <BookingWizard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
