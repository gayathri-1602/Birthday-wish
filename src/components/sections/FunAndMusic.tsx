import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Award, Mail, Music, PlayCircle, Pause } from "lucide-react";

export function AwardsSection() {
  const awards = [
    { title: "Queen of Overthinking", desc: "For managing to create 14 different scenarios from a single text message." },
    { title: "Best Smile Award", desc: "For lighting up every single room you walk into." },
    { title: "Most Chaotic Energy", desc: "For keeping life interesting, 24/7." },
    { title: "Funniest Laugh", desc: "For a laugh that makes everyone else start laughing too." },
    { title: "Greatest Advice Giver", desc: "For always knowing exactly what to say when I need it most." },
    { title: "Master of Dramatic Entrances", desc: "For never arriving anywhere quietly." },
  ];

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto w-full relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="font-display text-5xl md:text-7xl text-accent mb-4 text-glow">The Awards Ceremony</h2>
        <p className="text-white/60">Recognizing Your Finest Achievements.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {awards.map((award, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            className="group perspective-1000 h-64 cursor-pointer"
          >
            <div className="relative w-full h-full transition-all duration-700 transform-style-3d group-hover:rotate-y-180">
              
              {/* Front */}
              <div className="absolute inset-0 backface-hidden glassmorphism golden-border rounded-3xl flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white/5 to-[#FFD700]/5">
                <Award className="w-16 h-16 text-accent mb-6" strokeWidth={1.5} />
                <div className="text-6xl text-accent/30 font-display">?</div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 backface-hidden glassmorphism golden-border rounded-3xl rotate-y-180 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-tl from-[#FFD700]/10 to-transparent">
                <h3 className="font-display text-3xl md:text-4xl text-accent mb-4 leading-tight">{award.title}</h3>
                <p className="text-sm text-white/80">{award.desc}</p>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function LettersSection() {
  const [opened, setOpened] = useState<number | null>(null);

  const letters = [
    { label: "You're Sad", body: "Whenever you feel down, remember that storms don't last forever. You are so incredibly loved, and it's okay to have bad days. I'm always here for you, no matter what." },
    { label: "You Need Motivation", body: "Look how far you've come! You've survived 100% of your bad days. You are capable of amazing things, and I believe in you more than words can say. Go get 'em!" },
    { label: "You Feel Lost", body: "It's completely normal not to have everything figured out at 19. Take a deep breath. You don't need a map right now, just the courage to take the next step." },
    { label: "You Need A Smile", body: "Just a reminder that your smile is my favorite thing in the world. Also, remember that time you tripped over your own feet? Yeah, I'm laughing just thinking about it." },
  ];

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="font-display text-5xl md:text-7xl text-primary mb-4 text-glow-lavender">Open When...</h2>
        <p className="text-white/60">A Few Words For When You Need Them Most.</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {letters.map((letter, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setOpened(i)}
            className="relative h-48 cursor-pointer group"
          >
            {/* Envelope Back */}
            <div className="absolute inset-0 bg-[#e6d0d4] rounded-xl shadow-lg border border-[#d4babb]"></div>
            
            {/* Paper sticking out a bit */}
            <div className="absolute left-4 right-4 top-2 bottom-12 bg-[#fffcf5] rounded-t border border-[#eae0d5] group-hover:-translate-y-6 transition-transform duration-500">
               <div className="px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <p className="font-display text-xl text-[#8b6b6e] truncate">Dear Deva...</p>
               </div>
            </div>

            {/* Envelope Front Flaps */}
            <div className="absolute inset-0 bg-[#f2e1e4] rounded-xl border border-[#d4babb] clip-envelope-front pointer-events-none"></div>

            {/* Content / Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
               <Mail className="w-8 h-8 text-[#8b6b6e] mb-3 opacity-50" />
               <p className="text-xl md:text-2xl font-display text-[#8b6b6e]">Open When {letter.label}</p>
            </div>
            
            {/* Wax Seal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-red-800 rounded-full flex items-center justify-center shadow-inner z-20 group-hover:scale-90 transition-transform">
               <span className="font-display text-white/80 text-xl">D</span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {opened !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setOpened(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="bg-[#fffcf5] p-8 md:p-12 rounded shadow-2xl max-w-2xl w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button className="absolute top-4 right-6 text-2xl text-black/30 hover:text-black/60" onClick={() => setOpened(null)}>×</button>
              <h3 className="font-display text-4xl text-[#8b6b6e] mb-8">Dear Deva,</h3>
              <p className="font-sans font-light text-lg md:text-xl text-[#5c4749] leading-loose italic">
                {letters[opened].body}
              </p>
              <div className="mt-12 text-right font-display text-3xl text-[#8b6b6e]">
                Love,<br/>Your Best Friend
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <style dangerouslySetInnerHTML={{__html: `
        .clip-envelope-front {
          clip-path: polygon(0 0, 50% 50%, 100% 0, 100% 100%, 0 100%);
        }
      `}} />
    </section>
  );
}

export function PlaylistSection() {
  const [playing, setPlaying] = useState<number | null>(null);

  const songs = [
    {
      title: "Nee Kavithaigala",
      artist: "Pradeep Kumar — Maragatha Naanayam",
      memory: "Every Word Of This Song Feels Like It Was Written For You.",
      gradient: "from-[#C8A2C8] to-[#E0BFB8]",
      ytQuery: "Nee Kavithaigala Maragatha Naanayam Pradeep Kumar"
    },
    {
      title: "Maya Nadhi",
      artist: "Pradeep Kumar — Kabali",
      memory: "That River Of Memories That Never Stops Flowing.",
      gradient: "from-[#FFC0CB] to-[#C8A2C8]",
      ytQuery: "Maya Nadhi Kabali Pradeep Kumar"
    },
    {
      title: "Aagayam Theepiditha",
      artist: "Pradeep Kumar — Madras Boomiyil",
      memory: "The Sky Lit Up — Just Like You Light Up Every Room.",
      gradient: "from-[#FFD700]/60 to-[#E0BFB8]",
      ytQuery: "Aagayam Theepiditha Madras Boomiyil Pradeep Kumar"
    },
    {
      title: "Un Kanne",
      artist: "Pradeep Kumar",
      memory: "Your Eyes Tell A Thousand Stories Without Saying A Word.",
      gradient: "from-[#E0BFB8] to-[#FFC0CB]",
      ytQuery: "Un Kanne Pradeep Kumar Tamil"
    },
    {
      title: "Thoondil Meen",
      artist: "Pradeep Kumar",
      memory: "Soft And Dreamy — Exactly How Your Laughter Sounds.",
      gradient: "from-[#C8A2C8]/80 to-[#FFD700]/40",
      ytQuery: "Thoondil Meen Pradeep Kumar Tamil"
    },
    {
      title: "Aasai Oru Pulveli",
      artist: "Pradeep Kumar",
      memory: "Dreams As Wide As A Field — And You're In Every One Of Mine.",
      gradient: "from-[#FFC0CB] to-[#FFD700]/50",
      ytQuery: "Aasai Oru Pulveli Pradeep Kumar Tamil"
    },
    {
      title: "Ellamey Nee",
      artist: "Pradeep Kumar",
      memory: "Everything Is You — My Favorite Song Line Ever.",
      gradient: "from-[#E0BFB8] via-[#C8A2C8] to-[#FFC0CB]",
      ytQuery: "Ellamey Nee Pradeep Kumar Tamil"
    },
    {
      title: "Kannamma",
      artist: "Pradeep Kumar — Kaala",
      memory: "Timeless, Beautiful, And Unforgettable — Just Like You.",
      gradient: "from-[#FFD700]/50 via-[#E0BFB8] to-[#C8A2C8]",
      ytQuery: "Kannamma Kaala Pradeep Kumar"
    },
  ];

  const handlePlay = (i: number) => {
    const song = songs[i];
    const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(song.ytQuery)}`;
    window.open(ytUrl, "_blank", "noopener,noreferrer");
    setPlaying(i);
    setTimeout(() => setPlaying(null), 3000);
  };

  return (
    <section className="py-24 px-4 max-w-4xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-5xl md:text-7xl text-primary mb-4 text-glow-lavender">Soundtrack of Us</h2>
        <p className="text-white/60">Pradeep Kumar Songs That Feel Like Home. Click To Play 🎵</p>
      </motion.div>

      <div className="space-y-4">
        {songs.map((song, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glassmorphism p-4 md:p-6 rounded-2xl flex items-center gap-4 md:gap-6 hover:scale-[1.02] transition-all cursor-pointer border ${playing === i ? 'border-primary shadow-[0_0_25px_rgba(200,162,200,0.35)]' : 'border-white/10 hover:border-primary/30'}`}
            onClick={() => handlePlay(i)}
          >
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${song.gradient} shrink-0 flex items-center justify-center relative overflow-hidden group`}>
               {playing === i ? (
                 <div className="flex gap-[3px] items-end justify-center h-full w-full bg-black/30 backdrop-blur-sm pb-2">
                   {[4, 7, 5, 9, 6].map((h, j) => (
                     <motion.div
                       key={j}
                       className="w-1 bg-white rounded-full"
                       animate={{ height: [`${h * 2}px`, `${h * 4}px`, `${h * 2}px`] }}
                       transition={{ duration: 0.6 + j * 0.1, repeat: Infinity, ease: "easeInOut" }}
                     />
                   ))}
                 </div>
               ) : (
                 <Music className="w-6 h-6 text-white/60 group-hover:scale-110 transition-transform" />
               )}
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-lg text-white font-medium truncate">{song.title}</p>
              <p className="text-sm text-white/50 truncate mb-1">{song.artist}</p>
              <p className="text-xs text-secondary/80 italic truncate">"{song.memory}"</p>
            </div>

            <div className="flex flex-col items-center gap-1 shrink-0">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${playing === i ? 'bg-primary/30 text-primary' : 'bg-white/5 hover:bg-white/15 text-primary'}`}>
                {playing === i ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                    <Music className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <PlayCircle className="w-5 h-5" />
                )}
              </div>
              {playing === i && (
                <motion.span
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[10px] text-primary/80 whitespace-nowrap"
                >
                  Opening...
                </motion.span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-white/30 text-xs mt-6"
      >
        ✦ Clicking a song opens it on YouTube ✦
      </motion.p>
    </section>
  );
}
