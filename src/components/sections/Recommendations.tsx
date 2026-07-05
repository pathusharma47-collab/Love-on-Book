import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "../ui/Button";

export function Recommendations() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const books = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      rating: 5,
      genre: "Fiction / Fantasy",
      review: "A beautiful exploration of regret, possibility, and what makes a life worth living. It changed how I view my own past choices.",
      cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      rating: 5,
      genre: "Self-Help / Psychology",
      review: "Practical, actionable, and entirely transformative. The 1% rule is something I bring up in almost every reading session.",
      cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Tomorrow, and Tomorrow, and Tomorrow",
      author: "Gabrielle Zevin",
      rating: 4.5,
      genre: "Literary Fiction",
      review: "A breathtaking narrative on friendship, creativity, and the complex nature of human connections over decades.",
      cover: "https://images.unsplash.com/photo-1629196914566-8abe3ce35d46?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      rating: 5,
      genre: "History / Non-Fiction",
      review: "A sweeping overview of human history that challenges everything you thought you knew about our species.",
      cover: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="recommendations" className="py-24 bg-primary text-white overflow-hidden relative">
      {/* Decorative BG element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 rounded-l-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-medium mb-6">Featured Reads</h2>
            <p className="text-lg text-white/80">
              Handpicked books that have profoundly shaped my perspective and sparked the best conversations.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={scrollPrev} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={scrollNext} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex -ml-6">
            {books.map((book, index) => (
              <div className="embla__slide flex-[0_0_100%] md:flex-[0_0_45%] lg:flex-[0_0_35%] pl-6" key={index}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-[2rem] p-6 border border-white/10 h-full flex flex-col"
                >
                  <div className="flex gap-6 mb-6">
                    <div className="w-32 h-44 rounded-xl overflow-hidden shrink-0 shadow-lg bg-gray-200">
                      <img src={book.cover} alt={book.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <div className="flex items-center gap-1 text-accent mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill={i < Math.floor(book.rating) ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <h3 className="font-serif text-xl font-bold mb-1">{book.title}</h3>
                      <p className="text-sm font-medium text-white/70 mb-3">{book.author}</p>
                      <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-medium tracking-wide">
                        {book.genre}
                      </span>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed italic mb-8 mt-auto flex-1">
                    "{book.review}"
                  </p>
                  <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 hover:text-white">
                    Read Full Review
                  </Button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
