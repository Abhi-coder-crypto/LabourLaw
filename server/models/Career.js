import mongoose from 'mongoose';

const CareerSchema = new mongoose.Schema({
  slug: { type: String, required: true, unique: true, trim: true },
  title: { type: String, required: true },
  location: String,
  type: String,
  department: String,
  experience: String,
  category: { type: String, enum: ['internal', 'client'], default: 'internal' },
  about: String,
  responsibilities: [String],
  requirements: [String],
  niceToHave: [String],
  ctc: String,
  postedOn: String,
}, { timestamps: true });

export default mongoose.models.Career || mongoose.model('Career', CareerSchema, 'careers');
