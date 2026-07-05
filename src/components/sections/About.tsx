import { motion } from "motion/react";
import { Users, FileText, CalendarDays, Handshake } from "lucide-react";

export function About() {
  const stats = [
    { icon: <Users size={24} />, value: "14K+", label: "Community Members" },
    { icon: <FileText size={24} />, value: "180+", label: "Content Pieces" },
    { icon: <CalendarDays size={24} />, value: "Weekly", label: "Reading Sessions" },
    { icon: <Handshake size={24} />, value: "Multiple", label: "Brand Collabs" },
  ];

  return (
    <section id="about" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-medium text-primary mb-6">Meet Rupa Sri</h2>
            <div className="w-20 h-1 bg-accent mb-8 rounded-full"></div>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-6">
              I am a passionate reader, reviewer, creator, and community builder who believes books create meaningful human connections.
            </p>
            <p className="text-base text-gray-500 leading-relaxed">
              Through my journey, I've transformed my love for literature into a thriving platform where readers from all walks of life come together. Whether it's dissecting a profound novel, hosting a weekend reading circle, or bringing stories to life through voice-over, my mission is to make reading a shared, enriching experience.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 grid grid-cols-2 gap-4 md:gap-6 w-full"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="glass-card p-6 flex flex-col items-center text-center transition-all hover:shadow-[0_10px_40px_-10px_rgba(45,51,107,0.08)] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary mb-4 shadow-sm">
                  {stat.icon}
                </div>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-text-main mb-1">{stat.value}</h3>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
