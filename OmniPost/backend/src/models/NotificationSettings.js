// Design-stage model stub for the `notification_settings` table (see docs/schema.sql).
import { query } from '../config/db.js';

export const NotificationSettings = {
  async getForUser(userId) {
    return query('SELECT * FROM notification_settings WHERE user_id = $1', [userId]);
  },
  async update(userId, { emailEnabled, pushEnabled, commentsEnabled, mentionsEnabled }) {
    return query(
      `UPDATE notification_settings
       SET email_enabled = $2, push_enabled = $3, comments_enabled = $4, mentions_enabled = $5
       WHERE user_id = $1 RETURNING *`,
      [userId, emailEnabled, pushEnabled, commentsEnabled, mentionsEnabled]
    );
  },
};
