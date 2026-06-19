import { Router } from 'express';
import { requireAuth } from '../middleware/auth.middleware.js';
import { listComments, replyToComment } from '../controllers/comments.controller.js';

const router = Router();

router.get('/', requireAuth, listComments);
router.post('/:id/replies', requireAuth, replyToComment);

export default router;
