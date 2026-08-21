"use client";

import { FaGithub, FaTwitter, FaLink, FaMapMarkerAlt, FaBuilding, FaRegEnvelope } from "react-icons/fa";
import Image from "next/image";

interface GithubProfile {
  avatar_url?: string;
  name?: string;
  login?: string;
  bio?: string;
  location?: string;
  company?: string;
  html_url: string;
  blog?: string;
  twitter_username?: string;
  public_repos: number;
  followers: number;
  following: number;
  email?: string;
}

export default function GithubProfile({ profile }: { profile?: GithubProfile }) {
  if (!profile) return null;

  return (
    <div className="glass-card profile-card">
      
      {/* Avatar with glow ring */}
      <div style={{ marginBottom: "20px", marginTop: "4px" }}>
        {profile.avatar_url ? (
          <Image
            src={profile.avatar_url}
            alt={profile.name || "User Avatar"}
            width={120}
            height={120}
            className="profile-avatar avatar-glow cursor-pointer"
          />
        ) : (
          <div className="profile-avatar" style={{ 
            backgroundColor: "rgba(255,255,255,0.03)", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: "var(--text-tertiary)",
            fontSize: "13px",
            border: "1px solid var(--glass-border)"
          }}>
            No Image
          </div>
        )}
      </div>

      {/* Name */}
      <h2 className="profile-name text-gradient-vibrant">
        {profile.name || profile.login}
      </h2>

      {/* Username badge */}
      <a
        href={profile.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-pill"
        style={{ fontSize: "12px", padding: "6px 14px", marginBottom: "16px", textDecoration: "none" }}
      >
        <FaGithub style={{ width: "14px", height: "14px", color: "var(--text-secondary)" }} />
        <span>@{profile.login}</span>
      </a>

      {/* Bio */}
      {profile.bio && (
        <p className="profile-bio">
          {profile.bio}
        </p>
      )}

      {/* Social Links */}
      <div className="profile-social">
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-icon-circle"
          title="GitHub"
        >
          <FaGithub style={{ width: "18px", height: "18px" }} />
        </a>
        {profile.twitter_username && (
          <a
            href={`https://twitter.com/${profile.twitter_username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon-circle"
            title="Twitter"
          >
            <FaTwitter style={{ width: "18px", height: "18px", color: "#1DA1F2" }} />
          </a>
        )}
        {profile.blog && (
          <a
            href={profile.blog.startsWith("http") ? profile.blog : `https://${profile.blog}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-icon-circle"
            title="Website"
          >
            <FaLink style={{ width: "18px", height: "18px" }} />
          </a>
        )}
        {profile.email && (
          <a
            href={`mailto:${profile.email}`}
            className="btn-icon-circle"
            title="Email"
          >
            <FaRegEnvelope style={{ width: "18px", height: "18px" }} />
          </a>
        )}
      </div>

      {/* Gradient Divider */}
      <div className="divider" style={{ margin: "4px 0" }}></div>

      {/* Location & Company */}
      <div className="profile-details">
        {profile.location && (
          <div className="profile-detail-row">
            <FaMapMarkerAlt className="profile-detail-icon" />
            <span>{profile.location}</span>
          </div>
        )}
        {profile.company && (
          <div className="profile-detail-row">
            <FaBuilding className="profile-detail-icon" />
            <span>{profile.company}</span>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="profile-stats">
        <div className="stat-card">
          <div className="stat-value">{profile.public_repos}</div>
          <div className="stat-label">Repos</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{profile.followers}</div>
          <div className="stat-label">Followers</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{profile.following}</div>
          <div className="stat-label">Following</div>
        </div>
      </div>

    </div>
  );
}
