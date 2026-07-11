import express from 'express';
import CareersPage from '../models/CareersPage.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    let doc = await CareersPage.findOne({ singleton: 'careers' });
    if (!doc) doc = await CareersPage.create({ singleton: 'careers' });
    res.json(doc);
  } catch (err) {
    console.error('[careers-page/get]', err);
    res.status(500).json({ error: 'Failed to load careers page content' });
  }
});

router.put('/', requireAuth, async (req, res) => {
  try {
    const update = { ...req.body };
    delete update._id;
    delete update.singleton;
    delete update.createdAt;
    delete update.updatedAt;
    const doc = await CareersPage.findOneAndUpdate(
      { singleton: 'careers' },
      { $set: update },
      { new: true, upsert: true, runValidators: true }
    );
    res.json(doc);
  } catch (err) {
    console.error('[careers-page/put]', err);
    res.status(500).json({ error: 'Failed to save careers page content' });
  }
});

export default router;
