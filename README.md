# 🚀 OmniPost - Social Media Scheduling & Analytics Platform

![OmniPost Logo](https://via.placeholder.com/800x200/667eea/ffffff?text=OmniPost+-+Multi-Platform+Social+Media+Management)

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://suyashdworkspace.github.io/OmniPost/)
[![Repository](https://img.shields.io/badge/Repository-GitHub-black?style=for-the-badge&logo=github)](https://github.com/suyashdworkspace/OmniPost)

🌟 **[View Live Demo](https://suyashdworkspace.github.io/OmniPost/)** 🌟

## 🏆 About This Project

OmniPost is a **concept and prototype** built for a competition, exploring a unified social media scheduling and analytics platform for small and medium businesses (SMBs). It lets a business manage multi-platform posts (Twitter/X, Instagram, Facebook, YouTube, LinkedIn, Threads, TikTok) from a single dashboard, with a planned AI-driven post-performance analysis feature.

This was built by a **4-member team** during the prototype development phase. The repo is split into two halves reflecting how the team divided the work:

- **Frontend (`/src`)** — a working, click-through UI prototype: real layout, navigation, and state for the parts that matter for a demo (composer, comment filtering, settings toggles), with the rest intentionally non-functional (no live posting, no real auth) — exactly what's expected at this stage.
- **Backend & Database design (`/docs`, `/backend`)** — **my primary contribution**. Rather than build a fully working server, I designed the database schema, the backend architecture, and the API surface the frontend would eventually call, then built a non-functional skeleton backend that mirrors those designs (see `/backend/README.md` and `/docs`). Nothing in `/backend` is wired up to a real database or to the frontend — it's a structural blueprint, not a running service.

This is a **prototype**, not a production product. No real social media APIs are integrated, there is no real backend or database, and all data shown is mocked.

## ✨ Frontend Features

- **📝 Multi-Platform Post Composer** - Create and schedule posts for Twitter, Instagram, Facebook, YouTube, LinkedIn, Threads, and TikTok
- **💬 Unified Comments Dashboard** - View and respond to comments from all connected platforms with platform badges
- **📊 Analytics Overview** - Track engagement metrics and performance across platforms
- **🎨 Modern UI/UX** - Clean, responsive design with dark/light mode support
- **⚡ Real-time Updates (mocked)** - Live-looking feed of comments and social media activity
- **🔗 Platform Integration (visual only)** - Visual indicators and badges for each social media platform

## 🗄 Backend & Database Design (Prototype Stage)

See the `/docs` folder for the full design:

- [`docs/DATABASE_SCHEMA.md`](docs/DATABASE_SCHEMA.md) - ERD + table-by-table schema design
- [`docs/BACKEND_ARCHITECTURE.md`](docs/BACKEND_ARCHITECTURE.md) - layered backend architecture, API surface, and how the planned AI post-performance analysis fits in
- [`docs/schema.sql`](docs/schema.sql) - PostgreSQL DDL implementing the ERD
- [`/backend`](backend/README.md) - non-functional Express-style skeleton (routes/controllers/models/services) structured to match the architecture doc

## 🛠 Tech Stack

**Frontend (built)**
- React 18 + TypeScript
- Vite
- Tailwind CSS + custom design system
- Lucide React + custom social platform icons

**Backend (designed, not built)**
- Node.js + Express (skeleton only)
- PostgreSQL (schema designed, not deployed)
- Planned: job queue for scheduled posts, AI analysis service for post-performance insights

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.19+ or v22.12+)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/suyashdworkspace/omnipost.git
   cd omnipost
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:5173` to see the application

> Note: `/backend` is a design skeleton, not a runnable service. See `backend/README.md`.

## 📱 Platform Support (Mocked)

| Platform     | Status       | Features                  |
| ------------ | ------------ | ------------------------- |
| 🐦 Twitter   | ✅ Connected | Post, Comments, Analytics |
| 📷 Instagram | ✅ Connected | Post, Comments, Stories   |
| 👤 Facebook  | ✅ Connected | Post, Comments, Pages     |
| 📺 YouTube   | 🔄 Available | Post, Comments, Community |
| 💼 LinkedIn  | ✅ Connected | Post, Comments, Articles  |
| 🧵 Threads   | 🔄 Available | Post, Comments            |
| 🎵 TikTok    | 🔄 Available | Post, Comments            |

## 🎨 Design Features

- **Glassmorphism Effects** - Modern frosted glass UI elements
- **Social Platform Colors** - Brand-accurate color schemes for each platform
- **Responsive Grid Layout** - Optimized for desktop, tablet, and mobile
- **Dark/Light Mode** - Automatic theme switching
- **Smooth Animations** - Micro-interactions and transitions
- **Platform Badges** - Visual indicators for content origin

## 📊 Demo Data

The application includes comprehensive mock data for demonstration:

- 4 sample posts across different platforms
- 6+ sample comments with realistic interactions
- Analytics data and engagement metrics
- Platform connection status and follower counts

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

### Project Structure

```
OmniPost/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components (Button, Card, Badge, etc.)
│   │   └── layout/        # Layout components (Header, Sidebar)
│   ├── pages/             # Main application pages
│   ├── data/              # Mock data and types
│   └── lib/                # Utilities and helpers
├── docs/                  # Database schema + backend architecture design docs
├── backend/               # Non-functional backend skeleton (design-stage only)
└── public/
```

## 🎯 Prototype Scope

This project is a concept prototype for a competition, covering:

1. **Dashboard Overview** - Stats, recent posts, and activity feed
2. **Post Composer** - Multi-platform content creation with preview
3. **Comments Management** - Unified comment feed with platform badges
4. **Analytics Preview** - Basic metrics and engagement data
5. **Settings Panel** - Platform connections and preferences
6. **Backend & Database Design** - Schema, architecture, and API design for the eventual real implementation

## 🌟 Key Highlights

- **Modern Design Trends** - Implements current UI/UX patterns
- **Social Media Integration (visual)** - Realistic platform-specific features
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Design-First Backend** - Schema and architecture designed before any backend code, reflecting a real team workflow
- **Scalable Architecture (planned)** - Designed to extend into a real backend integration

## 📈 Planned / Future Work

- Real API integrations for social media platforms
- A working implementation of the designed backend and database
- AI-driven post-performance analysis (insights on what content/timing performs best)
- Advanced scheduling with calendar interface
- Team collaboration features
- Advanced analytics and reporting
- Content approval workflows

## 👥 Team

Built by a 4-member team as a competition prototype. **Suyash Desai** — backend architecture and database design (see `/docs` and `/backend`).

## 📄 License

MIT License — see [LICENSE](LICENSE). Built for educational, competition, and portfolio purposes.

## 🤝 Contributing

This is a competition prototype for MCA Entrepreneurship Expo (2025-26) & MCA Pitch Arena (2025-26). Feel free to fork and adapt for your own use cases!

---

