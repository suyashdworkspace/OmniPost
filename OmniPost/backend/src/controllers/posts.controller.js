export async function listPosts(req, res) {
  // Real implementation: Post.listForUser(req.user.id, { status: req.query.status })
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'GET /api/posts' });
}

export async function createPost(req, res) {
  // Real implementation:
  //   1. Post.create(...)
  //   2. PostPlatform.create(...) for each selected platform
  //   3. If status === 'scheduled', ScheduledJob.enqueue({ postId, runAt: scheduledFor })
  //   4. If status === 'published' now, call scheduler.service.publishNow(post)
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'POST /api/posts' });
}

export async function getPost(req, res) {
  // Real implementation: Post.findById + PostPlatform.listForPost
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'GET /api/posts/:id' });
}

export async function updatePost(req, res) {
  // Real implementation: Post.update(req.params.id, req.body)
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'PATCH /api/posts/:id' });
}

export async function deletePost(req, res) {
  // Real implementation: Post.delete(req.params.id)
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'DELETE /api/posts/:id' });
}
