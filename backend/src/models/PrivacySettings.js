// Design-stage model stub for the `privacy_settings` table (see docs/schema.sql).
import { query } from '../config/db.js';

export const PrivacySettings = {
  async getForUser(userId) {
    return query('SELECT * FROM privacy_settings WHERE user_id = $1', [userId]);
  },
  async update(userId, { profilePublic, showFollowers, analyticsPublic }) {
    return query(
      `UPDATE privacy_settings
       SET profile_public = $2, show_followers = $3, analytics_public = $4
       WHERE user_id = $1 RETURNING *`,
      [userId, profilePublic, showFollowers, analyticsPublic]
    );
  },
};
