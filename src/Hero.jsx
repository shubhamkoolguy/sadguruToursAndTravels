import React from 'react';

export default function HeritageHero() {
  return (
    <div className="relative min-h-screen bg-heritage-sand flex items-center justify-center overflow-hidden border-b-8 border-heritage-gold">
      {/* Spiritual background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-heritage-saffron/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-heritage-maroon/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
        {/* Mandali/Traditional Subheading Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-heritage-maroon/10 text-heritage-maroon border border-heritage-maroon/20 font-medium text-sm tracking-wide mb-6 uppercase">
          ✨ Seek the Divine Heritage
        </div>

        {/* Main Typography */}
        <h1 className="font-heritage text-5xl md:text-7xl font-black text-heritage-maroon leading-tight tracking-tight mb-6">
          Experience the Eternal Soul of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-heritage-saffron to-heritage-gold">
            Varanasi & Ayodhya
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-heritage-charcoal/80 text-lg md:text-xl font-sans mb-10 leading-relaxed">
          From the mystical, lamp-lit Ghats of Kashi to the grand, divine awakening of Ram Janmabhoomi. Let Sadguru Tours guide your sacred journey through time.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-heritage-maroon to-heritage-saffron text-white font-semibold rounded-lg shadow-lg hover:shadow-heritage-saffron/30 transition-all transform hover:-translate-y-0.5 tracking-wide">
            Explore Sacred Packages
          </button>
          <button className="w-full sm:w-auto px-8 py-4 border-2 border-heritage-maroon text-heritage-maroon hover:bg-heritage-maroon hover:text-white font-semibold rounded-lg transition-all tracking-wide">
            Virtual Tour
          </button>
        </div>

        {/* Cultural Featured Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 max-w-4xl mx-auto border-t border-heritage-maroon/10 pt-10">
          <div className="p-4 text-center">
            <h3 className="font-heritage text-xl font-bold text-heritage-maroon">Ganga Aarti</h3>
            <p className="text-sm text-heritage-charcoal/60">Varanasi Spiritual Bliss</p>
          </div>
          <div className="p-4 text-center">
            <h3 className="font-heritage text-xl font-bold text-heritage-maroon">Ram Mandir</h3>
            <p className="text-sm text-heritage-charcoal/60">Ayodhya's Imperial Glory</p>
          </div>
          <div className="p-4 text-center">
            <h3 className="font-heritage text-xl font-bold text-heritage-maroon">Kashi Vishwanath</h3>
            <p className="text-sm text-heritage-charcoal/60">Ancient Cosmic Energy</p>
          </div>
          <div className="p-4 text-center">
            <h3 className="font-heritage text-xl font-bold text-heritage-maroon">Sarayu Dip</h3>
            <p className="text-sm text-heritage-charcoal/60">Sacred Royal Purification</p>
          </div>
        </div>
      </div>
    </div>
  );
}
