import mongoose from "mongoose";
import {Schema} from 'mongoose';

const parentezcosSchema = new mongoose.Schema(
  {
    Parentezco:{
      type: String,
      required: [true, 'Ingrese un parentezco valido'],
      unique: true
    },
    Estado:{
      type: String,
      required: false,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Parentezco = mongoose.model( 'parentezcos' , parentezcosSchema );

export default Parentezco;