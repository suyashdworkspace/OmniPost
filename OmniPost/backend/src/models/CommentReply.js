// Design-stage model stub for the `comment_replies` table (see docs/schema.sql).
import { query } from '../config/db.js';

export const CommentReply = {
  async listForComment(commentId) {
    return query('SELECT * FROM comment_replies WHERE comment_id = $1 ORDER BY created_at ASC', [commentId]);
  },
  async create({ commentId, userId, content }) {
    return query(
      `INSERT INTO comment_replies (comment_id, user_id, content) VALUES ($1, $2, $3) RETURNING *`,
      [commentId, userId, content]
    );
  },
};
