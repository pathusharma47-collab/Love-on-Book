import { BookOpen } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-transparent pt-24 pb-12 relative border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-accent transition-colors">
                <BookOpen size={20} />
              </div>
              <span className="font-serif text-2xl font-medium tracking-tight text-primary">Rupa Sri</span>
            </a>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              Helping readers discover great books, share thoughtful reviews, and create meaningful communities.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-text-main mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-500 hover:text-accent transition-colors">About Me</a></li>
              <li><a href="#what-i-do" className="text-gray-500 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#events" className="text-gray-500 hover:text-accent transition-colors">Events</a></li>
              <li><a href="#recommendations" className="text-gray-500 hover:text-accent transition-colors">Book Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold text-text-main mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="text-gray-500 hover:text-accent transition-colors">YouTube</a></li>
              <li><a href="#" className="text-gray-500 hover:text-accent transition-colors">Facebook</a></li>
              <li><a href="#" className="text-gray-500 hover:text-accent transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Rupa Sri. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
