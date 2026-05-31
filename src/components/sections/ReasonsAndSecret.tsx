import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Unlock } from "lucide-react";

export function ReasonsSection() {
  const [unlocked, setUnlocked] = useState<number[]>([]);

  const reasons = [
    "Your laugh is completely contagious",
    "You make everyone around you feel seen",
    "Your inner strength is incredibly inspiring",
    "You give the absolute best advice",
    "Your kindness knows no limits",
    "You always remember the little details",
    "Your chaotic energy makes life fun",
    "You are fiercely loyal to your friends",
    "Your taste in music is elite",
    "You have the warmest heart",
    "You light up every single room",
    "You're not afraid to be yourself",
    "You support my crazy dreams",
    "You're a brilliant listener",
    "You never judge without understanding",
    "You have an amazing sense of style",
    "You bring out the best in me",
    "You text back fast (usually)",
    "You're simply Devadharshini. Enough said."
  ];

  const handleUnlock = (index: number) => {
    if (!unlocked.includes(index)) {
      setUnlocked([...unlocked, index]);
    }
  };

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="font-display text-5xl md:text-7xl text-accent mb-4 text-glow">19 Reasons You're Amazing</h2>
        <p className="text-white/60">One For Every Year Of Your Beautiful Life.</p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {reasons.map((reason, i) => {
          const isUnlocked = unlocked.includes(i);
          return (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 5) * 0.1 }}
              className="perspective-1000 aspect-square"
              onClick={() => handleUnlock(i)}
            >
              <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${isUnlocked ? 'rotate-y-180' : 'hover:scale-105'}`}>
                
                {/* Locked Front */}
                <div className="absolute inset-0 backface-hidden glassmorphism golden-border rounded-2xl flex flex-col items-center justify-center p-4 bg-black/40">
                  <Lock className="text-secondary w-8 h-8 mb-3 opacity-80" />
                  <p className="text-sm text-white/60 font-medium tracking-wide">Reason #{i + 1}</p>
                </div>

                {/* Unlocked Back */}
                <div className="absolute inset-0 backface-hidden glassmorphism border border-primary/40 rounded-2xl rotate-y-180 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-primary/10 to-secondary/10">
                  {isUnlocked && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0] }}
                      transition={{ duration: 1 }}
                      className="absolute inset-0 pointer-events-none flex items-center justify-center text-4xl"
                    >
                      ✨
                    </motion.div>
                  )}
                  <Unlock className="text-primary w-4 h-4 mb-2 opacity-50" />
                  <p className="text-sm md:text-base text-white/90 font-medium leading-tight">{reason}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function SecretMessageSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-32 px-4 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <button 
          onClick={() => setOpen(true)}
          className="px-8 py-5 rounded-full glassmorphism text-primary font-display text-2xl md:text-3xl hover:text-white border-primary/50 hover:bg-primary/20 transition-all shadow-[0_0_30px_rgba(200,162,200,0.2)] hover:shadow-[0_0_50px_rgba(200,162,200,0.4)]"
        >
          Click only if you want to know how much you mean to me
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="max-w-3xl w-full p-8 md:p-16 relative z-10"
            >
              <button 
                className="absolute top-0 right-4 text-white/40 hover:text-white/80 text-2xl p-4 transition-colors"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
              
              <div className="space-y-6 text-lg md:text-2xl font-light text-white/90 leading-relaxed text-left">
                <p className="typing-effect delay-[1000ms]" style={{ animationDuration: '4s' }}>
                  Devadharshini,
                </p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4, duration: 2 }}>
                  There are rare moments in life when you meet someone and instantly know your life is going to be better because of them.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 7, duration: 2 }}>
                  Thank you for the endless patience, the chaotic adventures, and the unconditional love.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 10, duration: 2 }}>
                  You deserve the entire universe. Happy 19th Birthday.
                </motion.p>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 13, duration: 2 }} className="font-display text-4xl text-primary mt-12 block">
                  Forever Yours.
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
