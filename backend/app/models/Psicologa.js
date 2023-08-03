import mongoose from "mongoose";

const psicologasSchema = new mongoose.Schema(
  {
    Nombre:{
      type: String,
      required: [true, 'El nombre es Obligatorio'],
    },
    Documento:{
      type: Number,
      required: [true, 'El numero de Documento es Obligatorio'], 
      trim: true,
      unique: true
    },
    Edad: {
      type: Number,
      required: [true, 'Por favor Proporciona una edad'],
      trim: true
    },
    Email:{
      type: String,
      required: [true, 'El correo Electronico es Obligatorio'],
      trim: true,
      unique: true
    },
    Password:{
      type: String,
      required: [true, 'La Contraseña es Obligatoria'],
      trim: true
    },
    Telefono:{
      type: Number,
      required: [true, 'El numero de contacto es Obligatorio'],
      trim: true
    },
    Especialidades:{
      type: String,
      required: [true, 'Por favor especifica al menos 1 especialidad']
    },
    Estado:{
      type: Boolean,
      required: false,
      default: true
    },
    Rol:{
      type: Schema.Types.ObjectId,
      ref: 'Rol',
      required: [true , 'Por favor asigna un rol valido'], 
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Psicologa = mongoose.model( 'psicologas' , psicologasSchema );

export default Psicologa;