import { motion } from "motion/react";
import { BookOpen, Mic2, Users2, Building2 } from "lucide-react";

export function WhatIDo() {
  const services = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Book Reviews",
      description: "Deep, thoughtful reviews and curated recommendations that help readers find their next unforgettable story.",
      bgImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
      bgClass: "bg-[#F5F7FA]"
    },
    {
      icon: <Mic2 className="w-8 h-8 text-accent" />,
      title: "Reading Sessions",
      description: "Weekly reading circles and guided discussions designed to cultivate a focus-driven reading habit.",
      bgImage: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800",
      bgClass: "bg-[#FAF5F0]"
    },
    {
      icon: <Users2 className="w-8 h-8 text-primary" />,
      title: "Literary Meetups",
      description: "Vibrant offline and online community events bringing authors, publishers, and passionate readers together.",
      bgImage: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800",
      bgClass: "bg-[#F0F5F2]"
    },
    {
      icon: <Building2 className="w-8 h-8 text-text-main" />,
      title: "Brand Collaborations",
      description: "Authentic creator partnerships, sponsored reviews, and promotional campaigns for publishing houses.",
      bgImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      bgClass: "bg-[#F5EFF5]"
    }
  ];

  return (
    <section id="what-i-do" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6">What I Do</h2>
          <p className="text-lg text-gray-600">
            A blend of content creation, community building, and literary appreciation focused on creating real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover="hover"
              className="group relative h-[380px] rounded-[2rem] overflow-hidden cursor-pointer"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={service.bgImage} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
              </div>

              {/* Content Box that slides up */}
              <motion.div 
                variants={{
                  hover: { y: 0, backgroundColor: "rgba(255, 255, 255, 0.95)" }
                }}
                initial={{ y: "15%", backgroundColor: "rgba(255, 255, 255, 0.85)" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute inset-x-6 bottom-6 top-1/2 rounded-[1.5rem] p-8 backdrop-blur-md border border-white/50 flex flex-col justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-white mb-6 flex items-center justify-center shadow-sm">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-text-main mb-3">{service.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity flex-1">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
