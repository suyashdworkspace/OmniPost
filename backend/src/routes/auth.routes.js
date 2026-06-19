// Design-stage route stub. See docs/BACKEND_ARCHITECTURE.md "API Surface".
import { Router } from 'express';
import { register, login } from '../controllers/auth.controller.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);

export default router;
