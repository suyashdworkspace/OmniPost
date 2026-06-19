# OmniPost Backend (Design-Stage Skeleton)

This folder is **not a running backend**. It's a structural skeleton built to match the design in [`../docs/BACKEND_ARCHITECTURE.md`](../docs/BACKEND_ARCHITECTURE.md) and [`../docs/DATABASE_SCHEMA.md`](../docs/DATABASE_SCHEMA.md).

Same philosophy as the frontend: things look real and are organized the way a real implementation would be, but most functions are stubs. Routes are defined and would respond, but controllers mostly return mock JSON or throw `Not implemented — prototype stage`. There is **no real database connection**, no real auth, and no real calls to any social platform API.

## Why this exists

My role on the team was backend and database design, not building the working backend (that wasn't in scope for this prototype phase). Rather than write zero backend code, this skeleton is the artifact that shows the *shape* of that design: how routes/controllers/services/models would be organized, matching the schema and architecture docs exactly, so it's reviewable and could be picked up and implemented later.

## Structure

```
backend/
├── package.json          # dependency list as it would be for a real Express+pg backend (not installed/run)
└── src/
    ├── app.js             # Express app wiring (not started anywhere)
    ├── server.js          # entry point (not run)
    ├── config/
    │   └── db.js          # DB connection config — stubbed, no real connection
    ├── models/            # one file per table in docs/schema.sql
    ├── routes/            # one file per resource, matching the API table in the architecture doc
    ├── controllers/       # route handlers — return mock data or throw "not implemented"
    ├── middleware/
    │   └── auth.middleware.js
    └── services/
        ├── scheduler.service.js
        ├── aiAnalysis.service.js
        └── platformAdapters/
            ├── platformAdapter.interface.js
            ├── twitterAdapter.js
            ├── instagramAdapter.js
            └── linkedinAdapter.js
```

## What's intentionally missing

- No `node_modules`, no lockfile install, no working `npm start` — running `npm install` here would work (the `package.json` is real), but starting the server would not connect to anything.
- Facebook/YouTube/Threads/TikTok adapters aren't written individually — they'd follow the exact same shape as `twitterAdapter.js`. Only three are written out, matching the platforms named on the resume bullet this project supports (Instagram, LinkedIn, X/Twitter).
- No tests, no CI for this folder, no environment config beyond a `.env.example`.

## How to read this folder

Start with `docs/BACKEND_ARCHITECTURE.md`, then open `src/app.js` to see how the pieces wire together, then look at one full vertical slice: `routes/posts.routes.js` → `controllers/posts.controller.js` → `models/Post.js` → `services/scheduler.service.js`.
