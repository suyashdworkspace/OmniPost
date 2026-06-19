// Design-stage stub. Defines the common contract every platform adapter
// implements, per docs/BACKEND_ARCHITECTURE.md section 2.
//
// Real platforms (Facebook, YouTube, Threads, TikTok) would each get their
// own file following this exact same shape as twitterAdapter.js — only
// three are written out in this prototype (matching the platforms named on
// the resume: Twitter/X, Instagram, LinkedIn).

import { twitterAdapter } from './twitterAdapter.js';
import { instagramAdapter } from './instagramAdapter.js';
import { linkedinAdapter } from './linkedinAdapter.js';

const adapters = {
  twitter: twitterAdapter,
  instagram: instagramAdapter,
  linkedin: linkedinAdapter,
};

export function getAdapterForPlatform(platformSlug) {
  const adapter = adapters[platformSlug];
  if (!adapter) {
    throw new Error(`No adapter implemented for platform "${platformSlug}" — prototype stage.`);
  }
  return adapter;
}

/**
 * Every adapter must implement:
 *   publishPost(postPlatformRecord) -> Promise<externalPostId>
 *   fetchComments(externalPostId)   -> Promise<Comment[]>
 *   fetchEngagement(externalPostId) -> Promise<{ likes, comments, shares }>
 */
