import mongoose from 'mongoose';  
import {Schema} from 'mongoose';

const cheeseSchema = mongoose.Schema(
  {
    Nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      unique: true
    },
    Estado: {
      type: Boolean,
      required: false,
      default: true
    },
    Usuario: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    },
    Price: {
      type: Number,
      required: true,
    },
    Categoria: {
      type: Schema.Types.ObjectId,
      ref: 'categorias',
      required: true
    },
    Descripcion: {
      type: String,
      required: true,
    },
    Disponibilidad: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Cheese = mongoose.model( 'cheeses' , cheeseSchema );
export default Cheese;
