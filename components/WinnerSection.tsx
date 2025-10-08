"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  MessageCircle,
  Heart,
  Zap,
  Award,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const winnerSlides = [
  {
    image: "/images/1.jpeg",
    name: "Iyeba Alpha Kallon",
    title: "Content Creator of the Month",
    stats: {
      engagement: "98%",
      comments: "2,450",
      reactions: "1,800+",
      reach: "125K",
    },
    achievements: ["Top Performer", "Viral Content", "Community Favorite"],
    overlayColor: "rgba(32, 34, 61, 0.85)",
  },
  {
    image: "/images/2.jpeg",
    name: "Sarah Johnson",
    title: "Most Engaging Posts",
    stats: {
      engagement: "95%",
      comments: "3,200",
      reactions: "2,100+",
      reach: "98K",
    },
    achievements: ["Engagement Master", "Consistent Performer"],
    overlayColor: "rgba(59, 130, 246, 0.85)",
  },
  {
    image: "/images/3.jpeg",
    name: "Mike Chen",
    title: "Rising Star Award",
    stats: {
      engagement: "92%",
      comments: "1,800",
      reactions: "1,500+",
      reach: "75K",
    },
    achievements: ["Fastest Growth", "Innovative Content"],
    overlayColor: "rgba(139, 92, 246, 0.85)",
  },
  {
    image: "/images/4.jpeg",
    name: "Emma Rodriguez",
    title: "Community Builder",
    stats: {
      engagement: "96%",
      comments: "2,800",
      reactions: "2,300+",
      reach: "110K",
    },
    achievements: ["Best Interactions", "Community Leader"],
    overlayColor: "rgba(236, 72, 153, 0.85)",
  },
];

export default function WinnerSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate slides when not hovering
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovering && !isAnimating) {
        goToNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering, isAnimating]);

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % winnerSlides.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setCurrentSlide(
      (prev) => (prev - 1 + winnerSlides.length) % winnerSlides.length
    );
  };

  const slideVariants: Variants = {
    hidden: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? "100%" : "-100%",
      scale: 1.05,
      filter: "brightness(0.7) blur(2px)",
      transition: {
        duration: 0,
      },
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      filter: "brightness(1) blur(0px)",
      transition: {
        duration: 1.2,
        ease: [0.83, 0, 0.17, 1],
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      x: direction > 0 ? "-100%" : "100%",
      scale: 1.05,
      filter: "brightness(0.7) blur(2px)",
      transition: {
        duration: 1.2,
        ease: [0.83, 0, 0.17, 1],
        onComplete: () => setIsAnimating(false),
      },
    }),
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: {
        duration: 0.6,
        ease: [0.55, 0.085, 0.68, 0.53],
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.6 + i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="mb-16 overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800">
      <section
        className="relative min-h-[80vh] h-96 sm:h-[550px] lg:h-[600px] w-full overflow-hidden"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="absolute inset-0">
          <AnimatePresence custom={direction} initial={false}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={winnerSlides[currentSlide].image}
                alt={`Winner - ${winnerSlides[currentSlide].name}`}
                fill
                className="object-cover"
                priority={currentSlide === 0}
                quality={95}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              />
              <div
                className="absolute inset-0"
                style={{
                  backgroundColor: winnerSlides[currentSlide].overlayColor,
                  backgroundImage: `
                    linear-gradient(135deg, 
                      rgba(32, 34, 61, 0.9) 0%, 
                      rgba(32, 34, 61, 0.6) 50%, 
                      rgba(32, 34, 61, 0.3) 100%
                    )
                  `,
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="relative z-10 h-full w-full flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentSlide}`}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-white space-y-6"
                >
                  {/* Winner Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-black px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider shadow-2xl mb-4"
                  >
                    <Trophy className="w-5 h-5" />
                    <span>Grand Prize Winner</span>
                  </motion.div>

                  {/* Winner Title */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div>
                        <h2 className="text-2xl sm:text-5xl font-black uppercase tracking-tight mb-2 bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                          Winner Spotlight
                        </h2>
                        <p className="text-xl text-gray-300 font-light">
                          {winnerSlides[currentSlide].title}
                        </p>
                      </div>
                    </div>

                    <motion.h3
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="text-3xl sm:text-4xl font-bold text-white"
                    >
                      {winnerSlides[currentSlide].name}
                    </motion.h3>
                  </div>

                  {/* Achievements */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    className="flex flex-wrap gap-2"
                  >
                    {winnerSlides[currentSlide].achievements.map(
                      (achievement, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm border border-white/20"
                        >
                          <Award className="w-3 h-3 text-yellow-400" />
                          {achievement}
                        </span>
                      )
                    )}
                  </motion.div>

                  {/* Winner Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 pb-10">
                    {[
                      {
                        icon: TrendingUp,
                        label: "Engagement",
                        value: winnerSlides[currentSlide].stats.engagement,
                      },
                      {
                        icon: MessageCircle,
                        label: "Comments",
                        value: winnerSlides[currentSlide].stats.comments,
                      },
                      {
                        icon: Heart,
                        label: "Reactions",
                        value: winnerSlides[currentSlide].stats.reactions,
                      },
                      {
                        icon: Zap,
                        label: "Reach",
                        value: winnerSlides[currentSlide].stats.reach,
                      },
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        custom={index}
                        variants={statItemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center gap-4 p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                      >
                        <div className="p-2 bg-white/10 rounded-lg">
                          <stat.icon className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-300">{stat.label}</p>
                          <p className="text-lg font-bold text-white">
                            {stat.value}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Right Side - Image Preview */}
              <div className="hidden lg:flex justify-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={winnerSlides[currentSlide].image}
                    alt={`Preview - ${winnerSlides[currentSlide].name}`}
                    fill
                    className="object-cover"
                    quality={90}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </motion.div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3">
              {winnerSlides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-1 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-yellow-400 shadow-lg"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <motion.div
                    className={`w-2 h-2 rounded-full ${
                      index === currentSlide ? "bg-amber-600" : "bg-transparent"
                    }`}
                    layoutId="activeDot"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isHovering && (
            <>
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                whileTap={{ scale: 0.9 }}
                onClick={goToPrev}
                className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full z-10 backdrop-blur-md border border-white/20 shadow-2xl transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft size={28} />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                whileTap={{ scale: 0.9 }}
                onClick={goToNext}
                className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-4 rounded-full z-10 backdrop-blur-md border border-white/20 shadow-2xl transition-all"
                aria-label="Next slide"
              >
                <ChevronRight size={28} />
              </motion.button>
            </>
          )}
        </AnimatePresence>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <motion.div
            key={currentSlide}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            className="h-full bg-gradient-to-r from-yellow-400 to-amber-500"
          />
        </div>
      </section>
    </div>
  );
}
