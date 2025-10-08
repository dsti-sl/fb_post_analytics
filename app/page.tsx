import Section from "../components/section";
import Cards from "../components/cards";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      {/* Main content */}
      <div className="flex-1 max-w-6xl mx-auto px-4 py-10">

        {/* Title */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1c1f42] mb-2">
            Kush Free Future
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Engagement Dashboard
          </p>
        </header>

        {/* Overview */}
        <Section
          title="Overview"
          description="The Chief Minister launched a community challenge to create a #KushFreeFuture. Submissions were collected and analyzed based on engagement, impact, and replies."
          bgColor="#ffffff"
        />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <Cards label="Total Comments" value={10790} bgColor="#1c1f42" textColor="white" />
          <Cards label="Total Reactions" value={5500} bgColor="#2a2b50" textColor="white" />
          <Cards label="Sub Comments" value={1200} bgColor="#38395f" textColor="white" />
        </div>

        {/* Charts */}
        <Section
          title="Comments per Day"
          description="Trend of daily comments"
          imageSrc="/images/reactions_old.png"
          explanation="Shows the daily comment activity for all posts in the community challenge."
          bgColor="#ffffff"
        />

        {/* Top Authors */}
        <Section
          title="Top 5 Most Engaging Authors"
          description="Based on engagement rate and interactions"
          explanation="This image shows the top 5 authors with the highest engagement, including replies and reactions."
          bgColor="#ffffff"
          imageSrc="/images/reactions_old.png"
        />

        {/* Analytics Sections */}
        {[
          { title: "Reaction Count per Author", src: "/images/reactions_old.png", explanation: "Shows the number of reactions each author received." },
          { title: "Replies Count per Author", src: "/images/reactions_old.png", explanation: "Shows the number of replies each author received." },
          { title: "Score per Author", src: "/images/reactions_old.png", explanation: "Overall score based on engagement metrics for each author." },
          { title: "Impact Score", src: "/images/reactions_old.png", explanation: "Impact of the posts in terms of community engagement." },
          { title: "Reaction Analytics", src: "/images/reactions_old.png", explanation: "Breakdown of reactions over time." },
          { title: "Replies Analytics", src: "/images/reactions_old.png", explanation: "Breakdown of replies over time." },
          { title: "Engagement Score Analytics", src: "/images/reactions_old.png", explanation: "Shows the engagement score trends across posts." },
          { title: "Impact Score Analytics", src: "/images/reactions_old.png", explanation: "Highlights posts with highest impact." },
          { title: "Final Score Analytics", src: "/images/reactions_old.png", explanation: "Final scores combining reactions, replies, and impact." },
          { title: "Sentiment Analysis", src: "/images/reactions_old.png", explanation: "Analyzes sentiment of replies and comments." },
          { title: "Common Themes and Keywords", src: "/images/reactions_old.png", explanation: "Shows recurring topics and keywords across submissions." },
        ].map((item) => (
          <Section
            key={item.title}
            title={item.title}
            imageSrc={item.src}
            explanation={item.explanation}
            bgColor="#ffffff"
          />
        ))}

      </div>

      {/* Footer */}
      <footer className="text-center text-sm text-black-500 py-4 bg-gray-200">
        <p>Powered by DSTI © 2025 | dsti.gov.sl</p>
      </footer>

    </div>
  );
}
