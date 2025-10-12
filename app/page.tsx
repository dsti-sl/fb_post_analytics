import Section from "@/components/Section";
import Cards from "@/components/Cards";
import WinnerSection from "@/components/WinnerSection";
import Charts from "@/components/Charts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ClipboardList,
  Award,
  Calendar,
  Users,
  Trophy,
  Shield,
  FileText,
  Target,
  CheckCircle,
  Star,
} from "lucide-react";
import { ACTIVE_CAMPAIGN } from "@/components/constants";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#1c1f42] to-[#2d1b69] text-white py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
                {ACTIVE_CAMPAIGN}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                Community Engagement Dashboard & Analytics
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-12 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Section
              title="Awards & Recognition"
              description="Learn about our prestigious awards program and selection process"
              bgColor="#f8fafc"
              tabs={[
                {
                  label: "General Overview",
                  icon: <ClipboardList className="w-4 h-4" />,
                  content: (
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Award className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Campaign Overview
                          </h3>
                          <p className="text-gray-600">
                            Our awards program recognizes excellence and
                            innovation across various categories, celebrating
                            outstanding achievements in the industry.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mt-6">
                        <div className="flex items-start gap-3">
                          <Calendar className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              Annual Recognition
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Yearly ceremony celebrating top performers
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              Industry-wide
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Participation from across the sector
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "Selection Process",
                  icon: <Trophy className="w-4 h-4" />,
                  content: (
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            How Winners Are Selected
                          </h3>
                          <p className="text-gray-600">
                            Our rigorous multi-phase selection process ensures
                            fairness, transparency, and excellence in every
                            award category.
                          </p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center gap-2 mb-3">
                            <FileText className="w-5 h-5 text-blue-600" />
                            <h4 className="font-semibold text-gray-900">
                              Phase 1: Nomination
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600">
                            Open nominations from the community and
                            self-nominations
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center gap-2 mb-3">
                            <Target className="w-5 h-5 text-orange-600" />
                            <h4 className="font-semibold text-gray-900">
                              Phase 2: Review
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600">
                            Expert panel evaluation against established criteria
                          </p>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            <h4 className="font-semibold text-gray-900">
                              Phase 3: Final Selection
                            </h4>
                          </div>
                          <p className="text-sm text-gray-600">
                            Committee deliberation and winner confirmation
                          </p>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-4 mt-4">
                        <div className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              Evaluation Criteria
                            </h4>
                            <p className="text-sm text-gray-600">
                              Winners are selected based on innovation, impact,
                              excellence, and contribution to the industry.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
              defaultTab={0}
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Campaign Performance
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Key metrics showing the overall impact and engagement of the
                #KushFreeFuture campaign
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Cards
                label="Total Comments"
                value={10790}
                bgColor="bg-gradient-to-br from-blue-600 to-blue-800"
                change={12.4}
                trend="up"
              />
              <Cards
                label="Total Reactions"
                value={5500}
                bgColor="bg-gradient-to-br from-green-600 to-green-800"
                change={8.2}
                trend="up"
              />
              <Cards
                label="Sub Comments"
                value={1200}
                bgColor="bg-gradient-to-br from-purple-600 to-purple-800"
                change={15.7}
                trend="up"
              />
            </div>

            {/* Additional Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Cards
                label="Engagement Rate"
                value={4.8}
                format="percentage"
                bgColor="bg-gradient-to-br from-orange-500 to-red-600"
                size="sm"
              />
              <Cards
                label="Avg. Replies"
                value={23}
                bgColor="bg-gradient-to-br from-cyan-500 to-blue-600"
                size="sm"
              />
              <Cards
                label="Unique Users"
                value={2450}
                bgColor="bg-gradient-to-br from-pink-500 to-rose-600"
                size="sm"
              />
              <Cards
                label="Campaign Reach"
                value={125000}
                bgColor="bg-gradient-to-br from-indigo-500 to-purple-600"
                size="sm"
              />
            </div>
          </div>
        </section>

        {/* Winner Spotlight - FULL WIDTH */}
        <section className="py-12 bg-white w-full">
          <div className="w-full">
            <div className="text-center mb-10 px-4 sm:px-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Winner Spotlight
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Celebrating the most impactful contributors to the{" "}
                {ACTIVE_CAMPAIGN} campaign
              </p>
            </div>
            <div className="w-full">
              <WinnerSection />
            </div>
          </div>
        </section>

        {/* Analytics & Charts */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Summary Analysis
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                In-depth analysis of engagement patterns, top performers, and
                campaign metrics
              </p>
            </div>
            <Charts />
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
