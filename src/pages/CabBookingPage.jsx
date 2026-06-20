import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

function CabBookingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">Cab Booking</h1>
        <p className="text-muted-foreground">For instant booking assistance, call our team directly.</p>
        <div className="rounded-xl border bg-card p-6 flex justify-center">
          <a href="tel:+917459000583">
            <Button size="lg">Call Us: +91-7459000583</Button>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default CabBookingPage;
