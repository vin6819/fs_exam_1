import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://phantom_4669:vinay_4669@devjourney.w2lpa.mongodb.net/?retryWrites=true&w=majority&appName=devjourney");
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;