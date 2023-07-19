import mongoose from 'mongoose';

const DBConnection = async () => {
  try {
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
      });
      console.log('DB Inicializada');
  } catch (error) {
    console.log(error);
    throw new Error('DB no se puede Inicializar');
  }
}

export default DBConnection;