import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";
import confetti from "canvas-confetti";
import { Loader2, Heart } from "lucide-react";

import { useGetWishes, getGetWishesQueryKey, useCreateWish } from "@/lib/api-client";
import { useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

import Navbar from "@/components/layout/Navbar";
import { Particles } from "@/components/sections/Particles";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  message: z.string().min(1, "Message is required"),
});

export default function Wishes() {
  const { data: wishes, isLoading } = useGetWishes({ 
    query: { queryKey: getGetWishesQueryKey() } 
  });
  
  const createWish = useCreateWish();
  const queryClient = useQueryClient();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    createWish.mutate({ data: values }, {
      onSuccess: () => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C8A2C8', '#FFC0CB', '#FFD700', '#ffffff']
        });
        toast({
          title: "Wish sent!",
          description: "Your message has been added to the wall.",
        });
        form.reset();
        queryClient.invalidateQueries({ queryKey: getGetWishesQueryKey() });
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to send wish. Please try again.",
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground pb-32 relative">
      <Navbar />
      <Particles />
      
      <main className="container mx-auto px-4 pt-32 max-w-4xl relative z-10">
        <Link 
          href="/" 
          className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 text-white/70 hover:text-white hover:bg-white/5 mb-12 transition-all"
        >
          <span className="mr-2">←</span> Back to her story
        </Link>

        <div className="mb-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-7xl text-primary mb-6 text-glow-lavender"
          >
            Message Wall
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/70 font-light"
          >
            Leave a little love and a birthday wish for Devadharshini.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glassmorphism p-8 md:p-12 rounded-3xl mb-24 border border-primary/20 shadow-[0_0_50px_rgba(200,162,200,0.05)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-white/80 text-lg font-light">Your Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="How she knows you..." 
                          className="h-14 bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary/50 text-lg rounded-xl" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-secondary" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="md:col-span-2">
                      <FormLabel className="text-white/80 text-lg font-light">Your Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Write a memory, a wish, or just say happy birthday..." 
                          className="min-h-[160px] bg-white/5 border-white/10 text-white placeholder:text-white/20 focus-visible:ring-primary/50 text-lg rounded-xl resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-secondary" />
                    </FormItem>
                  )}
                />
              </div>
              <Button 
                type="submit" 
                disabled={createWish.isPending}
                className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-background font-medium text-lg tracking-wide hover:shadow-[0_0_20px_rgba(200,162,200,0.4)] transition-all"
              >
                {createWish.isPending ? <Loader2 className="mr-2 h-5 w-5 animate-spin" /> : <Heart className="mr-2 h-5 w-5" />}
                Add to the Wall
              </Button>
            </form>
          </Form>
        </motion.div>

        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px bg-white/10 flex-1"></div>
            <h2 className="text-2xl font-display text-secondary tracking-widest px-4">
              Wishes ({wishes?.length || 0})
            </h2>
            <div className="h-px bg-white/10 flex-1"></div>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="h-10 w-10 animate-spin text-primary" />
            </div>
          ) : !wishes || wishes.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 glassmorphism rounded-2xl border border-dashed border-white/20"
            >
              <Heart className="w-12 h-12 mx-auto text-white/20 mb-4" />
              <p className="text-white/50 text-lg font-light">The wall is empty. Be the first to leave a wish! ✦</p>
            </motion.div>
          ) : (
            <div className="grid gap-6">
              <AnimatePresence>
                {wishes.map((wish, index) => (
                  <motion.div
                    key={wish.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glassmorphism p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors relative group"
                  >
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <p className="text-white/90 text-lg leading-relaxed whitespace-pre-wrap mb-6 font-light">{wish.message}</p>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-primary text-base">— {wish.name}</span>
                      <span className="text-white/40 font-mono tracking-wider">{format(new Date(wish.createdAt), "MMM d, yyyy")}</span>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
