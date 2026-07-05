import { motion } from "motion/react";
import { Play } from "lucide-react";

export function VideoContent() {
  return (
    <section className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6">From The Channel</h2>
          <p className="text-lg text-gray-600">
            Dive into my latest book reviews, curated reading lists, and highlights from our community reading sessions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Video */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative group rounded-3xl overflow-hidden shadow-sm"
          >
            <div className="aspect-video bg-gray-100 relative">
              <img 
                src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=1200" 
                alt="Featured Video" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                  <Play size={32} className="text-white ml-2" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 inline-block">Latest Review</span>
              <h3 className="text-2xl md:text-3xl font-serif font-medium text-white mb-2">My Top 10 Books That Changed Everything</h3>
              <p className="text-white/80 line-clamp-1">A deep dive into the stories that left a lasting impact on my life.</p>
            </div>
          </motion.div>

          {/* Secondary Videos */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group cursor-pointer flex flex-col sm:flex-row lg:flex-col gap-4"
            >
              <div className="w-full sm:w-48 lg:w-full aspect-video rounded-2xl overflow-hidden relative shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&q=80&w=600" 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={24} className="text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-text-main group-hover:text-primary transition-colors leading-snug mb-2">
                  Highlights from the Winter Reading Circle
                </h4>
                <p className="text-sm text-gray-500">12k views • 2 weeks ago</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="group cursor-pointer flex flex-col sm:flex-row lg:flex-col gap-4"
            >
              <div className="w-full sm:w-48 lg:w-full aspect-video rounded-2xl overflow-hidden relative shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=600" 
                  alt="Video thumbnail" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play size={24} className="text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-serif text-lg font-bold text-text-main group-hover:text-primary transition-colors leading-snug mb-2">
                  Author Interview: Writing the Next Bestseller
                </h4>
                <p className="text-sm text-gray-500">8.5k views • 1 month ago</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
