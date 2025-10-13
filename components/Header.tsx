"use client";
import { useState } from "react";
import { X, Trophy, Star, Heart, MessageCircle, Share2 } from "lucide-react";
import { LOCAL_TERMS, PLATFORM_CONFIG, SOCIAL_LINKS } from "./constants";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const winningSubmission = {
    title: "#KushFreeFuture - A Community's Journey to Wellness",
    author: "Sarah Johnson",
    date: "December 15, 2023",
    stats: {
      likes: "12.5K",
      comments: "2.4K",
      shares: "1.8K",
      reach: "125K",
    },
    content: `
      Our community came together in an incredible display of unity and determination to address the challenges we face. The #KushFreeFuture campaign wasn't just about raising awareness—it was about creating lasting change through education, support, and community empowerment.

      What made this submission stand out was its comprehensive approach:
      
      • **Educational Workshops**: We organized 15 community workshops reaching over 2,000 youth
      • **Peer Support Networks**: Established mentorship programs connecting experienced professionals with at-risk youth
      • **Creative Expression**: Used art, music, and storytelling to spread our message
      • **Digital Campaign**: Leveraged social media to reach a global audience
      
      The impact has been measurable and meaningful. We've seen a 40% increase in youth engagement with community centers and a 25% rise in participation in positive extracurricular activities. Most importantly, we've created a support system that continues to grow and help our community thrive.
      
      This winning submission demonstrates that real change happens when we work together, listen to each other, and believe in the power of community.
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
              backgroundImage: 'url("/images/header.jpg")',
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
                            50K+
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            Participants
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                            1K +
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            Submissions
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                            95%
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            Success
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
                <div className="text-white font-bold text-sm">50K+</div>
                <div className="text-gray-300 text-xs">Participants</div>
              </div>
              <div>
                <div className="text-white font-bold text-sm">1K+</div>
                <div className="text-gray-300 text-xs">Submissions</div>
              </div>
              <div>
                <div className="text-white font-bold text-sm">95%</div>
                <div className="text-gray-300 text-xs">Success</div>
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
                      Grand Prize Winner - #KushFreeFuture Campaign
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
                    <Star className="w-4 h-4 text-yellow-500" />
                    By {winningSubmission.author}
                  </span>
                  <span>•</span>
                  <span>{winningSubmission.date}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-gray-900 font-bold">
                    <Heart className="w-4 h-4 text-red-500" />
                    {winningSubmission.stats.likes}
                  </div>
                  <div className="text-xs text-gray-600">Likes</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-gray-900 font-bold">
                    <MessageCircle className="w-4 h-4 text-blue-500" />
                    {winningSubmission.stats.comments}
                  </div>
                  <div className="text-xs text-gray-600">Comments</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-gray-900 font-bold">
                    <Share2 className="w-4 h-4 text-green-500" />
                    {winningSubmission.stats.shares}
                  </div>
                  <div className="text-xs text-gray-600">Shares</div>
                </div>
                <div className="text-center">
                  <div className="text-gray-900 font-bold">
                    {winningSubmission.stats.reach}
                  </div>
                  <div className="text-xs text-gray-600">Reach</div>
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
