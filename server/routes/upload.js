import express from 'express';
import multer from 'multer';
import cloudinary from '../cloudinary.js';
import { requireAuth } from '../middleware/auth.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 15 * 1024 * 1024 } });

router.post('/', requireAuth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file provided' });
    const isVideo = req.file.mimetype.startsWith('video/');
    const b64 = req.file.buffer.toString('base64');
    const dataUri = `data:${req.file.mimetype};base64,${b64}`;
    const result = await cloudinary.uploader.upload(dataUri, {
      folder: 'labourcodes',
      resource_type: isVideo ? 'video' : 'image',
    });
    res.json({ url: result.secure_url, publicId: result.public_id });
  } catch (err) {
    console.error('[upload]', err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

export default router;
