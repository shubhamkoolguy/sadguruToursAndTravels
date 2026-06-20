import React from 'react';

const phoneNumber = '917459000583';
const message = 'Namaste! Thank you for choosing Sadguru Tours & Travels for your transportation and travel needs. Our team is dedicated to making your journey seamless and memorable. Please share your booking requirements, and we\'ll craft a customized solution for you. What are you looking to book today?';
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

function WhatsAppFloatButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp for booking callback"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      title="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-current"
        aria-hidden="true"
      >
        <path d="M19.11 17.21c-.27-.14-1.6-.79-1.84-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.26s.98 2.62 1.12 2.8c.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.65.21 1.25.18 1.72.11.53-.08 1.6-.65 1.83-1.28.22-.63.22-1.16.16-1.28-.07-.11-.25-.18-.52-.32z" />
        <path d="M16.03 3.2c-7.06 0-12.78 5.72-12.78 12.78 0 2.25.59 4.45 1.7 6.38L3.2 28.8l6.6-1.71c1.87 1.02 3.97 1.56 6.23 1.56 7.06 0 12.78-5.72 12.78-12.78S23.09 3.2 16.03 3.2zm0 23.3c-1.98 0-3.92-.53-5.61-1.52l-.4-.24-3.92 1.02 1.04-3.82-.26-.39a10.58 10.58 0 0 1-1.66-5.69c0-5.94 4.84-10.78 10.78-10.78 2.88 0 5.59 1.12 7.63 3.16 2.04 2.03 3.16 4.75 3.15 7.62 0 5.95-4.84 10.79-10.78 10.79z" />
      </svg>
    </a>
  );
}

export default WhatsAppFloatButton;
