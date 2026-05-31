import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function HeroSection() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 3500); // After first text
    const t2 = setTimeout(() => setPhase(2), 7000); // Reveal name
    const t3 = setTimeout(() => setPhase(3), 9000); // Reveal rest
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative pt-16 z-10">
      <div className="space-y-8 h-[400px] flex flex-col items-center justify-center">
        
        {phase >= 0 && phase < 2 && (
          <div className="h-16 flex items-center justify-center">
            {phase === 0 && (
              <p className="text-lg md:text-2xl text-white/70 italic typing-effect inline-block">
                Every year has a story...
              </p>
            )}
            {phase === 1 && (
              <p className="text-lg md:text-2xl text-white/90 typing-effect inline-block">
                But this story is about someone truly special.
              </p>
            )}
          </div>
        )}

        {phase >= 2 && (
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="font-display text-6xl md:text-8xl lg:text-9xl text-accent text-glow"
          >
            Devadharshini
          </motion.h1>
        )}

        {phase >= 3 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="space-y-2"
            >
              <p className="text-xl md:text-3xl text-secondary">
                Happy 19th Birthday my babygurlll
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center justify-center gap-3 text-3xl md:text-4xl"
              >
                {["💕", "❤️", "🥰", "💖", "😊", "✨", "💗", "🎀"].map((emoji, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                    className="inline-block"
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-8"
            >
              <a 
                href="#countdown" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('countdown')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-3 rounded-full bg-white/5 border border-accent/30 text-accent hover:bg-accent/10 transition-all duration-500 shadow-[0_0_15px_rgba(255,215,0,0.1)] hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] backdrop-blur-sm"
              >
                Begin The Journey ✦
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [hasArrived, setHasArrived] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2026-06-10T00:00:00');
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        setHasArrived(true);
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="countdown" className="py-24 px-4 max-w-5xl mx-auto w-full text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="space-y-16"
      >
        <h2 className="font-display text-5xl md:text-7xl text-primary text-glow-lavender">The Countdown</h2>
        
        {hasArrived ? (
          <div className="glassmorphism p-10 rounded-3xl golden-border inline-block shadow-2xl">
            <h3 className="text-4xl md:text-5xl text-accent font-display tracking-wider">The day has arrived! ✦</h3>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds }
            ].map((item, i) => (
              <motion.div 
                key={item.label} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glassmorphism rounded-3xl p-6 md:p-8 relative group overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_20px_rgba(200,162,200,0.2)] hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-5xl md:text-7xl font-light text-white mb-3 tabular-nums">{item.value.toString().padStart(2, '0')}</div>
                <div className="text-xs md:text-sm text-secondary tracking-[0.2em] font-medium capitalize">{item.label}</div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

export function WelcomeSection() {
  return (
    <section className="py-24 px-4 max-w-3xl mx-auto w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="glassmorphism rounded-[2rem] p-10 md:p-16 border border-white/10 relative shadow-2xl overflow-hidden group hover:border-white/20 transition-colors duration-500"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:bg-primary/20 transition-colors duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] group-hover:bg-secondary/20 transition-colors duration-1000"></div>
        
        <div className="absolute -top-6 -left-2 md:-left-6 text-8xl text-accent/20 font-display select-none">"</div>
        <div className="absolute -bottom-16 -right-2 md:-right-6 text-8xl text-accent/20 font-display select-none">"</div>
        
        <p className="text-lg md:text-2xl leading-relaxed md:leading-loose text-white/90 font-light relative z-10">
          Deva — 19 years ago, the world got a little more magical. You've been a constant light in my life, the kind of person who turns ordinary days into memories worth keeping. This little corner of the internet is just for you — a small thank-you for existing.
        </p>

        <div className="mt-8 text-right font-display text-3xl text-primary/80 relative z-10">
          With Love ✧
        </div>
      </motion.div>
    </section>
  );
}
