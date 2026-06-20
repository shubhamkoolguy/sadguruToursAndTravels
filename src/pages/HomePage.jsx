import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-center space-y-6">
          <p className="text-sm uppercase tracking-wider text-primary font-semibold">Sadguru Tours & Travels</p>
          <h1 className="text-4xl md:text-5xl font-bold">Reliable rides for local and outstation travel</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book safe, clean, and affordable vehicles with experienced drivers for city trips, airport transfers, and tour packages.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/cab-booking">
              <Button>Book a Cab</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline">View Services</Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
