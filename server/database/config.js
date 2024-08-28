import mongoose from 'mongoose';

const dbUrl = 'mongodb://localhost:27017/url-shortener'; // URL de la base de datos
const dbName = 'url-shortener'; // Nombre de la base de datos
async function connectToDatabase() {
  try {
    await mongoose.connect(dbUrl);
    console.log(`Connected to database: ${dbName}`);
  } catch (err) {
    console.error(`Error connecting to database: ${err}`);
  }
}
export default connectToDatabase;