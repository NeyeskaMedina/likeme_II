import express from 'express';
import { getAllPosts, createPosts, updatePosts, deletPosts }  from '../src/controllers/postControllers.js'
// import { validarPost } from "../middleware/validarPost.js";

export const router = express.Router();

router.get('/posts' , getAllPosts)
router.post('/posts', createPosts)
router.put('/posts/like/:id', updatePosts)
router.delete('/posts/:id', deletPosts)

export default router;