import React from 'react';

const FleetCards = () => {
  const fleetData = [
    {
      id: 'hatchback',
      category: 'Hatchback',
      rate: '12',
      icon: '🚗',
      vehicles: ['Swift', 'i10', 'i20'],
    },
    {
      id: 'sedan',
      category: 'Sedan',
      rate: '12',
      icon: '🚙',
      vehicles: ['Aura', 'Desire', 'Amaze'],
    },
    {
      id: 'muv',
      category: 'MUV',
      rate: '14',
      icon: '🚐',
      vehicles: ['Ertiga', 'Kia Carens'],
    },
    {
      id: 'suv',
      category: 'SUV',
      rate: 'From 18',
      icon: '🛻',
      vehicles: [
        { name: 'Innova Crysta', rate: '18' },
        { name: 'Innova Hycross', rate: '20' },
      ],
    },
    {
      id: 'tempo',
      category: 'Tempo Traveller',
      rate: 'From 25',
      icon: '🚐',
      vehicles: [
        { name: '12 seater Maharaja', rate: '30' },
        { name: '16 seater', rate: '25' },
        { name: '20 seater', rate: '29' },
        { name: '26 seater', rate: '35' },
      ],
    },
    {
      id: 'luxury',
      category: 'Luxury',
      rate: 'From 35',
      icon: '✨',
      vehicles: [
        { name: 'Force Urbania 16 seater', rate: '35' },
        { name: 'Bus 27-30 seater', rate: '49' },
        { name: 'Bus 35 seater luxury', rate: '55' },
        { name: 'Bus 42-45 seater', rate: '65' },
      ],
    },
    {
      id: 'bus',
      category: 'Standard Bus',
      rate: '68',
      icon: '🚌',
      vehicles: ['49 seater'],
    },
  ];

  return (
    <div className="py-12 px-4 bg-background text-foreground">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Our Fleet
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose from our wide range of vehicles for your perfect journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleetData.map((fleet) => (
            <div
              key={fleet.id}
              className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <div className="p-6 bg-muted/40 border-b">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{fleet.icon}</span>
                  <div>
                    <h2 className="text-xl font-bold">{fleet.category}</h2>
                    <p className="text-sm text-muted-foreground">
                      From ₹{fleet.rate}/km
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 bg-card">
                {fleet.vehicles.map((vehicle, index) => {
                  const vehicleName =
                    typeof vehicle === 'string' ? vehicle : vehicle.name;
                  const vehicleRate =
                    typeof vehicle === 'string' ? fleet.rate : vehicle.rate;

                  return (
                    <div
                      key={index}
                      className="py-3 px-4 mb-2 rounded-lg flex justify-between items-center border bg-muted/30"
                    >
                      <span className="font-medium">
                        {vehicleName}
                      </span>
                      <span className="font-bold px-3 py-1 rounded text-sm bg-primary text-primary-foreground">
                        ₹{vehicleRate}/km
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ready to book your journey with Sadguru Tours & Travels?
          </p>
          <a
            href="https://wa.me/917459000583?text=Hi%2C%20please%20call%20back%20for%20a%20booking."
            target="_blank"
            rel="noreferrer"
            className="inline-flex px-8 py-3 rounded-lg font-bold bg-primary text-primary-foreground transition-all duration-300 hover:opacity-90"
          >
            Book Now on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default FleetCards;
