// Design-stage model stub for the `post_platforms` join table (see docs/schema.sql).
import { query } from '../config/db.js';

export const PostPlatform = {
  async listForPost(postId) {
    return query('SELECT * FROM post_platforms WHERE post_id = $1', [postId]);
  },
  async create({ postId, platformConnectionId }) {
    return query(
      `INSERT INTO post_platforms (post_id, platform_connection_id, status)
       VALUES ($1, $2, 'pending') RETURNING *`,
      [postId, platformConnectionId]
    );
  },
  async markPublished(id, externalPostId) {
    return query(
      `UPDATE post_platforms SET status = 'published', external_post_id = $2, published_at = now()
       WHERE id = $1 RETURNING *`,
      [id, externalPostId]
    );
  },
  async markFailed(id, errorMessage) {
    return query(
      `UPDATE post_platforms SET status = 'failed', last_error = $2 WHERE id = $1 RETURNING *`,
      [id, errorMessage]
    );
  },
  async incrementEngagement(id, { likes = 0, commentsCount = 0, shares = 0 }) {
    return query(
      `UPDATE post_platforms
       SET likes = likes + $2, comments_count = comments_count + $3, shares = shares + $4
       WHERE id = $1 RETURNING *`,
      [id, likes, commentsCount, shares]
    );
  },
};
