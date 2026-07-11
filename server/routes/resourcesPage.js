import express from 'express';
import ResourcesPage from '../models/ResourcesPage.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let doc = await ResourcesPage.findOne({ singleton: 'resources' });
    if (!doc) doc = await ResourcesPage.create({ singleton: 'resources' });
    res.json(doc);
  } catch (err) {
    console.error('[resources-page/get]', err);
    res.status(500).json({ error: 'Failed to load resources page content' });
  }
});

router.put('/', requireAuth, async (req, res) => {
  try {
    const update = { ...req.body };
    delete update._id;
    delete update.singleton;
    delete update.createdAt;
    delete update.updatedAt;
    const doc = await ResourcesPage.findOneAndUpdate(
      { singleton: 'resources' },
      { $set: update },
      { new: true, upsert: true, runValidators: true }
    );
    res.json(doc);
  } catch (err) {
    console.error('[resources-page/put]', err);
    res.status(500).json({ error: 'Failed to save resources page content' });
  }
});

export default router;
