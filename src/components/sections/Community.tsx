import { motion } from "motion/react";

export function Community() {
  const photos = [
    { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800", className: "col-span-2 row-span-2 md:col-span-6 md:row-span-2" },
    { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600", className: "col-span-2 row-span-1 md:col-span-3 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=600", className: "col-span-2 row-span-1 md:col-span-3 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?auto=format&fit=crop&q=80&w=600", className: "col-span-2 row-span-1 md:col-span-4 md:row-span-1" },
    { src: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800", className: "col-span-2 row-span-1 md:col-span-8 md:row-span-1" }
  ];

  return (
    <section id="community" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6">Book Club Community</h2>
          <p className="text-lg text-gray-600">
            A glimpse into our reading sessions, meetups, and the beautiful moments shared among book lovers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-12 auto-rows-[200px] gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-3xl group ${photo.className}`}
            >
              <img 
                src={photo.src} 
                alt="Community event" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
