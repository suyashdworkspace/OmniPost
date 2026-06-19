// Design-stage model stub for the `ai_insights` table (see docs/schema.sql).
// Backs the resume-stated "planned AI-driven post-performance analysis" feature.
import { query } from '../config/db.js';

export const AIInsight = {
  async listForUser(userId) {
    return query('SELECT * FROM ai_insights WHERE user_id = $1 ORDER BY generated_at DESC', [userId]);
  },
  async create({ userId, postId = null, insightType, content, confidenceScore }) {
    return query(
      `INSERT INTO ai_insights (user_id, post_id, insight_type, content, confidence_score)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [userId, postId, insightType, content, confidenceScore]
    );
  },
};
