export async function fetchRepoLanguages(username: string, repoName: string): Promise<Record<string, number>> {
    const res = await fetch(`https://api.github.com/repos/${username}/${repoName}/languages`);
  
    if (!res.ok) {
      throw new Error(`Gagal mengambil data bahasa untuk ${repoName}: ${res.status}`);
    }
  
    const languages = await res.json();
    return languages;
  }
  