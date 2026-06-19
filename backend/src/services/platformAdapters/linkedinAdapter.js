// Design-stage stub for the LinkedIn platform adapter.
// Would wrap the real LinkedIn API behind the shared adapter interface.

export const linkedinAdapter = {
  async publishPost(_postPlatformRecord) {
    throw new Error('Not implemented — prototype stage. No real LinkedIn API call is made.');
  },
  async fetchComments(_externalPostId) {
    throw new Error('Not implemented — prototype stage.');
  },
  async fetchEngagement(_externalPostId) {
    throw new Error('Not implemented — prototype stage.');
  },
};
