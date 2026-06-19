// Design-stage model stub for the `analytics_snapshots` table (see docs/schema.sql).
import { query } from '../config/db.js';

export const AnalyticsSnapshot = {
  async listForPostPlatform(postPlatformId) {
    return query(
      'SELECT * FROM analytics_snapshots WHERE post_platform_id = $1 ORDER BY captured_at ASC',
      [postPlatformId]
    );
  },
  async record({ postPlatformId, reach, engagementRate, impressions }) {
    return query(
      `INSERT INTO analytics_snapshots (post_platform_id, reach, engagement_rate, impressions)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [postPlatformId, reach, engagementRate, impressions]
    );
  },
};
