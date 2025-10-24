"use client";
import { useState } from "react";
import { X, Trophy, Star, Heart, MessageCircle, Share2 } from "lucide-react";
import { ACTIVE_CAMPAIGN, LOCAL_TERMS, PLATFORM_CONFIG, SOCIAL_LINKS } from "./constants";
import { getAssetPath } from "@/lib/utils";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const winningSubmission = {
    title: `${ACTIVE_CAMPAIGN} - How I Would Address Indiscipline in Life and on Social Media`,
    author: "Christopher Samai",
    date: "October 24, 2025",
    stats: {
      likes: "480",
      comments: "4,665",
    },
    content: `
Indiscipline is something we’ve all seen, sometimes even in ourselves ,whether it’s losing control of our words online, breaking promises to ourselves, or simply neglecting the small acts of respect that hold a society together. It may sound like a harsh word, but at its heart, indiscipline is just the gap between what we know is right and what we actually do.
In today’s world ,especially in the digital age, that gap has grown wider. The anonymity of social media and the pace of modern life make it easier than ever to react without thinking, to judge without understanding, or to live without a clear sense of self-control. So how do we address it?
Here are some truth.
1. Start with Self-Discipline.
It’s hard to correct others if you haven’t first learned to guide yourself. Self-discipline isn’t about being strict or robotic, it’s about choosing long-term peace over short-term pleasure.
It begins with small things:
1.Waking up when you say you will.
2. Speaking with kindness even when irritated.
3.Putting the phone down when it’s time to rest or study.
When you hold yourself accountable, you set a quiet example. People notice even on social media.
2. Practice Emotional Intelligence Online
Social media has become a mirror of our society and sometimes, it’s not a flattering one. Indiscipline shows up in the form of insults, impulsive posts, or fake news shared without a second thought.
To change this, we must learn to pause before we post. Ask yourself:
Would I say this to someone’s face?
Does this add kindness, truth, or value?
Am I reacting, or responding?
Building digital discipline doesn’t mean silence, it means wisdom.
3. Be a Role Model, Not a Judge.
You don’t have to be an influencer to influence. Whether at school, work, or online, people watch how you carry yourself. When you stay calm during chaos, admit mistakes, or show respect in disagreement, you make discipline look admirable, not boring.
Instead of calling others out publicly, reach out privately. Instead of mocking, mentor. Change doesn’t happen through shame, it happens through empathy and consistency.
4.Create Boundaries.
Discipline thrives in clarity.
Set boundaries for how you spend your time, who you listen to, and what kind of energy you allow into your space.
1.Limit screen time.
2.Unfollow negativity.
3.Dedicate quiet moments each day to reflect or pray.
Boundaries aren’t walls, they’re filters that keep your values intact in a noisy world.
5. Encourage Accountability in Your Circle.
If you want to see less indiscipline in society, start with your circle. Surround yourself with people who challenge you to grow, not those who celebrate chaos. Hold honest conversations about behavior, respect, and the impact of our words.
Online, this can mean reporting harmful content, promoting positive discussions, and refusing to engage in digital drama. In life, it means having friends who remind you who you are when you forget.
Addressing indiscipline isn’t about punishment, it’s about nurturing growth. We live in a world that rewards quick reactions, but true strength lies in calm control.
Whether it’s in life or online, let’s choose discipline not because someone is watching, but because we are watching ourselves.
That’s how we grow,not just as individuals, but as a more respectful, balanced, and humane community.
MEDICAL SUPREMO
David Moinina Sengeh - PhD
    `,
    tags: [
      "Community Engagement",
      "Youth Empowerment",
      "Education",
      "Mental Health",
      "Social Impact",
    ],
  };

  return (
    <>
      <header className="relative w-full overflow-hidden">
        {/* Background with Zoom Effect */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-zoom"
            style={{
              backgroundImage: `url("${getAssetPath("/images/header.jpg")}")`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 lg:from-black/80 lg:via-black/50 lg:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        </div>

        {/* Add CSS for the zoom animation */}
        <style jsx>{`
          @keyframes zoom {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
          .animate-zoom {
            animation: zoom 20s ease-in-out infinite;
          }
        `}</style>

        {/* Content */}
        <div className="relative z-10 min-h-[70vh] sm:min-h-[80vh] flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left Content - Text */}
                <div className="text-white space-y-6 sm:space-y-8">
                  <div className="space-y-4 sm:space-y-6">
                    {/* Subtitle */}
                    <p className="text-lg sm:text-xl font-light text-blue-400 tracking-wider">
                      Welcome to
                    </p>

                    {/* Main Title */}
                    <div className="space-y-2 sm:space-y-3">
                      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        {PLATFORM_CONFIG.NAME.split(" ")[0]}
                        <span className="block bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                          {PLATFORM_CONFIG.NAME.split(" ").slice(1).join(" ")}{" "}
                        </span>
                      </h1>
                    </div>

                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                      Embark on a journey to transform {LOCAL_TERMS.KRIO.SALONE}
                      . Join thousands of community champions, agricultural
                      innovators, and youth leaders in building a better future
                      for our nation.
                    </p>
                  </div>

                  {/* Mobile CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4 lg:hidden">
                    <button
                      onClick={() =>
                        window.open(SOCIAL_LINKS.FACEBOOK.URL, "_blank")
                      }
                      className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-2xl text-base sm:text-lg"
                    >
                      Participate
                    </button>
                    <button
                      onClick={openModal}
                      className="border-2 border-white/30 hover:border-white/60 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm text-base sm:text-lg"
                    >
                      View Winning Submission
                    </button>
                  </div>
                </div>

                {/* Right Content - CTA Card (Desktop) */}
                <div className="hidden lg:flex justify-end">
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 max-w-md w-full transform hover:scale-105 transition-all duration-500 shadow-2xl">
                    <div className="text-center space-y-6">
                      {/* Icon */}
                      <div className="flex justify-center">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                          <svg
                            className="w-7 h-7 sm:w-8 sm:h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          Ready to Make an Impact?
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          Join our community of change-makers and start your
                          transformational journey today.
                        </p>
                      </div>

                      {/* CTA Buttons */}
                      <div className="space-y-3 sm:space-y-4 pt-4 pb-4">
                        <button
                          onClick={() =>
                            window.open(SOCIAL_LINKS.FACEBOOK.URL, "_blank")
                          }
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                        >
                          Participate
                        </button>
                        <button
                          onClick={openModal}
                          className="w-full border-2 border-white/30 hover:border-white/60 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm text-sm sm:text-base flex items-center justify-center gap-2"
                        >
                          <Trophy className="w-4 h-4" />
                          View Winning Submission
                        </button>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-white/20">
                        <div className="text-center">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                            1K+
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            Submissions
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                            16K+
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            SubComments
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                            7K+
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            Reactions
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Desktop Only */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden lg:block">
          <div className="animate-bounce">
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-2"></div>
            </div>
          </div>
        </div>

        {/* Mobile Stats Bar - Bottom of Header */}
        <div className="lg:hidden p-5 bottom-0 left-0 right-0 bg-black/40 backdrop-blur-sm border-t border-white/20">
          <div className="px-4 py-3">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-white font-bold text-sm">1K+</div>
                <div className="text-gray-300 text-xs">Submissions</div>
              </div>
              <div>
                <div className="text-white font-bold text-sm">16K+</div>
                <div className="text-gray-300 text-xs">SubComments</div>
              </div>
              <div>
                <div className="text-white font-bold text-sm">7K+</div>
                <div className="text-gray-300 text-xs">Reactions</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Winning Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-6 text-white">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <Trophy className="w-8 h-8 text-yellow-300" />
                  <div>
                    <h2 className="text-2xl font-bold">Winning Submission</h2>
                    <p className="text-blue-100">
                      Grand Prize Winner -  {ACTIVE_CAMPAIGN} Campaign
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              {/* Submission Header */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {winningSubmission.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    By {winningSubmission.author}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-gray-900 font-bold">
                    <Heart className="w-4 h-4 text-red-500" />
                    {winningSubmission.stats.likes}
                  </div>
                  <div className="text-xs text-gray-600">Reactions</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-gray-900 font-bold">
                    <MessageCircle className="w-4 h-4 text-blue-500" />
                    {winningSubmission.stats.comments}
                  </div>
                  <div className="text-xs text-gray-600">Comments</div>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                  {winningSubmission.content
                    .split("\n")
                    .map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Key Focus Areas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {winningSubmission.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="flex justify-end gap-3">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() =>
                    window.open(SOCIAL_LINKS.FACEBOOK.URL, "_blank")
                  }
                  className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-lg hover:from-blue-700 hover:to-purple-800 transition-all transform hover:scale-105"
                >
                  Get Inspired & Participate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
