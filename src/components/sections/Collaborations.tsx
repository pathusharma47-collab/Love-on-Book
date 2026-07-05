import { motion } from "motion/react";
import { Button } from "../ui/Button";
import { ArrowRight, Mail, Instagram, Youtube, Facebook } from "lucide-react";

interface CollaborationsProps {
  onRegisterClick?: () => void;
}

export function Collaborations({ onRegisterClick }: CollaborationsProps) {
  const services = [
    "Brand Collaborations",
    "Sponsored Reviews",
    "Voice Overs",
    "Event Hosting",
    "Community Engagement"
  ];

  return (
    <section id="collaborate" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-primary rounded-[3rem] p-10 md:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px]" />

          <div className="grid md:grid-cols-2 gap-16 relative z-10 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 leading-tight">
                Let's Create Something <span className="text-accent italic">Meaningful</span> Together
              </h2>
              <p className="text-white/80 text-lg mb-10 max-w-md">
                Whether you're an author launching a new book or a brand looking to connect with a passionate reading community, let's talk.
              </p>
              
              <ul className="space-y-4 mb-10">
                {services.map((service, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/90">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="font-medium text-lg">{service}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" onClick={onRegisterClick} className="bg-white text-primary hover:bg-white/90 gap-2">
                Work With Me <ArrowRight size={18} />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-[2rem]"
            >
              <h3 className="text-2xl font-serif text-white mb-8">Get In Touch</h3>
              
              <div className="space-y-8">
                <a href="mailto:hello@rupasri.com" className="flex items-center gap-4 text-white hover:text-accent transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-white/60 mb-1">Email Me</p>
                    <p className="font-medium text-lg">hello@rupasri.com</p>
                  </div>
                </a>

                <div className="pt-8 border-t border-white/10">
                  <p className="text-sm text-white/60 mb-6">Connect on Socials</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all hover:-translate-y-1">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:text-white transition-all hover:-translate-y-1">
                      <Youtube size={24} />
                    </a>
                    <a href="#" className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-blue-600 hover:text-white transition-all hover:-translate-y-1">
                      <Facebook size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
