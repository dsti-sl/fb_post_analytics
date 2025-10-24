"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  MessageCircle,
  Heart,
  Award,
  TrendingUp,
  User2Icon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const winnerSlides = [
  {
    image: "/profiles/christopher_samai.jpg",
    name: "Chrisopher Samai",
    title: "Winner",
    stats: {
      engagement: "0.40",
      comments: "4,665",
      reactions: "480",
      impact: "0.39"
    },
    achievements: ["0.79 - Final Score"],
    overlayColor: "rgba(32, 34, 61, 0.85)",
    isWinner: true,
  },
  {
    image: "/profiles/samuel_saio.jpg",
    name: "Samuel Saio",
    title: "First Runner Up",
    stats: {
      engagement: "0.36",
      comments: "4,715",
      reactions: "316",
      impact: "0.34"
    },
    achievements: ["0.70 - Final Score"],
    overlayColor: "rgba(139, 92, 246, 0.85)",
    isWinner: false,
  },
  {
    image: "/profiles/alieu_auwal.jpg",
    name: "Alieu Auwal",
    title: "Second Runner Up",
    stats: {
      engagement: "0.32",
      comments: "4,916",
      reactions: "316",
      impact: "0.36"
    },
    achievements: ["0.68 - Final Score"],
    overlayColor: "rgba(59, 130, 246, 0.85)",
    isWinner: false,
  },

];

export default function WinnerSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

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

  const winnerTagVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: -45,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.5,
      },
    },
  };

  return (
    <div className="overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-gray-900 to-gray-800">
      <section
        className="relative min-h-[70vh] sm:min-h-[80vh] lg:h-[700px] w-full overflow-hidden"
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
              {winnerSlides[currentSlide].isWinner && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  className="absolute top-6 right-6 z-20"
                ></motion.div>
              )}

              <Image
                src={winnerSlides[currentSlide].image}
                alt={`Winner - ${winnerSlides[currentSlide].name}`}
                fill
                className="object-cover"
                priority={currentSlide === 0}
                quality={95}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center p-10 sm:p-12 lg:p-16">
              {/* Left Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentSlide}`}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-white space-y-4 sm:space-y-6"
                >
                  {/* Winner Title */}
                  <div className="space-y-3 sm:space-y-4">
                    {winnerSlides[currentSlide].isWinner && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 px-3 py-1 rounded-full text-xs sm:text-sm font-bold mb-2 shadow-lg"
                      >
                        <Trophy className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                        Winner
                      </motion.div>
                    )}
                    <motion.h3
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight"
                    >
                      {winnerSlides[currentSlide].name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="text-lg sm:text-xl text-gray-200"
                    >
                      {winnerSlides[currentSlide].title}
                    </motion.p>
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
                          className="inline-flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs sm:text-sm border border-white/20"
                        >
                          <Award className="w-3 h-3 text-yellow-400" />
                          {achievement}
                        </span>
                      )
                    )}
                  </motion.div>

                  {/* Winner Stats */}
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4 pt-2 sm:pt-4 pb-6 sm:pb-10">
                    {[
                      {
                        icon: TrendingUp,
                        label: "Engagement",
                        value: winnerSlides[currentSlide].stats.engagement,
                      },
                      {
                        icon: User2Icon,
                        label: "Impact",
                        value: winnerSlides[currentSlide].stats.impact,
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
                    ].map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        custom={index}
                        variants={statItemVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl border border-white/10"
                      >
                        <div className="p-2 bg-white/10 rounded-lg flex-shrink-0">
                          <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs sm:text-sm text-gray-300 truncate">
                            {stat.label}
                          </p>
                          <p className="text-base sm:text-lg font-bold text-white truncate">
                            {stat.value}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Right Side - Image Preview (Hidden on mobile) */}
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
                  {/* Winner badge on preview image */}
                  {winnerSlides[currentSlide].isWinner && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1, type: "spring" }}
                      className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1"
                    >
                      <Trophy className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                      Winner
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>

            {/* Navigation dots */}
            <div className="absolute bottom-4 sm:bottom-8 left-0 right-0 flex justify-center gap-2 sm:gap-3">
              {winnerSlides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-1 rounded-full transition-all duration-300 ${index === currentSlide
                    ? "bg-yellow-400 shadow-lg"
                    : "bg-white/50 hover:bg-white/70"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <motion.div
                    className={`w-2 h-2 rounded-full ${index === currentSlide ? "bg-amber-600" : "bg-transparent"
                      }`}
                    layoutId="activeDot"
                  />
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Navigation Arrows (Always visible on touch devices) */}
        <div className="lg:hidden absolute inset-0 pointer-events-none">
          <div className="relative w-full h-full">
            <button
              onClick={goToPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 backdrop-blur-md border border-white/20 shadow-2xl transition-all pointer-events-auto active:scale-95"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full z-10 backdrop-blur-md border border-white/20 shadow-2xl transition-all pointer-events-auto active:scale-95"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Desktop Navigation Arrows (Hover only) */}
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
                className="hidden lg:block absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 lg:p-4 rounded-full z-10 backdrop-blur-md border border-white/20 shadow-2xl transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} className="lg:w-7 lg:h-7" />
              </motion.button>
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                whileTap={{ scale: 0.9 }}
                onClick={goToNext}
                className="hidden lg:block absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 lg:p-4 rounded-full z-10 backdrop-blur-md border border-white/20 shadow-2xl transition-all"
                aria-label="Next slide"
              >
                <ChevronRight size={24} className="lg:w-7 lg:h-7" />
              </motion.button>
            </>
          )}
        </AnimatePresence>

        {/* Progress Bar */}
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
