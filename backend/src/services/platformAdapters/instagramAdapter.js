// Design-stage stub for the Instagram platform adapter.
// Would wrap the real Instagram Graph API behind the shared adapter interface.

export const instagramAdapter = {
  async publishPost(_postPlatformRecord) {
    throw new Error('Not implemented — prototype stage. No real Instagram API call is made.');
  },
  async fetchComments(_externalPostId) {
    throw new Error('Not implemented — prototype stage.');
  },
  async fetchEngagement(_externalPostId) {
    throw new Error('Not implemented — prototype stage.');
  },
};
