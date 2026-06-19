import { Router } from 'express';
import { requireAuth } from '../middleware/auth.middleware.js';
import { getOverview, getPostAnalytics } from '../controllers/analytics.controller.js';

const router = Router();

router.get('/overview', requireAuth, getOverview);
router.get('/posts/:id', requireAuth, getPostAnalytics);

export default router;
