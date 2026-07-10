import express from 'express';
import Home from '../models/Home.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let doc = await Home.findOne({ singleton: 'home' });
    if (!doc) doc = await Home.create({ singleton: 'home' });
    res.json(doc);
  } catch (err) {
    console.error('[home/get]', err);
    res.status(500).json({ error: 'Failed to load home content' });
  }
});

router.put('/', requireAuth, async (req, res) => {
  try {
    const update = { ...req.body };
    delete update._id;
    delete update.singleton;
    delete update.createdAt;
    delete update.updatedAt;
    const doc = await Home.findOneAndUpdate(
      { singleton: 'home' },
      { $set: update },
      { new: true, upsert: true }
    );
    res.json(doc);
  } catch (err) {
    console.error('[home/put]', err);
    res.status(500).json({ error: 'Failed to save home content' });
  }
});

export default router;
