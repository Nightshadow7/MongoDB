import mongoose from "mongoose";
import {Schema} from 'mongoose';

const camperSchema = mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre de la ruta es Obligatoria']
    },
    TipoIdentificacion:{
      type: String,
      required: [true, 'El tipo de identificacion es obligatorio']
    },
    NroIdentificacion:{
      type: Number,
      required: true,
      trim: true,
      unique: true
    },
    Email:{
      type: String,
      required: [true, 'El Email es obligatorio'],
      trim: true,
      unique: true
    },
    Password: {
      type: String,
      required: [true, 'El password es obligatorio'],
      trim: true
    },
    Level:{
      type: Schema.Types.ObjectId,
      ref: 'Level',
      required: true
    },
    LevelState:{
      type: String,
      required: true,
      trim:true
    },
    Estado:{
      type: Boolean,
      required: false,
      default: true
    },
    Imagen: {
      type: String,
      required: true,
      trim: true
    },
    Rol:{
      type: Schema.Types.ObjectId,
      ref: 'Rol',
      required: true
    },
    Promedio:{
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
camperSchema.statics.encryptPassword = (password) => {
  const salt = bcryptjs.genSaltSync(10);
  return bcryptjs.hashSync(password, salt);
};
camperSchema.statics.comparePassword = (password, receivedPassword) => {
  return bcryptjs.compareSync(password, receivedPassword)
};
const Camper = mongoose.model( 'campers' , camperSchema );

export default Camper;