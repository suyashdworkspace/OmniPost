// Design-stage stub for the Express app. Wires routes together to match
// the API surface in docs/BACKEND_ARCHITECTURE.md. Never actually started
// in this repo — see server.js and backend/README.md.

import express from 'express';

import authRoutes from './routes/auth.routes.js';
import usersRoutes from './routes/users.routes.js';
import platformsRoutes from './routes/platforms.routes.js';
import postsRoutes from './routes/posts.routes.js';
import commentsRoutes from './routes/comments.routes.js';
import analyticsRoutes from './routes/analytics.routes.js';
import insightsRoutes from './routes/insights.routes.js';

export function createApp() {
  const app = express();
  app.use(express.json());

  app.use('/api/auth', authRoutes);
  app.use('/api/users', usersRoutes);
  app.use('/api/platforms', platformsRoutes);
  app.use('/api/posts', postsRoutes);
  app.use('/api/comments', commentsRoutes);
  app.use('/api/analytics', analyticsRoutes);
  app.use('/api/insights', insightsRoutes);

  app.get('/health', (_req, res) => res.json({ status: 'ok', note: 'prototype skeleton — no real backend behind this' }));

  return app;
}
