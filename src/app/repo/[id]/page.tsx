import { fetchRepos } from "@/utils/github";
import { fetchRepoLanguages } from "@/utils/languages";
import Link from "next/link";

export default async function RepoDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const repos = await fetchRepos("himang-dg");
    const repo = repos.find((r) => r.id.toString() === id);

    if (!repo) {
      throw new Error("Repository not found");
    }

    const languages = await fetchRepoLanguages("himang-dg", repo.name);
    const languageEntries = Object.entries(languages);
    const totalBytes = languageEntries.reduce((sum, [, val]) => sum + val, 0);

    return (
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        {/* Background */}
        <div className="bg-mesh" aria-hidden="true">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-5 py-12">
          {/* Back Navigation */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-medium mb-8 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back to Profile
          </Link>

          {/* Main Card */}
          <div className="glass-card-elevated p-8 md:p-10 fade-in-up">
            <h1 className="text-3xl md:text-4xl font-bold text-gradient-vibrant tracking-[-0.03em] mb-3">
              {repo.name}
            </h1>

            {repo.description && (
              <p className="text-[var(--text-secondary)] text-[16px] leading-relaxed mb-8">
                {repo.description}
              </p>
            )}

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              <div className="stat-card">
                <div className="text-xl font-bold text-[var(--text-primary)]">
                  {repo.stargazers_count}
                </div>
                <div className="text-[10px] text-[var(--text-tertiary)] mt-1 uppercase tracking-[0.08em] font-medium">
                  Stars
                </div>
              </div>
              <div className="stat-card">
                <div className="text-xl font-bold text-[var(--text-primary)]">
                  {repo.forks_count}
                </div>
                <div className="text-[10px] text-[var(--text-tertiary)] mt-1 uppercase tracking-[0.08em] font-medium">
                  Forks
                </div>
              </div>
              <div className="stat-card">
                <div className="text-xl font-bold text-[var(--text-primary)]">
                  {(repo.size / 1024).toFixed(1)} MB
                </div>
                <div className="text-[10px] text-[var(--text-tertiary)] mt-1 uppercase tracking-[0.08em] font-medium">
                  Size
                </div>
              </div>
            </div>

            {/* Languages */}
            {languageEntries.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-[0.06em] mb-4">
                  Languages
                </h3>
                {/* Language bar */}
                <div className="flex w-full h-2 rounded-full overflow-hidden mb-3 bg-[rgba(255,255,255,0.04)]">
                  {languageEntries.map(([lang, bytes]) => (
                    <div
                      key={lang}
                      style={{
                        width: `${((bytes / totalBytes) * 100).toFixed(1)}%`,
                        backgroundColor: getLanguageBarColor(lang),
                      }}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {languageEntries.map(([lang, bytes]) => (
                    <div
                      key={lang}
                      className="flex items-center gap-1.5 text-[13px] text-[var(--text-tertiary)]"
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full inline-block"
                        style={{
                          backgroundColor: getLanguageBarColor(lang),
                          boxShadow: `0 0 4px ${getLanguageBarColor(lang)}`,
                        }}
                      />
                      <span>{lang}</span>
                      <span className="text-[var(--text-tertiary)] opacity-60">
                        {((bytes / totalBytes) * 100).toFixed(1)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="divider"></div>

            {/* Action */}
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-accent mt-4 w-full justify-center text-[15px] py-3"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch repo details:", error);
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <div className="bg-mesh" aria-hidden="true">
          <div className="orb orb-1"></div>
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-5 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-medium mb-8 transition-colors"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            Back to Profile
          </Link>
          <div className="glass-card-elevated p-10 text-center">
            <div className="w-14 h-14 rounded-2xl bg-[rgba(255,55,95,0.1)] border border-[rgba(255,55,95,0.15)] flex items-center justify-center mx-auto mb-5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#FF375F"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gradient mb-2">Error</h1>
            <p className="text-[var(--text-secondary)] text-sm">
              Failed to load repository details. Please try again later.
            </p>
            <Link href="/" className="btn-secondary mt-6 inline-flex">
              Return Home
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function getLanguageBarColor(language: string): string {
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
    Swift: "#F05138",
    Kotlin: "#A97BFF",
    Dart: "#00B4AB",
  };
  return colors[language] || "#8b8b8e";
}
