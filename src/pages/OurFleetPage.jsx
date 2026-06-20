import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FleetCards from '@/components/FleetCard';

function OurFleetPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <FleetCards />
      <Footer />
    </div>
  );
}

export default OurFleetPage;
