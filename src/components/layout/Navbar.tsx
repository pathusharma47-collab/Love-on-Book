import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, BookOpen } from "lucide-react";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "What I Do", href: "#what-i-do" },
    { name: "Events", href: "#events" },
    { name: "Community", href: "#community" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "glass-card py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-accent transition-colors">
              <BookOpen size={20} />
            </div>
            <span className="font-serif text-xl font-medium tracking-tight">Rupa Sri</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-main hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" size="sm" onClick={() => document.getElementById("collaborate")?.scrollIntoView({ behavior: "smooth" })}>
              Work With Me
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-text-main"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-white shadow-2xl z-50 flex flex-col p-6 md:hidden"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-serif text-xl font-medium">Menu</span>
                <button
                  className="p-2 text-text-main bg-secondary rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <X size={20} />
                </button>
              </div>
              
              <nav className="flex flex-col gap-6 flex-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium text-text-main"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-gray-100">
                <Button variant="primary" className="w-full" onClick={() => { setIsMobileMenuOpen(false); document.getElementById("collaborate")?.scrollIntoView({ behavior: "smooth" }) }}>
                  Work With Me
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
