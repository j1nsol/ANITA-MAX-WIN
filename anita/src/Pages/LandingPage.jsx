import * as React from "react";
import TopBar from "../components/LandingPage/TopBar";
import Hero from "../components/LandingPage/Hero";
import BreakImage from "../components/LandingPage/BreakImage";
import { CommunityEventsList } from "../components/LandingPage/EventCard";
import Footer from "../components/LandingPage/Footer";
import GameGrid from "../components/LandingPage/GameGrid";
import RewardsSection from "../components/LandingPage/RewardsSection";


const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/fa2a34f2c7dc6fbd5fabdc81ca0edce706598ac6eef2be2a7de3386be842f21a?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&",
    title: "Casino",
    description: "Dive into our mini-games—play for fun, win for the community",
    image: "https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/55946b4279ea6f6acf2c59e37ff3ae46acd2efcbd8dd8ef3928211851ea01821?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
  },
];

const events = [
  {
    title: "Skill Share Workshop",
    date: "2024-11-30",
    location: "Virtual",
    attendees: "50"
  }
  // Additional events...
];

export default function LandingPage() {
  return (
    <main className="landing-page">
      <TopBar />
      <Hero />
      <section className="features-section" style={{ overflow: "hidden", margin: "0 0 0 0"}}>
        {features.map((feature, index) => (
          <BreakImage key={index} {...feature} />
        ))}
      </section>
      <section>
        <GameGrid />
      </section>
      <section>
        <RewardsSection/>
      </section>
      <section className="events-section" style={{backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2Fc24ae5bfb01d41eab83aea3f5ce6f5d6%2Fe0421bcdc49848e9a0460ddd17b0d3f1)",
        backgroundRepeat: "no-repeat", backgroundPosition: "center",backgroundSize: "cover", width: "100%"
      }}>
      <h2 
  className="section-title" 
  style={{
    color: "#FDFEFF", 
    textAlign: "center", 
    fontFamily: "Alexandria", 
    fontSize: "64px", 
    fontStyle: "normal", 
    fontWeight: "700", 
    lineHeight: "normal",
    margin: "0 0 0 0"
  }}
>
  Join events happening right now
</h2>
        <div className="events-grid">
          {events.map((event, index) => (
            <CommunityEventsList key={index} {...event} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}