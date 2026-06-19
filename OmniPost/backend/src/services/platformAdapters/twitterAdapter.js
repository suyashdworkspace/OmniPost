// Design-stage stub for the Twitter/X platform adapter.
// Would wrap the real Twitter API behind the shared adapter interface.

export const twitterAdapter = {
  async publishPost(_postPlatformRecord) {
    throw new Error('Not implemented — prototype stage. No real Twitter API call is made.');
  },
  async fetchComments(_externalPostId) {
    throw new Error('Not implemented — prototype stage.');
  },
  async fetchEngagement(_externalPostId) {
    throw new Error('Not implemented — prototype stage.');
  },
};
