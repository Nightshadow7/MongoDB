import express from 'express';
const router = express.Router();
import * as fs from 'fs';
import path from "path";
import { fileURLToPath } from "url";

const removeExtension = (fileName) => {
  return fileName.split('.').shift()
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pathRouter = `${__dirname}`;
fs.readdirSync(pathRouter).filter(async (file) => {
  const fileWithOutExt = removeExtension(file);
  const skip = ['index'].includes(fileWithOutExt);
  if(!skip){
    const {default: defaultRouter} = await import (`./${fileWithOutExt}.routes.js`);
    router.use(`/${fileWithOutExt}`, defaultRouter ) //TODO: localhost/users
    console.log("Cargar Ruta ======>", fileWithOutExt);
  };
});

router.get('*', (req, res) => {
  res.status(404).json({
    message: 'No se encontro la ruta especificada'
  })
})

export default router;