// Design-stage model stub for the `scheduled_jobs` table (see docs/schema.sql).
import { query } from '../config/db.js';

export const ScheduledJob = {
  async enqueue({ postId, runAt }) {
    return query(
      `INSERT INTO scheduled_jobs (post_id, run_at) VALUES ($1, $2) RETURNING *`,
      [postId, runAt]
    );
  },
  async findDue(now = new Date()) {
    return query(
      `SELECT * FROM scheduled_jobs WHERE status = 'pending' AND run_at <= $1 ORDER BY run_at ASC`,
      [now]
    );
  },
  async markStatus(id, status, lastError = null) {
    return query(
      `UPDATE scheduled_jobs SET status = $2, last_error = $3, attempts = attempts + 1 WHERE id = $1 RETURNING *`,
      [id, status, lastError]
    );
  },
};
