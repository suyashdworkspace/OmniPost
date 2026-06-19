// Routes for the planned AI-driven post-performance analysis feature.
import { Router } from 'express';
import { requireAuth } from '../middleware/auth.middleware.js';
import { listInsights } from '../controllers/aiInsights.controller.js';

const router = Router();

router.get('/', requireAuth, listInsights);

export default router;
