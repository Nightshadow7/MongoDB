import mongoose from 'mongoose';

const conectarDB = async () => {
  try {
    const connectionDB = await mongoose.connect(process.env.MONGO_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const url = `Conectado a mongoDB en el server ${connectionDB.connection.host} - En el puerto ${connectionDB.connection.port}`;
    console.log(url);
  } catch (error) {
    console.log(`${error.message}`);
    process.exit(1);
  }

}

export default conectarDB;