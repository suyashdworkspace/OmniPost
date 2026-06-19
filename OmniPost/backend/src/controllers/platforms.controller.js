export async function listPlatforms(req, res) {
  // Real implementation: Platform.listAll()
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'GET /api/platforms' });
}

export async function listConnections(req, res) {
  // Real implementation: PlatformConnection.listForUser(req.user.id)
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'GET /api/platforms/connections' });
}

export async function createConnection(req, res) {
  // Real implementation: kick off OAuth flow for the requested platform, then PlatformConnection.connect(...)
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'POST /api/platforms/connections' });
}

export async function removeConnection(req, res) {
  // Real implementation: PlatformConnection.disconnect(req.params.id)
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'DELETE /api/platforms/connections/:id' });
}
