export async function getOverview(req, res) {
  // Real implementation: aggregate PostPlatform + AnalyticsSnapshot rows for req.user.id
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'GET /api/analytics/overview' });
}

export async function getPostAnalytics(req, res) {
  // Real implementation: AnalyticsSnapshot.listForPostPlatform(req.params.id)
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'GET /api/analytics/posts/:id' });
}
