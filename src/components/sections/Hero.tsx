import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "../ui/Button";
import { 
  ArrowRight, 
  BookMarked, 
  Mic, 
  Sparkles, 
  Users, 
  Calendar, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";

interface HeroProps {
  onRegisterClick: () => void;
}

export function Hero({ onRegisterClick }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const announcements = [
    {
      icon: <Calendar className="w-4 h-4 text-accent" />,
      text: "Next Saturday Reading Circle is open for registrations!",
      actionText: "Reserve Spot",
      targetId: "events",
    },
    {
      icon: <Sparkles className="w-4 h-4 text-accent" />,
      text: "Celebrated milestone: 14,000+ reading community members!",
      actionText: "Join Club",
      targetId: "community",
    },
    {
      icon: <BookOpen className="w-4 h-4 text-accent" />,
      text: "Featured Read: 'The Midnight Library' by Matt Haig.",
      actionText: "Read Review",
      targetId: "recommendations",
    },
    {
      icon: <Mic className="w-4 h-4 text-accent" />,
      text: "Listen to Rupa Sri's latest voiceover story reading session.",
      actionText: "Listen Now",
      targetId: "what-i-do",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [announcements.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % announcements.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-center">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-transparent">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-secondary blur-3xl opacity-50" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#E8EBF8] blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary font-medium text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Digital Creator & Book Reviewer
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6 text-primary">
            Books, Stories & <br className="hidden md:block" />
            <span className="text-text-main relative">
              Meaningful
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-accent opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent"/>
              </svg>
            </span>
            <br />
            Conversations
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-lg">
            I help readers discover great books, share thoughtful reviews, and create communities through reading sessions and literary meetups.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto gap-2" onClick={onRegisterClick}>
              Join Next Meetup <ArrowRight size={18} />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => document.getElementById("recommendations")?.scrollIntoView({ behavior: "smooth" })}>
              Explore Reviews
            </Button>
          </div>
        </motion.div>

        {/* Right Side Image & Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative lg:ml-auto"
        >
          <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] rounded-full mx-auto">
            {/* Decorative orbit */}
            <div className="absolute inset-[-20px] border border-gray-200 rounded-full border-dashed animate-[spin_60s_linear_infinite]" />
            
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl relative z-10 bg-secondary">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800" 
                alt="Rupa Sri"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[10%] -left-[10%] md:-left-[20%] glass-card px-4 py-3 rounded-2xl flex items-center gap-3 z-20 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-[#E8EBF8] text-primary flex items-center justify-center">
                <BookMarked size={20} />
              </div>
              <span className="font-medium text-sm md:text-base">Book Reviewer</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[20%] -left-[5%] md:-left-[15%] glass-card px-4 py-3 rounded-2xl flex items-center gap-3 z-20 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-[#FAF0E6] text-accent flex items-center justify-center">
                <Mic size={20} />
              </div>
              <span className="font-medium text-sm md:text-base">Voice Artist</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[25%] -right-[10%] md:-right-[20%] glass-card px-4 py-3 rounded-2xl flex items-center gap-3 z-20 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-[#F3F4F6] text-gray-700 flex items-center justify-center">
                <Sparkles size={20} />
              </div>
              <span className="font-medium text-sm md:text-base">Digital Creator</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }} 
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-[10%] right-[0%] md:-right-[10%] glass-card px-4 py-3 rounded-2xl flex items-center gap-3 z-20 shadow-lg"
            >
              <div className="w-10 h-10 rounded-full bg-[#E6F4EA] text-green-700 flex items-center justify-center">
                <Users size={20} />
              </div>
              <span className="font-medium text-sm md:text-base">Community Host</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Sliding Bulletin Board */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-16 z-20"
      >
        <div className="glass-card p-4 md:p-6 border border-white/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_10px_40px_-15px_rgba(45,51,107,0.06)]">
          {/* Header/Label */}
          <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-primary font-mono">Live Club Updates</span>
            <div className="hidden md:block h-6 w-px bg-gray-200" />
          </div>

          {/* Carousel Slider Panel */}
          <div className="flex-1 relative h-10 md:h-8 flex items-center justify-start overflow-hidden w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3 text-left w-full justify-start"
              >
                <div className="p-2 rounded-full bg-white text-primary shadow-sm shrink-0">
                  {announcements[currentIndex].icon}
                </div>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 justify-start min-w-0">
                  <span className="text-sm text-text-main font-medium truncate max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-xl">
                    {announcements[currentIndex].text}
                  </span>
                  <button
                    onClick={() => {
                      const el = document.getElementById(announcements[currentIndex].targetId);
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }}
                    className="text-xs text-accent font-bold hover:underline whitespace-nowrap inline-flex items-center gap-0.5 group"
                  >
                    {announcements[currentIndex].actionText}
                    <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between md:justify-end gap-4 shrink-0 w-full md:w-auto border-t md:border-t-0 pt-3 md:pt-0 border-gray-100">
            {/* Slide Indicator dots */}
            <div className="flex gap-1.5">
              {announcements.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? "bg-primary w-4" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-1">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-full border border-gray-100 hover:bg-white text-text-main hover:text-primary transition-colors active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-full border border-gray-100 hover:bg-white text-text-main hover:text-primary transition-colors active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
