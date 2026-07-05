import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false });

  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "Book Club Member",
      text: "Rupa's reading sessions are the highlight of my week. She has a magical way of guiding our discussions and making everyone feel heard. Absolute game-changer for my reading habits.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Michael Chen",
      role: "Author",
      text: "Collaborating with Rupa for my book launch was incredible. Her review was not only thoughtful and incredibly detailed, but her audience is genuinely engaged and passionate.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Emily Rodriguez",
      role: "Substack Creator",
      text: "I started following Rupa a year ago. Her recommendations are always spot on, and her voiceovers bring so much life to the stories she shares. A true creative force.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
    }
  ];

  return (
    <section className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6">What People Say</h2>
        </div>

        <div className="embla overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((t, index) => (
              <div className="embla__slide flex-[0_0_100%] md:flex-[0_0_70%] lg:flex-[0_0_50%] px-4" key={index}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="glass-card p-10 md:p-12 shadow-sm relative h-full flex flex-col"
                >
                  <Quote className="text-secondary w-16 h-16 absolute top-8 right-8 z-0" />
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed italic mb-10 relative z-10 flex-1">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-text-main font-serif">{t.name}</h4>
                      <p className="text-sm text-gray-500 font-medium">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
