// Design-stage model stub for the `comments` table (see docs/schema.sql).
import { query } from '../config/db.js';

export const Comment = {
  async listForUser(userId, { platformSlug, search } = {}) {
    // Real implementation would join comments -> post_platforms -> platform_connections -> platforms
    // and filter by userId, optional platformSlug, and optional search term.
    return query(
      `SELECT c.* FROM comments c
       JOIN post_platforms pp ON pp.id = c.post_platform_id
       JOIN platform_connections pc ON pc.id = pp.platform_connection_id
       JOIN platforms p ON p.id = pc.platform_id
       WHERE pc.user_id = $1
         AND ($2::text IS NULL OR p.slug = $2)
         AND ($3::text IS NULL OR c.content ILIKE '%' || $3 || '%' OR c.author_name ILIKE '%' || $3 || '%')
       ORDER BY c.created_at DESC`,
      [userId, platformSlug ?? null, search ?? null]
    );
  },
  async create({ postPlatformId, externalCommentId, authorName, authorAvatarUrl, content, likes }) {
    return query(
      `INSERT INTO comments (post_platform_id, external_comment_id, author_name, author_avatar_url, content, likes)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [postPlatformId, externalCommentId, authorName, authorAvatarUrl, content, likes]
    );
  },
};
