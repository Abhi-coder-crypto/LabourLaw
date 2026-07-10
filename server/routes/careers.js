import express from 'express';
import Job from '../models/Job.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    console.error('[careers/list]', err);
    res.status(500).json({ error: 'Failed to load jobs' });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const job = await Job.findOne({ slug: req.params.slug });
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
  } catch (err) {
    console.error('[careers/get]', err);
    res.status(500).json({ error: 'Failed to load job' });
  }
});

router.post('/', requireAuth, async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ error: 'Slug already exists' });
    console.error('[careers/create]', err);
    res.status(500).json({ error: 'Failed to create job' });
  }
});

router.put('/:id', requireAuth, async (req, res) => {
  try {
    const update = { ...req.body };
    delete update._id;
    const job = await Job.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json(job);
  } catch (err) {
    if (err.code === 11000) return res.status(409).json({ error: 'Slug already exists' });
    console.error('[careers/update]', err);
    res.status(500).json({ error: 'Failed to update job' });
  }
});

router.delete('/:id', requireAuth, async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ error: 'Job not found' });
    res.json({ ok: true });
  } catch (err) {
    console.error('[careers/delete]', err);
    res.status(500).json({ error: 'Failed to delete job' });
  }
});

export default router;
