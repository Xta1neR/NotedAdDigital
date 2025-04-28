'use client';

import Image from 'next/image';

const clients = [
  '/client1.jpg',
  '/client2.jpg',
  '/client3.jpg',
  '/client4.jpg',
  '/client5.jpg',
  '/client6.jpg',
  '/client7.jpg',
  '/client8.jpg',
  '/client9.jpg',
  '/client10.jpg',
  '/client11.jpg',
  '/client12.jpg',
  '/client13.png',
  '/client14.jpg',
];

export default function ClientsSection() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-10 text-amber-100">Our Clients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-center">
          {clients.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-black rounded-lg shadow hover:scale-105 transition-transform"
            >
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                width={100}
                height={100}
                className="object-contain h-20 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
