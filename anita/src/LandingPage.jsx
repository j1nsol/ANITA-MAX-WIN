import * as React from "react";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import BreakImage from "./components/BreakImage";
import { CommunityEventsList } from "./components/EventCard";
import Footer from "./components/Footer";
import GameGrid from "./components/GameGrid";


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
    title: "Community Hackathon",
    date: "2024-11-29",
    location: "Virtual",
    attendees: "120"
  },
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
      <section className="events-section">
        <h2 className="section-title">Join events happening right now</h2>
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