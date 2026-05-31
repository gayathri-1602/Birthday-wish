import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";

export function CakeSection() {
  const [lit, setLit] = useState(false);
  const [wished, setWished] = useState(false);

  const handleMakeWish = () => {
    setLit(false);
    setWished(true);
    
    // Epic confetti burst
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#C8A2C8', '#FFC0CB', '#FFD700', '#ffffff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#C8A2C8', '#FFC0CB', '#FFD700', '#ffffff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <section className="py-24 px-4 max-w-xl mx-auto text-center relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="font-display text-5xl md:text-7xl text-accent mb-4 text-glow">Make a Wish</h2>
        <p className="text-white/60">May every dream you have come true.</p>
      </motion.div>

      {/* CSS Cake */}
      <div className="h-64 flex items-end justify-center mb-16 relative">
        <div className="relative">
          {/* Candles */}
          <div className="absolute -top-12 left-0 right-0 flex justify-evenly px-2 z-10">
            {Array.from({length: 19}).map((_, i) => (
              <div key={i} className="relative w-1.5 md:w-2 h-12 bg-gradient-to-b from-white to-[#f5e6e8] rounded-t-sm mx-0.5">
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-gray-400"></div>
                {lit && !wished && (
                  <div className="absolute -top-4 -left-1 md:-left-0.5 w-3 h-4 bg-accent rounded-full animate-pulse blur-[1px] flame"></div>
                )}
                {wished && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-3 bg-gray-500/20 rounded-full blur-[2px] animate-fade-out"></div>
                )}
              </div>
            ))}
          </div>

          {/* Top Layer */}
          <div className="w-48 md:w-64 h-20 bg-secondary rounded-xl relative border-b-4 border-black/10 shadow-lg z-20">
            {/* Frosting drips */}
            <div className="absolute top-0 left-0 right-0 flex justify-around">
               <div className="w-4 h-6 bg-white rounded-b-full"></div>
               <div className="w-4 h-8 bg-white rounded-b-full"></div>
               <div className="w-5 h-5 bg-white rounded-b-full"></div>
               <div className="w-4 h-9 bg-white rounded-b-full"></div>
               <div className="w-4 h-5 bg-white rounded-b-full"></div>
               <div className="w-6 h-7 bg-white rounded-b-full"></div>
               <div className="w-4 h-5 bg-white rounded-b-full"></div>
            </div>
            {/* Decorative dots */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-evenly">
              {Array.from({length: 8}).map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-white/40"></div>
              ))}
            </div>
          </div>
          
          {/* Bottom Layer */}
          <div className="w-56 md:w-72 h-24 bg-[#e6b1b8] rounded-xl -ml-4 md:-ml-4 relative border-b-8 border-black/20 shadow-2xl z-10 -mt-2">
            {/* Frosting line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#d499a0]"></div>
            {/* Decorative dots */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-evenly">
              {Array.from({length: 12}).map((_, i) => (
                <div key={i} className="w-3 h-3 rounded-full bg-white/30"></div>
              ))}
            </div>
          </div>
          
          {/* Plate */}
          <div className="w-72 md:w-96 h-4 bg-white/20 rounded-full blur-[2px] -ml-12 md:-ml-16 mt-2 absolute bottom-[-10px] z-0"></div>
        </div>
      </div>

      <div className="h-16 flex items-center justify-center">
        {!lit && !wished ? (
          <Button 
            onClick={() => setLit(true)} 
            className="bg-accent text-background hover:bg-accent/80 text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:scale-105 transition-all"
          >
            Light Candles
          </Button>
        ) : lit ? (
          <Button 
            onClick={handleMakeWish} 
            className="bg-primary text-background hover:bg-primary/80 text-lg px-8 py-6 rounded-full shadow-[0_0_20px_rgba(200,162,200,0.3)] hover:scale-105 transition-all"
          >
            Make a Wish & Blow
          </Button>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-2xl text-accent font-display text-glow"
          >
            Wishes sent to the universe. ✨
          </motion.div>
        )}
      </div>
    </section>
  );
}

export function FinaleSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10 bg-gradient-to-t from-black via-transparent to-transparent pt-32">
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none"></div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="text-2xl md:text-4xl text-white/90 max-w-3xl leading-relaxed mb-12 font-light"
      >
        Thank you for being one of the most beautiful parts of my life.
      </motion.p>
      
      <motion.p
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ delay: 2, duration: 2 }}
        className="text-5xl md:text-8xl lg:text-9xl font-display text-primary text-glow-lavender"
      >
        Happy 19th Birthday,<br/>Devadharshini.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 5, duration: 1 }}
        className="mt-32 space-y-8"
      >
        <p className="text-white/40 italic">The story continues...</p>
        <Link 
          href="/wishes" 
          className="px-10 py-4 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all border border-white/20 inline-block backdrop-blur-md hover:border-primary/50 hover:shadow-[0_0_30px_rgba(200,162,200,0.2)] text-lg"
        >
          See Friends' Wishes ✦
        </Link>
      </motion.div>
    </section>
  );
}
