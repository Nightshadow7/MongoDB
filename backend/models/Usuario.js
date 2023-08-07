import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre es Obligatorio'],
    },
    Email:{
      type: String,
      required: [true , 'El email es Obligatorio'],
      trim: true,
      unique: true
    },
    Password:{
      type: String,
      required: [true , 'El password es Obligatorio'],
      trim: true,
    },
    Imagen:{
      type: String,
      required: false,
    },
    Rol:{
      type: String,
      required: true,
      trim: true,
      default: 'USER',
    },
    Estado:{
      type: Boolean,
      required: false,
      default: true,
      trim: true,
    },
    GoogleSignIn:{
      type: Boolean,
      required: false,
      default: false,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false
  }
);
usuarioSchema.statics.encryptPassword = (password) => {
  const salt = bcryptjs.genSaltSync(10);
  return bcryptjs.hashSync(password, salt);
};
usuarioSchema.statics.comparePassword = (password, receivedPassword) => {
  return bcryptjs.compareSync(password, receivedPassword)
};
const Usuario = mongoose.model( 'users' , usuarioSchema );

export default Usuario;