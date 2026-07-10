import mongoose from 'mongoose';

const StatSchema        = new mongoose.Schema({ target: Number, decimals: { type: Number, default: 0 }, suffix: String, label: String }, { _id: false });
const IndustrySchema    = new mongoose.Schema({ name: String, count: String, image: String }, { _id: false });
const TestimonialSchema = new mongoose.Schema({ text: String, author: String, role: String }, { _id: false });

const ClienteleSchema = new mongoose.Schema({
  singleton:    { type: String, default: 'clientele', unique: true },
  stats:        [StatSchema],
  industries:   [IndustrySchema],
  testimonials: [TestimonialSchema],
}, { timestamps: true });

export default mongoose.models.Clientele || mongoose.model('Clientele', ClienteleSchema);
