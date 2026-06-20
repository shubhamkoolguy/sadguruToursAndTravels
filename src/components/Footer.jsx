import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

function Footer() {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/cab-booking', label: 'Cab Booking' },
    { path: '/fleet', label: 'Our Fleet' },
    { path: '/terms', label: 'Terms & Conditions' }
  ];

  const services = [
    'Local Cab Booking',
    'Outstation Cab Booking',
    'Airport Transfers',
    'Hotel Booking',
    'VIP Darshan Booking',
    'Boat Ticket Booking',
    'Holiday Packages'
  ];

  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-semibold text-lg text-foreground mb-4">Quick Links</p>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="hover:text-foreground transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg text-foreground mb-4">Our Services</p>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2 flex-shrink-0"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-semibold text-lg text-foreground mb-4">Contact Information</p>
            <div className="space-y-3">
              <div className="flex items-start">
                <Phone className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-primary" />
                <div className="space-y-1">
                  <a href="tel:+917459000583" className="block hover:text-foreground transition-colors duration-200">
                    +91-7459000583
                  </a>
                  <a href="tel:+919580980005" className="block hover:text-foreground transition-colors duration-200">
                    +91-9580980005
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 flex-shrink-0 text-primary" />
                <span>Available 24/7 for your travel needs</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Sadguru Tours & Travels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;