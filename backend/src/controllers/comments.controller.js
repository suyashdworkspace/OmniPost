export async function listComments(req, res) {
  // Real implementation: Comment.listForUser(req.user.id, { platformSlug: req.query.platform, search: req.query.search })
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'GET /api/comments' });
}

export async function replyToComment(req, res) {
  // Real implementation:
  //   1. CommentReply.create({ commentId: req.params.id, userId: req.user.id, content: req.body.content })
  //   2. Platform adapter call to actually post the reply on the real platform
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'POST /api/comments/:id/replies' });
}
