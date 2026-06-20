import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold">About Us</h1>
        <p className="text-muted-foreground">
          We are a customer-first travel service since 2017 focused on dependable transportation, transparent pricing, and responsive support.
        </p>
        <p className="text-muted-foreground">
          Our fleet serves local and outstation routes with trained drivers and round-the-clock booking assistance.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUsPage;
