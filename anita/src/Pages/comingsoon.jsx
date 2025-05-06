import React from "react";
import { ComingSoonStyle } from "../styles/comingsoon";
import Sidebar from "../components/Sidebar/Sidebar";
import { UserTopBar } from "../components/Topbar/UserTopBar";

export default function ComingSoon() {
  return (
    <>
    <UserTopBar />
    <Sidebar />
      <section className="coming-soon-section">
        <div className="content-wrapper">
          <h1 className="title">
            COMING<br />SOON
          </h1>
          <p className="subtitle">We’re almost there.</p>
        </div>
      </section>
      <style jsx>{ComingSoonStyle}</style>
    </>
  );
}
