import mongoose from 'mongoose';

const CareersPageSchema = new mongoose.Schema({
  singleton: { type: String, default: 'careers', unique: true },

  // Hero
  heroEyebrow: { type: String, default: 'Join Our Team' },
  heroHeading: { type: String, default: 'Build a Career That Matters' },
  heroSubtext: {
    type: String,
    default: "Channel your passion for labour and industrial law into a meaningful career at India's premier compliance advisory firm.",
  },
  // 'video' or 'image'
  heroBgType: { type: String, enum: ['video', 'image'], default: 'video' },
  heroVideoUrl: { type: String, default: '' }, // falls back to bundled /assets/careers-hero.mp4 when blank
  heroImageUrl: { type: String, default: '' },
}, { timestamps: true });

export default mongoose.models.CareersPage || mongoose.model('CareersPage', CareersPageSchema);
