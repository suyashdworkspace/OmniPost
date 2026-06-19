// Design-stage stub for the planned AI-driven post-performance analysis feature.
// No model/provider has been chosen yet — this file documents the intended
// shape of the service so it can be implemented later without redesigning
// the rest of the system.

import { AIInsight } from '../models/AIInsight.js';

/**
 * Would analyze a user's recent analytics_snapshots + post_platforms data
 * and produce insights like "best time to post" or "best content type",
 * then persist them via AIInsight.create(...).
 *
 * Not implemented: no AI provider integration exists yet.
 */
export async function generateInsightsForUser(_userId) {
  throw new Error(
    'Not implemented — prototype stage. AI provider/model not yet chosen. ' +
      'See docs/BACKEND_ARCHITECTURE.md section 6.'
  );
}

export async function listInsightsForUser(userId) {
  return AIInsight.listForUser(userId);
}
