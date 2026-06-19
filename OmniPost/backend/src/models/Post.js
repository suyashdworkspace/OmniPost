// Design-stage model stub for the `posts` table (see docs/schema.sql).
import { query } from '../config/db.js';

export const Post = {
  async listForUser(userId, { status } = {}) {
    if (status) {
      return query('SELECT * FROM posts WHERE user_id = $1 AND status = $2 ORDER BY created_at DESC', [userId, status]);
    }
    return query('SELECT * FROM posts WHERE user_id = $1 ORDER BY created_at DESC', [userId]);
  },
  async findById(id) {
    return query('SELECT * FROM posts WHERE id = $1', [id]);
  },
  async create({ userId, content, mediaUrl, status, scheduledFor }) {
    return query(
      `INSERT INTO posts (user_id, content, media_url, status, scheduled_for)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [userId, content, mediaUrl, status, scheduledFor]
    );
  },
  async update(id, { content, mediaUrl, status, scheduledFor }) {
    return query(
      `UPDATE posts SET content = $2, media_url = $3, status = $4, scheduled_for = $5, updated_at = now()
       WHERE id = $1 RETURNING *`,
      [id, content, mediaUrl, status, scheduledFor]
    );
  },
  async delete(id) {
    return query('DELETE FROM posts WHERE id = $1', [id]);
  },
};
