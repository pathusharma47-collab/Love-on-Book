import { motion } from "motion/react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "../ui/Button";

interface EventItem {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  type: string;
}

interface UpcomingEventsProps {
  events: EventItem[];
  onRegisterClick: (event: EventItem) => void;
}

export function UpcomingEvents({ events, onRegisterClick }: UpcomingEventsProps) {
  return (
    <section id="events" className="py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary font-medium text-sm mb-4">
              Join the Community
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-primary mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">
              Connect with fellow readers, discuss fascinating ideas, and share your reading journey.
            </p>
          </div>
          <Button variant="outline" onClick={() => onRegisterClick(events[0])}>View All Events</Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(45,51,107,0.08)] transition-all group flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                  {event.type}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-serif font-semibold text-text-main mb-6 line-clamp-2">{event.title}</h3>
                
                <div className="space-y-4 mb-8 mt-auto">
                  <div className="flex items-center gap-3 text-gray-600">
                    <Calendar size={18} className="text-accent" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock size={18} className="text-accent" />
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <MapPin size={18} className="text-accent" />
                    <span className="text-sm font-medium">{event.location}</span>
                  </div>
                </div>

                <Button 
                  onClick={() => onRegisterClick(event)}
                  className="w-full rounded-2xl group-hover:bg-primary group-hover:text-white transition-colors bg-secondary text-primary"
                >
                  Register Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
