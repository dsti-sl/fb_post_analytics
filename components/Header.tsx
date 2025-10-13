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
    author: "Mohamed Turay",
    date: "October 13, 2025",
    stats: {
      likes: "72",
      comments: "4011",
    },
    content: `
      Futures have been destroyed. The hope of a better Sierra Leone is being shattered. Families are crying, and parents are groaning for the future of their children who have fallen victim to kush. The youth are dying, and their potentials are being wasted.
Just imagine a situation where your brother with a brighter future loses himself to the deadly intake of kush. His dreams are no longer alive, family members loses hope, and the community begins to fall apart under the effect of addiction. This is exactly what is happening to my brother Ibrahim. He was once full of ambition, I saw him as an inspiration before, now he is struggling to escape the chains of this dangerous drug that has destroyed so many young lives in Sierra Leone today.
A KUSH FREE FUTURE IN CRAB TONG COMMUNITY, LUMLEY.
PROBLEM ANALYSIS
Youths represent 45% of the population of Crab Tong Community, Lumley. Our community has become one of the hardest communities hit by the kush epidemic in Sierra Leone. Kush has rapidly spread among the youth population in Crab Tong Community, causing devastating social, health & economic economic consequences. This community was once known for effective petty trading, schooling, and fishing, now witnessing unemployment and family break downs due to the intake of kush.
This is due to unemployment, stress, poverty, peer group influence, lack of parental guidance, lack of awareness, etc. And because of kush many youths in Crab Tong Community are suffering from severe mental health disorders, deaths, swollen legs, stigmatization, loss of dignity to name a few. About 50,000 youths have been affected and the community has become a hub for drug trafficking, and social systems of Crab Tong continue to weaken.
SOLUTION
The kush crisis in Crab Town demands urgent, collective action. The following solutions outline practical steps toward recovery, empowerment, and a #KushFreeFuture in Crab Tong Community:
1. REHABILITATION CENTER & KUSH HOTLINE: A sum of $25,000 will be invested in rehabilitation and counseling by establishing a community recovery center for kush addicts with the provision of detox supplies, therapy sessions, and family support programs. And establish a kush hotline alert and rewards for verified tips.
2. YOUTH EMPOWERMENT & SKILLS TRAINING: We will use $30,000 to launch a six months skills training program like carpentry, tailoring, mechanics, digital literacy, etc. ensuring the proviof starter grants for trained youths to scale what they learn. To ensure the effectiveness of this, we will establish a partnership with local mentors and small businesses.
3. COMMUNITY AWARENESS RAISING & SENSITIZATION $20,000: A campaign that will be launched to run anti-drug awareness in community schools, radio, churches, mosques, community centers, etc.
4. ECONOMIC EMPOWERMENT FOR FAMILIES: $15,000 will be used to support the mothers or guardians of affected youth with small business grants to reduce economic pressure that fuels kush intake.
5. COMMUNITY POLICING & SAFE ZONES: $10,000 will be used to trained community watch groups to report dealers safely and partner with local law enforcement & leaders to establish safe spaces.
6. MONITORING, EVALUATION, ADMINISTRATION, AND MISCELLANEOUS EXPENSES $10,000.
With the above solution Dr Moinina David Sengeh, we can absolutely ensure a #KushFreeFuture in Crab Tong Community.
IMPACT
This is in alignment with SDG 3, SDG 4, SDG 8, & SDG 10; Aspiration 1,3,4,6, & 7 of Agenda 2063, the Big Five Game Changers, Strategic Objective 2 of the Sierra Leone National Youth Policy, Pillar 3 of the National Drug Control Master Plan.
The #KushFreeFuture in Crab Tong Community, Lumley will directly impact about 35,000 youths and indirectly benefit over 15,000 people, restoring safety, dignity, and opportunity.
To Viewers:
Do you know someone who has fallen victim to Kush? Share that story with me. This is your opportunity.
______________
JESUS IS KING
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
                            2K+
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            Submissions
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                            14K+
                          </div>
                          <div className="text-xs sm:text-sm text-gray-400">
                            SubComments
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                            4K+
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
                <div className="text-white font-bold text-sm">2K+</div>
                <div className="text-gray-300 text-xs">Submissions</div>
              </div>
              <div>
                <div className="text-white font-bold text-sm">14K+</div>
                <div className="text-gray-300 text-xs">SubComments</div>
              </div>
              <div>
                <div className="text-white font-bold text-sm">4k+</div>
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
