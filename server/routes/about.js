import express from 'express';
import About from '../models/About.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let doc = await About.findOne({ singleton: 'about' });
    if (!doc) doc = await About.create({ singleton: 'about' });
    res.json(doc);
  } catch (err) {
    console.error('[about/get]', err);
    res.status(500).json({ error: 'Failed to load about content' });
  }
});

router.put('/', requireAuth, async (req, res) => {
  try {
    const update = { ...req.body };
    delete update._id;
    delete update.singleton;
    delete update.createdAt;
    delete update.updatedAt;
    const doc = await About.findOneAndUpdate(
      { singleton: 'about' },
      { $set: update },
      { new: true, upsert: true }
    );
    res.json(doc);
  } catch (err) {
    console.error('[about/put]', err);
    res.status(500).json({ error: 'Failed to save about content' });
  }
});

export default router;
