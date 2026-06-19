import { Router } from 'express';
import { requireAuth } from '../middleware/auth.middleware.js';
import {
  listPlatforms,
  listConnections,
  createConnection,
  removeConnection,
} from '../controllers/platforms.controller.js';

const router = Router();

router.get('/', listPlatforms);
router.get('/connections', requireAuth, listConnections);
router.post('/connections', requireAuth, createConnection);
router.delete('/connections/:id', requireAuth, removeConnection);

export default router;
