import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const services = [
  'Local cab booking',
  'Outstation cab booking',
  'Airport pickup and drop',
  'Hotel Booking support',
  'Boat ticket booking',
  'Holiday package planning',
  'VIP Darshan Tickets',
  'Sangam'
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
        <ul className="grid sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <li key={service} className="rounded-lg border bg-card p-4 text-card-foreground">
              {service}
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default ServicesPage;
