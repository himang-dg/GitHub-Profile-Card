"use client";

import { useEffect, useState } from "react";
import RepoCard from "./RepoCard";
import { fetchRepos } from "@/utils/github";
import { Search, SlidersHorizontal, FolderGit2 } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  created_at: string;
  updated_at: string;
  size: number;
}

export default function RepoList() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState<string>("latest");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadRepos() {
      try {
        setIsLoading(true);
        const data: Repo[] = await fetchRepos("himang-dg");
        const repos: Repo[] = data.map((repo) => ({
          id: repo.id,
          name: repo.name,
          html_url: repo.html_url,
          description: repo.description,
          stargazers_count: repo.stargazers_count,
          language: repo.language,
          forks_count: repo.forks_count,
          created_at: repo.created_at,
          updated_at: repo.updated_at,
          size: repo.size,
        }));
        setRepos(repos);
      } catch (error) {
        console.error("Failed to load repos:", error);
      } finally {
        setIsLoading(false);
      }
    }
    loadRepos();
  }, []);

  const searchedRepos = repos.filter(
    (repo) =>
      repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (repo.description &&
        repo.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (repo.language &&
        repo.language.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const sortedRepos = [...searchedRepos].sort((a, b) => {
    if (filter === "latest")
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    if (filter === "updated")
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    if (filter === "popular") return b.stargazers_count - a.stargazers_count;
    if (filter === "forks") return b.forks_count - a.forks_count;
    if (filter === "size") return b.size - a.size;
    return 0;
  });

  const visibleRepos = showAll ? sortedRepos : sortedRepos.slice(0, 6);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      {/* Header Area */}
      <div className="repo-header">
        <div className="repo-title-section">
          <h2 className="repo-title text-gradient">
            <div className="repo-title-icon">
              <FolderGit2 style={{ width: "16px", height: "16px", color: "var(--text-tertiary)" }} />
            </div>
            Repositories
          </h2>
          <p className="repo-subtitle">
            {repos.length} public projects available
          </p>
        </div>

        {/* Controls */}
        <div className="repo-controls">
          {/* Search */}
          <div className="repo-search">
            <Search className="repo-search-icon" />
            <input
              type="text"
              placeholder="Search repositories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-glass repo-search input"
              style={{ paddingLeft: "36px" }}
            />
          </div>

          {/* Sort Dropdown */}
          <div className="repo-sort">
            <SlidersHorizontal className="repo-sort-icon" />
            <select
              className="select-glass"
              style={{ paddingLeft: "36px" }}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="latest">Newly Created</option>
              <option value="updated">Recently Updated</option>
              <option value="popular">Most Stars</option>
              <option value="forks">Most Forks</option>
              <option value="size">Largest Size</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid Content */}
      {isLoading ? (
        <div className="repo-skeleton-grid">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="skeleton" style={{ height: "160px" }}></div>
          ))}
        </div>
      ) : sortedRepos.length === 0 ? (
        <div className="repo-empty">
          <div className="repo-title-icon" style={{ width: "48px", height: "48px", borderRadius: "14px", marginBottom: "16px" }}>
            <FolderGit2 style={{ width: "24px", height: "24px", color: "var(--text-tertiary)" }} />
          </div>
          <h3 style={{ fontSize: "16px", fontWeight: 600, color: "var(--text-secondary)" }}>
            No repositories found
          </h3>
          <p style={{ color: "var(--text-tertiary)", fontSize: "14px", marginTop: "6px", maxWidth: "280px" }}>
            Try adjusting your search query or changing the filter.
          </p>
        </div>
      ) : (
        <>
          <div className="repo-grid">
            {visibleRepos.map((repo, index) => (
              <div
                key={repo.id}
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <RepoCard repo={repo} />
              </div>
            ))}
          </div>

          {sortedRepos.length > 6 && (
            <div className="repo-show-more">
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn-secondary btn-shimmer"
                style={{ padding: "12px 32px", fontSize: "14px" }}
              >
                {showAll
                  ? "Show Less"
                  : `View All ${sortedRepos.length} Repositories`}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
