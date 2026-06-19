// Design-stage stub for the Scheduler Service described in docs/BACKEND_ARCHITECTURE.md.
// In a real deployment this would run as a periodic worker (cron/interval) polling
// scheduled_jobs for due posts and handing them off to the right platform adapter.

import { ScheduledJob } from '../models/ScheduledJob.js';
import { PostPlatform } from '../models/PostPlatform.js';
import { getAdapterForPlatform } from './platformAdapters/platformAdapter.interface.js';

/**
 * Would be called by a cron/interval in server.js, e.g. every minute.
 * Not invoked anywhere in this skeleton.
 */
export async function processDueJobs() {
  const dueJobs = await ScheduledJob.findDue();
  for (const job of dueJobs) {
    await publishNow(job.post_id);
  }
}

/**
 * Publish a post to all of its target platforms right now,
 * via each platform's adapter.
 */
export async function publishNow(postId) {
  const targets = await PostPlatform.listForPost(postId);
  for (const target of targets) {
    const adapter = getAdapterForPlatform(target.platform_slug);
    try {
      const externalPostId = await adapter.publishPost(target);
      await PostPlatform.markPublished(target.id, externalPostId);
    } catch (err) {
      await PostPlatform.markFailed(target.id, err.message);
    }
  }
}
