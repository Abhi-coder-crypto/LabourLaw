import express from 'express';
import Career from '../models/Career.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const careers = await Career.find().sort({ order: 1, createdAt: 1 });
    res.json(careers);
  } catch (err) {
    console.error('[careers/list]', err);
    res.status(500).json({ error: 'Failed to load careers' });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const career = await Career.findOne({ slug: req.params.slug });
    if (!career) return res.status(404).json({ error: 'Career not found' });
    res.json(career);
  } catch (err) {
    console.error('[careers/get]', err);
    res.status(500).json({ error: 'Failed to load career' });
  }
});

router.post('/', requireAuth, async (req, res) => {
  try {
    const career = await Career.create(req.body);
    res.status(201).json(career);
  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ error: 'Slug already exists' });
    console.error('[careers/create]', err);
    res.status(500).json({ error: 'Failed to create career' });
  }
});

router.put('/:id', requireAuth, async (req, res) => {
  try {
    const update = { ...req.body };
    delete update._id;
    const career = await Career.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!career) return res.status(404).json({ error: 'Career not found' });
    res.json(career);
  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ error: 'Slug already exists' });
    console.error('[careers/update]', err);
    res.status(500).json({ error: 'Failed to update career' });
  }
});

router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const career = await Career.findByIdAndDelete(req.params.id);
    if (!career) return res.status(404).json({ error: 'Career not found' });
    res.json({ ok: true });
  } catch (err) {
    console.error('[careers/delete]', err);
    res.status(500).json({ error: 'Failed to delete career' });
  }
});

export default router;
