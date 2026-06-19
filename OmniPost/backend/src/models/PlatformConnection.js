// Design-stage model stub for the `platform_connections` table (see docs/schema.sql).
import { query } from '../config/db.js';

export const PlatformConnection = {
  async listForUser(userId) {
    return query(
      `SELECT pc.*, p.name, p.slug, p.icon, p.color_hex
       FROM platform_connections pc
       JOIN platforms p ON p.id = pc.platform_id
       WHERE pc.user_id = $1`,
      [userId]
    );
  },
  async connect({ userId, platformId, externalAccountId, accessTokenEnc, refreshTokenEnc }) {
    return query(
      `INSERT INTO platform_connections
         (user_id, platform_id, external_account_id, access_token_enc, refresh_token_enc, connected, connected_at)
       VALUES ($1, $2, $3, $4, $5, true, now())
       ON CONFLICT (user_id, platform_id) DO UPDATE
         SET external_account_id = EXCLUDED.external_account_id,
             access_token_enc = EXCLUDED.access_token_enc,
             refresh_token_enc = EXCLUDED.refresh_token_enc,
             connected = true,
             connected_at = now()
       RETURNING *`,
      [userId, platformId, externalAccountId, accessTokenEnc, refreshTokenEnc]
    );
  },
  async disconnect(id) {
    return query(`UPDATE platform_connections SET connected = false WHERE id = $1 RETURNING *`, [id]);
  },
};
