// Design-stage stub. Describes how a real PostgreSQL connection would be
// configured, matching docs/schema.sql — does not actually connect to anything.

import 'dotenv/config';

/**
 * In a real implementation, this would create and export a `pg` Pool
 * using DATABASE_URL, e.g.:
 *
 *   import { Pool } from 'pg';
 *   export const pool = new Pool({ connectionString: process.env.DATABASE_URL });
 *
 * For the prototype, we intentionally don't connect to a real database.
 * `query()` below mirrors the shape callers would use, so controllers/models
 * can be written against a realistic interface without one actually existing yet.
 */
export async function query(_sql, _params = []) {
  throw new Error(
    'Not implemented — prototype stage. No real database is connected. ' +
      'See docs/schema.sql for the schema this would query against.'
  );
}
