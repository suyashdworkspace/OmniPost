// Design-stage controller stub. Returns mock responses — no real auth happens here.
export async function register(req, res) {
  // Real implementation: validate input, hash password (bcrypt), User.create(), issue JWT.
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'POST /api/auth/register' });
}

export async function login(req, res) {
  // Real implementation: look up user by email, compare password hash, sign JWT.
  res.status(501).json({ error: 'Not implemented — prototype stage', endpoint: 'POST /api/auth/login' });
}
