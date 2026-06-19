// Design-stage stub for JWT auth middleware, per docs/BACKEND_ARCHITECTURE.md section 4.
// Does not actually verify anything — always rejects, since there is no real
// JWT secret or user session in this prototype.

export function requireAuth(req, res, next) {
  // Real implementation:
  //   1. Read `Authorization: Bearer <token>` header
  //   2. jwt.verify(token, process.env.JWT_SECRET)
  //   3. Attach decoded payload to req.user
  //   4. next()
  return res.status(501).json({
    error: 'Not implemented — prototype stage. No real auth/session exists yet.',
  });
}
