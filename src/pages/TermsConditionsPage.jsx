import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">Terms & Conditions</h1>
        <p className="text-muted-foreground">Bookings are subject to availability and confirmation by our operations team.</p>
        <p className="text-muted-foreground">Final pricing may vary based on route, tolls, parking, night charges and waiting time.</p>
        <p className="text-muted-foreground">Cancellations and refunds are processed as per the agreed booking policy.</p>
      </main>
      <Footer />
    </div>
  );
}

export default TermsConditionsPage;
