// Design-stage model stub for the `platforms` lookup table (see docs/schema.sql).
import { query } from '../config/db.js';

export const Platform = {
  async listAll() {
    return query('SELECT * FROM platforms ORDER BY name');
  },
  async findBySlug(slug) {
    return query('SELECT * FROM platforms WHERE slug = $1', [slug]);
  },
};
