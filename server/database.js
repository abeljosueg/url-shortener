import mongoose from 'mongoose';

const dbUrl = 'mongodb://localhost:27017/urls'; // URL de la base de datos
const dbName = 'urls'; // Nombre de la base de datos

mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error(`Error connecting to database: ${error}`);
});

db.once('open', () => {
  console.log(`Connected to database: ${dbName}`);
});

export default db;