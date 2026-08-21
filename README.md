<a id="top"></a>

# GitHub Profile Viewer — Next.js

A **GitHub Profile Viewer** built with **Next.js 16** (App Router), **Tailwind CSS v4**, and **TypeScript**. Featuring a premium **iOS Glassmorphism Dark Mode** UI with animated backgrounds, glass cards, glow effects, and fully responsive layout.



---

<div align="center">
<h3>💸 Support Me 💰</h3>
<table>
  <tr>
    <td align="center">
      <a href="https://paypal.me/DogGhozt" target="_blank">
        <img src="https://raw.githubusercontent.com/maurodesouza/profile-readme-generator/master/src/assets/icons/social/paypal/default.svg" width="52" height="40" alt="PayPal" />
      </a>
    </td>
    <td align="center">
      <a href="https://trakteer.id/himang/tip" target="_blank">
        <img src="https://img.icons8.com/?size=100&id=13013&format=png&color=000000" width="52" height="40" alt="Trakteer" />
      </a>
    </td>
  </tr>
</table>
</div>

---

## ✨ Features

- **GitHub Profile Overview** — View user info: name, bio, avatar, followers, following, and public repos
- **Repository List** — Browse all public repositories with search, sort, and pagination
- **Repository Detail** — Detailed view with language breakdown bar, stats, and direct GitHub link
- **iOS Glassmorphism UI** — Translucent glass cards, backdrop blur, glow effects, and animated gradient background
- **Dark Mode** — Premium dark theme with Apple-inspired aesthetics
- **Fully Responsive** — Optimized for mobile, tablet, laptop, and desktop

## 🛠 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 16.3 | React framework (App Router) |
| [Tailwind CSS](https://tailwindcss.com) | 4.x | Utility-first CSS framework |
| [TypeScript](https://typescriptlang.org) | 5.x | Static type checking |
| [React](https://react.dev) | 19.x | UI library |
| [Lucide React](https://lucide.dev) | — | Icon library |
| [React Icons](https://react-icons.github.io) | — | Icon library |
| [GitHub API](https://docs.github.com/en/rest) | v3 | Fetch profile & repository data |

## 📁 Project Structure

```
📂 GitHub-Profile/
├── 📂 src/
│   ├── 📂 app/                    # Next.js App Router
│   │   ├── 📂 repo/[id]/         # Repository detail page (dynamic route)
│   │   │   └── page.tsx
│   │   ├── globals.css            # Global styles & design system
│   │   ├── layout.tsx             # Root layout (fonts, metadata)
│   │   └── page.tsx               # Home page
│   ├── 📂 components/
│   │   ├── 📂 ui/
│   │   │   └── Button.tsx         # Reusable button component
│   │   ├── GithubProfile.tsx      # Profile card component
│   │   ├── RepoCard.tsx           # Repository card component
│   │   └── RepoList.tsx           # Repository list with search & sort
│   ├── 📂 utils/
│   │   ├── github.ts              # GitHub API fetch helpers
│   │   └── languages.tsx          # Repo languages fetch helper
│   └── types.ts                   # TypeScript type definitions
├── next.config.ts                 # Next.js configuration
├── postcss.config.mjs             # PostCSS configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies & scripts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/himang-dg/GitHub-Profile.git
   cd GitHub-Profile
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

## ⚙️ Customization

To use this project with **your own GitHub username**, update the username in these files:

| File | What to change |
|---|---|
| `src/app/page.tsx` | `fetch("https://api.github.com/users/YOUR_USERNAME")` |
| `src/components/RepoList.tsx` | `fetchRepos("YOUR_USERNAME")` |
| `src/app/repo/[id]/page.tsx` | `fetchRepos("YOUR_USERNAME")` and `fetchRepoLanguages("YOUR_USERNAME", ...)` |

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) — Learn about Next.js features and API
- [Tailwind CSS Docs](https://tailwindcss.com/docs) — Utility-first CSS framework
- [GitHub REST API](https://docs.github.com/en/rest) — API reference for fetching data

## 🚢 Deploy on Vercel

The easiest way to deploy is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

<p align="right">
  <a href="#top">
    <img src="https://img.icons8.com/?size=100&id=114041&format=png" alt="Back to top" width="70" height="70">
  </a>
</p>
