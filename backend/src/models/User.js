// Design-stage model stub for the `users` table (see docs/schema.sql).
import { query } from '../config/db.js';

export const User = {
  async findById(id) {
    return query('SELECT * FROM users WHERE id = $1', [id]);
  },
  async findByEmail(email) {
    return query('SELECT * FROM users WHERE email = $1', [email]);
  },
  async create({ displayName, username, email, passwordHash }) {
    return query(
      `INSERT INTO users (display_name, username, email, password_hash)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [displayName, username, email, passwordHash]
    );
  },
  async updateProfile(id, { displayName, bio, websiteUrl, avatarUrl }) {
    return query(
      `UPDATE users SET display_name = $2, bio = $3, website_url = $4, avatar_url = $5, updated_at = now()
       WHERE id = $1 RETURNING *`,
      [id, displayName, bio, websiteUrl, avatarUrl]
    );
  },
};
