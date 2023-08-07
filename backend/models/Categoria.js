
import mongoose from 'mongoose';  
import {Schema} from 'mongoose';

const categoriaSchema = mongoose.Schema(
  {
    Nombre: {
      type: String,
      required: [true, 'El nombre es obligatorio'],
      unique: true
    },
    Estado: {
      type: Boolean,
      default: true,
      required: true
    },
    Usuario: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);
const Categoria = mongoose.model( 'categorias' , categoriaSchema );
export default Categoria;
