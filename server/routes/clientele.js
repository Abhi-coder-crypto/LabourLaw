import express from 'express';
import Clientele from '../models/Clientele.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let doc = await Clientele.findOne({ singleton: 'clientele' });
    if (!doc) doc = await Clientele.create({ singleton: 'clientele' });
    res.json(doc);
  } catch (err) {
    console.error('[clientele/get]', err);
    res.status(500).json({ error: 'Failed to load clientele content' });
  }
});

router.put('/', requireAuth, async (req, res) => {
  try {
    const update = { ...req.body };
    delete update._id;
    delete update.singleton;
    delete update.createdAt;
    delete update.updatedAt;
    const doc = await Clientele.findOneAndUpdate(
      { singleton: 'clientele' },
      { $set: update },
      { new: true, upsert: true }
    );
    res.json(doc);
  } catch (err) {
    console.error('[clientele/put]', err);
    res.status(500).json({ error: 'Failed to save clientele content' });
  }
});

export default router;
