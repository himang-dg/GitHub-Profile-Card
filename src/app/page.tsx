"use client";

import { useEffect, useState } from "react";
import GithubProfile from "@/components/GithubProfile";
import RepoList from "@/components/RepoList";
import { FaCode, FaGithub } from "react-icons/fa";

export default function Home() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/himang-dg")
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, []);

  return (
    <>
      {/* Animated Background Mesh */}
      <div className="bg-mesh" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="page-container">
        
        {/* Header */}
        <header className="page-header fade-in-up">
          <div className="glass-pill pulse-glow">
            <FaCode className="w-5 h-5 text-[var(--accent-blue)]" />
            <span className="text-[var(--text-secondary)] text-sm font-medium">Developer Portfolio</span>
          </div>
          <h1 className="page-title text-gradient-vibrant">
            GitHub Profile
          </h1>
          <p className="page-subtitle">
            Explore open source projects and contributions by{" "}
            <span className="text-[var(--accent-blue)]">himang-dg</span>
          </p>
        </header>

        {/* Main Content Layout */}
        <div className="content-layout">
          
          {/* Profile Sidebar */}
          <aside className="sidebar">
            <div className="sidebar-sticky">
              {profile ? (
                <div className="fade-in-up" style={{ animationDelay: "0.1s" }}>
                  <GithubProfile profile={profile} />
                </div>
              ) : (
                <div className="glass-card skeleton-profile">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full skeleton"></div>
                  <div className="w-40 h-6 skeleton mt-5"></div>
                  <div className="w-24 h-4 skeleton mt-3"></div>
                  <div className="w-full h-14 skeleton mt-6"></div>
                  <div className="w-full h-20 skeleton mt-4"></div>
                </div>
              )}
            </div>
          </aside>
          
          {/* Repository List */}
          <main className="main-content">
            <div className="glass-card-elevated main-card fade-in-up" style={{ animationDelay: "0.2s" }}>
              <RepoList />
            </div>
          </main>
          
        </div>

        {/* Footer */}
        <footer className="page-footer fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="divider" style={{ maxWidth: "200px" }}></div>
          <div className="footer-text">
            <FaGithub className="w-3.5 h-3.5" />
            <span>Powered by GitHub API</span>
          </div>
        </footer>
      </div>
    </>
  );
}
