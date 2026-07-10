import mongoose from 'mongoose';

let connected = false;

export async function connectDB() {
  if (connected) return mongoose.connection;
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI is not set');
  }
  await mongoose.connect(uri, { dbName: process.env.MONGODB_DB_NAME || 'labourcodes' });
  connected = true;
  console.log('[db] Connected to MongoDB');
  return mongoose.connection;
}
