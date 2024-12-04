import * as React from "react";
import { RewardsStyles } from "../../styles/RewardsStyles";

export default function RewardsSection() {
  return (
    <>
      <RewardsStyles />
      <section className="rewards-container" aria-label="Rewards Section">
        <div className="rewards-content">
          <div className="rewards-image-column">
            <img
              loading="lazy"
              src="https://i.ibb.co/PZCtqW9/giftcard.png"
              className="rewards-hero-image"
              alt="Rewards program illustration"
            />
          </div>
          <div className="rewards-info-column">
            <div className="rewards-info-wrapper">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/c24ae5bfb01d41eab83aea3f5ce6f5d6/d39439d8ebcadb8199cd31c8c07e758b1be388a678560a3377d2456388a5c852?apiKey=c24ae5bfb01d41eab83aea3f5ce6f5d6&"
                className="rewards-background"
                alt=""
              />
              <h1 className="rewards-heading">
                Exchange your tokens for exciting rewards
              </h1>
              <button 
                className="rewards-cta"
                onClick={() => {}}
                tabIndex={0}
                aria-label="Explore rewards shop"
              >
                Explore Shop
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}