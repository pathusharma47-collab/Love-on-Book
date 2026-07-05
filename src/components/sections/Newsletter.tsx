import { motion } from "motion/react";
import { Button } from "../ui/Button";

export function Newsletter() {
  return (
    <section className="py-24 bg-transparent border-b border-white/20 relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-medium text-primary mb-4">Join the Reading Journey</h2>
          <p className="text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            Get weekly book recommendations, community updates, and insights delivered straight to your inbox.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="flex-1 h-14 px-6 rounded-full border border-gray-200 bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-shadow text-text-main"
              required
            />
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-[1.5] h-14 px-6 rounded-full border border-gray-200 bg-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-shadow text-text-main"
              required
            />
            <Button size="lg" className="w-full sm:w-auto px-10">Subscribe</Button>
          </form>
          <p className="text-sm text-gray-400 mt-4">No spam. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
