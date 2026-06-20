import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

function DestinationCard({ name, image, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
        <div className="relative h-56 overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <CardContent className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center text-white">
              <MapPin className="w-5 h-5 mr-2" />
              <h3 className="text-lg font-semibold">{name}</h3>
            </div>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
}

export default DestinationCard;