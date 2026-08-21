import { Star, GitFork, BookOpen, Clock, Scale } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description?: string;
  stargazers_count: number;
  forks_count: number;
  language?: string;
  html_url: string;
  created_at: string;
  updated_at: string;
  size: number;
  license?: { name: string };
}

const getLanguageColor = (language: string | undefined) => {
  const colors: Record<string, string> = {
    TypeScript: "#3178C6",
    JavaScript: "#F7DF1E",
    Python: "#3572A5",
    Java: "#B07219",
    "C++": "#F34B7D",
    "C#": "#178600",
    Ruby: "#701516",
    Go: "#00ADD8",
    Rust: "#DEA584",
    PHP: "#4F5D95",
    HTML: "#E34C26",
    CSS: "#563D7C",
    Vue: "#41B883",
    React: "#61DAFB",
    Swift: "#F05138",
    Kotlin: "#A97BFF",
    Dart: "#00B4AB",
  };
  return language && colors[language] ? colors[language] : "#8b8b8e";
};

export default function RepoCard({ repo }: { repo: Repo }) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const langColor = getLanguageColor(repo.language);

  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card glass-card-interactive glow-border repo-card group"
    >
      {/* Header: Icon + Name */}
      <div className="repo-card-header">
        <div className="repo-card-icon group-hover:border-[var(--glass-border-hover)]">
          <BookOpen style={{ width: "16px", height: "16px", color: "var(--text-tertiary)", transition: "color 0.3s" }} className="group-hover:text-[var(--accent-blue)]" />
        </div>
        <h2 className="repo-card-name group-hover:text-[var(--accent-blue)]">
          {repo.name}
        </h2>
      </div>

      {/* Description */}
      <p className="repo-card-desc">
        {repo.description || "No description provided."}
      </p>

      {/* Footer Metadata */}
      <div className="repo-card-meta">
        {repo.language && (
          <div className="repo-card-meta-item">
            <span
              className="lang-dot"
              style={{
                backgroundColor: langColor,
                boxShadow: `0 0 6px ${langColor}`,
              }}
            ></span>
            <span>{repo.language}</span>
          </div>
        )}

        {repo.stargazers_count > 0 && (
          <div className="repo-card-meta-item">
            <Star style={{ width: "14px", height: "14px" }} />
            <span>{repo.stargazers_count}</span>
          </div>
        )}

        {repo.forks_count > 0 && (
          <div className="repo-card-meta-item">
            <GitFork style={{ width: "14px", height: "14px" }} />
            <span>{repo.forks_count}</span>
          </div>
        )}

        <div className="repo-card-meta-item">
          <Clock style={{ width: "14px", height: "14px" }} />
          <span>{formatDate(repo.updated_at)}</span>
        </div>

        {repo.license && (
          <div className="repo-card-meta-item">
            <Scale style={{ width: "14px", height: "14px" }} />
            <span style={{ maxWidth: "80px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{repo.license.name}</span>
          </div>
        )}
      </div>
    </a>
  );
}
