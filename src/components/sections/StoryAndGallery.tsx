import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MapPin, Heart, Camera, Coffee, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

import photo01 from "@/assets/photos/photo_01.jpg";
import photo02 from "@/assets/photos/photo_02.jpg";
import photo03 from "@/assets/photos/photo_03.jpg";
import photo04 from "@/assets/photos/photo_04.jpg";
import photo05 from "@/assets/photos/photo_05.jpg";
import photo06 from "@/assets/photos/photo_06.jpg";
import photo07 from "@/assets/photos/photo_07.jpg";
import photo08 from "@/assets/photos/photo_08.jpg";
import photo09 from "@/assets/photos/photo_09.jpg";
import photo10 from "@/assets/photos/photo_10.jpg";
import photo11 from "@/assets/photos/photo_11.jpg";
import photo12 from "@/assets/photos/photo_12.jpg";
import photo13 from "@/assets/photos/photo_13.jpg";
import photo14 from "@/assets/photos/photo_14.jpg";
import photo15 from "@/assets/photos/photo_15.jpg";
import photo16 from "@/assets/photos/photo_16.jpg";
import photo17 from "@/assets/photos/photo_17.jpg";
import photo18 from "@/assets/photos/photo_18.jpg";
import photo19 from "@/assets/photos/photo_19.jpg";
import photo20 from "@/assets/photos/photo_20.jpg";
import photo21 from "@/assets/photos/photo_21.jpg";
import photo22 from "@/assets/photos/photo_22.jpg";
import photo23 from "@/assets/photos/photo_23.jpg";
import photo24 from "@/assets/photos/photo_24.jpg";
import photo25 from "@/assets/photos/photo_25.jpg";
import photo26 from "@/assets/photos/photo_26.jpg";
import photo27 from "@/assets/photos/photo_27.jpg";
import photo28 from "@/assets/photos/photo_28.jpg";
import photo29 from "@/assets/photos/photo_29.jpg";
import photo30 from "@/assets/photos/photo_30.jpg";
import photo31 from "@/assets/photos/photo_31.jpg";

const ALL_PHOTOS = [
  photo01, photo02, photo03, photo04, photo05, photo06,
  photo07, photo08, photo09, photo10, photo11, photo12,
  photo13, photo14, photo15, photo16, photo17, photo18,
  photo19, photo20, photo21, photo22, photo23, photo24,
  photo25, photo26, photo27, photo28, photo29, photo30, photo31,
];

const TIMELINE_DATA = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Best Picture",
    date: "A Day To Remember",
    desc: "Where Our Story Began — A Moment Neither Of Us Will Ever Forget. We Didn't Know It Then, But We Were About To Become Inseparable.",
    photo: photo07,
  },
  {
    icon: <Camera className="w-5 h-5" />,
    title: "First Culturals Together",
    date: "Awkward But Cute",
    desc: "The Very First Cultural Event We Attended Together. Looking Back At It Now Makes Me Smile Because Of How Much We've Grown Since Then.",
    photo: photo08,
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Favorite Memory",
    date: "Endless Laughter",
    desc: "That One Day We Laughed Until We Couldn't Breathe. It's The Simple Moments Like These That I Cherish The Most.",
    photo: photo09,
  },
  {
    icon: <Coffee className="w-5 h-5" />,
    title: "Biggest Adventure",
    date: "Getting Completely Lost",
    desc: "When We Decided To Be Adventurous And Got Completely Lost. Sometimes The Wrong Turns Make The Best Stories.",
    photo: photo10,
  },
];

const POLAROIDS = [
  { src: photo01, title: "Best Day Ever", desc: "Nothing will ever top this day. Pure magic.", rotate: -4 },
  { src: photo02, title: "That Laugh", desc: "We laughed till we cried. I'd relive this forever.", rotate: 3 },
  { src: photo03, title: "Candid Chaos", desc: "Completely unplanned, perfectly us.", rotate: -2 },
  { src: photo04, title: "Late Night Talks", desc: "The conversations that went on forever.", rotate: 5 },
  { src: photo05, title: "Sunshine Days", desc: "Golden light and even better company.", rotate: -3 },
  { src: photo06, title: "Just Us", desc: "My favorite kind of day — no plans, just you.", rotate: 2 },
];

export function TimelineSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="font-display text-5xl md:text-7xl text-primary mb-4 text-glow-lavender">Our Story</h2>
        <p className="text-white/60">The Moments That Built Our Bond.</p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent -translate-x-1/2"></div>

        <div className="space-y-12 md:space-y-24">
          {TIMELINE_DATA.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col md:flex-row items-start md:items-center ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="hidden md:block w-1/2"></div>
              <div className="absolute left-4 md:left-1/2 w-10 h-10 rounded-full bg-[#0a0a0f] border-2 border-primary flex items-center justify-center -translate-x-1/2 text-primary shadow-[0_0_15px_rgba(200,162,200,0.4)] z-10">
                {item.icon}
              </div>
              <div className={`w-full pl-12 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 text-left"}`}>
                <div
                  className="glassmorphism p-6 md:p-8 rounded-2xl cursor-pointer hover:border-primary/50 transition-colors group overflow-hidden"
                  onClick={() => setSelected(i)}
                >
                  <div className="w-full h-40 rounded-xl overflow-hidden mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    <img src={item.photo} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm font-medium text-secondary/80 mb-2 inline-block font-display tracking-widest">{item.date}</span>
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-white/70 line-clamp-2">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="glassmorphism border-primary/20 bg-[#0a0a0f]/90 sm:max-w-md p-0 overflow-hidden">
          {selected !== null && (
            <>
              <div className="w-full h-64 overflow-hidden">
                <img src={TIMELINE_DATA[selected].photo} alt={TIMELINE_DATA[selected].title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 pb-8 text-center">
                <DialogTitle className="font-display text-4xl text-primary mb-2">
                  {TIMELINE_DATA[selected].title}
                </DialogTitle>
                <div className="text-secondary/80 font-display tracking-widest text-sm mb-4">
                  {TIMELINE_DATA[selected].date}
                </div>
                <DialogDescription className="text-white/90 text-lg leading-relaxed">
                  {TIMELINE_DATA[selected].desc}
                </DialogDescription>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

export function PolaroidGallerySection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 overflow-hidden relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h2 className="font-display text-5xl md:text-7xl text-primary mb-4 text-glow-lavender">Moments in Time</h2>
        <p className="text-white/60">A Glimpse Into Our Favorite Memories.</p>
      </motion.div>

      <div className="flex justify-center gap-6 md:gap-10 flex-wrap px-4 md:px-12 py-10">
        {POLAROIDS.map((photo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotate: photo.rotate - 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: photo.rotate }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08, rotate: 0, y: -14, zIndex: 20 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-white p-3 pb-14 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.6)] w-52 md:w-60 cursor-pointer relative shrink-0"
            onClick={() => setSelected(i)}
            style={{ transformOrigin: "top center" }}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-white/40 backdrop-blur-sm shadow-sm rounded-sm"></div>
            <div className="w-full aspect-square overflow-hidden mb-3 rounded-sm">
              <img src={photo.src} alt={photo.title} className="w-full h-full object-cover" />
            </div>
            <p className="text-black/70 font-display text-xl md:text-2xl text-center leading-snug">{photo.title}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white p-4 pb-16 rounded-sm shadow-2xl max-w-sm w-full relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-3 right-3 w-8 h-8 bg-black/10 rounded-full flex items-center justify-center hover:bg-black/20 transition-colors"
                onClick={() => setSelected(null)}
              >
                <X className="w-4 h-4 text-black/60" />
              </button>
              <div className="w-full aspect-square overflow-hidden mb-4 rounded-sm">
                <img src={POLAROIDS[selected].src} alt={POLAROIDS[selected].title} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-3xl text-center text-black/80 mb-2">{POLAROIDS[selected].title}</h3>
              <p className="text-center text-black/50 font-sans text-sm">{POLAROIDS[selected].desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export function PhotoGridSection() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const gridPhotos = ALL_PHOTOS.slice(10);

  return (
    <section className="py-24 px-4 max-w-6xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-display text-5xl md:text-7xl text-accent mb-4 text-glow">Memory Wall</h2>
        <p className="text-white/60">Every Picture Tells Our Story.</p>
      </motion.div>

      <div className="columns-2 sm:columns-3 md:columns-4 gap-3 space-y-3">
        {gridPhotos.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.04 }}
            className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl"
            onClick={() => setLightbox(i)}
          >
            <img
              src={src}
              alt={`Memory ${i + 11}`}
              className="w-full h-auto object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-10 right-0 text-white/60 hover:text-white transition-colors flex items-center gap-2"
                onClick={() => setLightbox(null)}
              >
                <X className="w-5 h-5" /> Close
              </button>
              <img
                src={gridPhotos[lightbox]}
                alt={`Memory ${lightbox + 11}`}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="flex justify-center gap-4 mt-4">
                <button
                  className="px-4 py-2 glassmorphism rounded-full text-white/70 hover:text-white text-sm transition-colors disabled:opacity-30"
                  disabled={lightbox === 0}
                  onClick={() => setLightbox((l) => (l !== null ? l - 1 : null))}
                >← Prev</button>
                <span className="text-white/40 text-sm self-center">{lightbox + 1} / {gridPhotos.length}</span>
                <button
                  className="px-4 py-2 glassmorphism rounded-full text-white/70 hover:text-white text-sm transition-colors disabled:opacity-30"
                  disabled={lightbox === gridPhotos.length - 1}
                  onClick={() => setLightbox((l) => (l !== null ? l + 1 : null))}
                >Next →</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
