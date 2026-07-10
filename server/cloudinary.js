import { v2 as cloudinary } from 'cloudinary';

// CLOUDINARY_URL env var (cloudinary://key:secret@cloud_name) is auto-read by the SDK.
cloudinary.config({ secure: true });

export default cloudinary;
