import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

function CabBookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    pickupLocation: '',
    dropLocation: '',
    travelDate: '',
    vehicleType: '',
    passengers: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, vehicleType: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.mobile || !formData.pickupLocation || 
        !formData.dropLocation || !formData.travelDate || !formData.vehicleType || !formData.passengers) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!/^\+?[\d\s-]{10,}$/.test(formData.mobile)) {
      toast.error('Please enter a valid mobile number');
      return;
    }

    setIsSubmitting(true);

    try {
      const bookings = JSON.parse(localStorage.getItem('cabBookings') || '[]');
      const newBooking = {
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString(),
        status: 'pending'
      };
      bookings.push(newBooking);
      localStorage.setItem('cabBookings', JSON.stringify(bookings));

      toast.success('Booking request submitted successfully');
      setFormData({
        fullName: '',
        mobile: '',
        pickupLocation: '',
        dropLocation: '',
        travelDate: '',
        vehicleType: '',
        passengers: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="text-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="mobile">Mobile Number</Label>
          <Input
            id="mobile"
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="+91-XXXXXXXXXX"
            required
            className="text-foreground"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="pickupLocation">Pickup Location</Label>
          <Input
            id="pickupLocation"
            name="pickupLocation"
            type="text"
            value={formData.pickupLocation}
            onChange={handleChange}
            placeholder="Enter pickup location"
            required
            className="text-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="dropLocation">Drop Location</Label>
          <Input
            id="dropLocation"
            name="dropLocation"
            type="text"
            value={formData.dropLocation}
            onChange={handleChange}
            placeholder="Enter drop location"
            required
            className="text-foreground"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="travelDate">Travel Date</Label>
          <Input
            id="travelDate"
            name="travelDate"
            type="date"
            value={formData.travelDate}
            onChange={handleChange}
            required
            className="text-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="vehicleType">Vehicle Type</Label>
          <Select value={formData.vehicleType} onValueChange={handleSelectChange}>
            <SelectTrigger className="text-foreground">
              <SelectValue placeholder="Select vehicle type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hatchback">Hatchback (₹12/KM)</SelectItem>
              <SelectItem value="sedan">Sedan (₹12/KM)</SelectItem>
              <SelectItem value="muv">MUV (₹14/KM)</SelectItem>
              <SelectItem value="innova-crysta">Innova Crysta (₹18/KM)</SelectItem>
              <SelectItem value="innova-hycross">Innova Hycross (₹20/KM)</SelectItem>
              <SelectItem value="tempo-12">Tempo Traveller 12 Seater (₹30/KM)</SelectItem>
              <SelectItem value="tempo-16">Tempo Traveller 16 Seater (₹25/KM)</SelectItem>
              <SelectItem value="tempo-20">Tempo Traveller 20 Seater (₹29/KM)</SelectItem>
              <SelectItem value="tempo-26">Tempo Traveller 26 Seater (₹35/KM)</SelectItem>
              <SelectItem value="urbania">Force Urbania 16 Seater (₹35/KM)</SelectItem>
              <SelectItem value="bus-27">Luxury Bus 27-30 Seater (₹49/KM)</SelectItem>
              <SelectItem value="bus-35">Luxury Bus 35 Seater (₹55/KM)</SelectItem>
              <SelectItem value="bus-42">Luxury Bus 42-45 Seater (₹65/KM)</SelectItem>
              <SelectItem value="bus-49">Luxury Bus 49 Seater (₹68/KM)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="passengers">Number of Passengers</Label>
        <Input
          id="passengers"
          name="passengers"
          type="number"
          min="1"
          value={formData.passengers}
          onChange={handleChange}
          placeholder="Enter number of passengers"
          required
          className="text-foreground"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional Message (Optional)</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Any special requirements or notes"
          rows={4}
          className="text-foreground resize-none"
        />
      </div>

      <Button 
        type="submit" 
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98]"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
      </Button>
    </form>
  );
}

export default CabBookingForm;