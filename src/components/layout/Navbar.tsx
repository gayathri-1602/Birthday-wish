import { Link } from "wouter";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glassmorphism border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl text-primary text-glow-lavender hover:scale-105 transition-transform">
          ✦ Deva's 19th
        </Link>
        <Link 
          href="/wishes" 
          className="text-sm font-medium text-white/90 hover:text-accent transition-colors px-4 py-2 rounded-full border border-white/20 hover:border-accent/50 bg-white/5 hover:bg-white/10"
        >
          Leave a Wish ✦
        </Link>
      </div>
    </header>
  );
}
