import { Repo } from "@/types";

export async function fetchRepos(username: string): Promise<Repo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=created`);

  if (!res.ok) {
    throw new Error(`Gagal mengambil repositori: ${res.status}`);
  }

  const data: Repo[] = await res.json();

  return data.map((repo) => ({
    id: repo.id,
    name: repo.name,
    html_url: repo.html_url,
    description: repo.description ?? "No description",
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count,
    created_at: repo.created_at,
    updated_at: repo.updated_at,
    size: repo.size,
    language: repo.language ?? "unknown", // Inisialisasi dengan nilai default
  }));
}
