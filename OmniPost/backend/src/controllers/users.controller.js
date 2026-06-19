export async function getMe(req, res) {
  // Real implementation: User.findById(req.user.id)
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'GET /api/users/me' });
}

export async function updateMe(req, res) {
  // Real implementation: User.updateProfile(req.user.id, req.body)
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'PATCH /api/users/me' });
}
