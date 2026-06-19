import { Router } from 'express';
import { requireAuth } from '../middleware/auth.middleware.js';
import {
  listPosts,
  createPost,
  getPost,
  updatePost,
  deletePost,
} from '../controllers/posts.controller.js';

const router = Router();

router.get('/', requireAuth, listPosts);
router.post('/', requireAuth, createPost);
router.get('/:id', requireAuth, getPost);
router.patch('/:id', requireAuth, updatePost);
router.delete('/:id', requireAuth, deletePost);

export default router;
