import mongoose from 'mongoose';

const ResourcesPageSchema = new mongoose.Schema({
  singleton: { type: String, default: 'resources', unique: true },

  // Hero
  heroEyebrow: { type: String, default: 'Knowledge Hub' },
  heroHeading: { type: String, default: 'Insights, Blogs & Downloads' },
  heroSubtext: {
    type: String,
    default: 'Expert insights, regulatory updates, and practical compliance resources to keep your business protected.',
  },
  // 'color' (default solid brand background), 'image', or 'video'
  heroBgType: { type: String, enum: ['color', 'image', 'video'], default: 'color' },
  heroImageUrl: { type: String, default: '' },
  heroVideoUrl: { type: String, default: '' },
}, { timestamps: true });

export default mongoose.models.ResourcesPage || mongoose.model('ResourcesPage', ResourcesPageSchema);
