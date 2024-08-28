import { Router } from 'express';
const router = Router();
import Url from '../models/Url.js';

// Función para generar un código único
function generateCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

router.post('/', async (req, res) => {
  const { url } = req.body;
  try {
    // Generar un código único
    let code = generateCode();
    // Verificar si el código ya existe en la base de datos
    let existingUrl = await Url.findOne({ code });
    while (existingUrl) {
      code = generateCode();
      existingUrl = await Url.findOne({ code });
    }
    // Crear un nuevo documento en la base de datos
    const newUrl = new Url({ originalUrl: url, code });
    await newUrl.save();
    // Construir la URL acortada
    const shortUrl = `http://localhost:3000/${code}`;
    res.json({ shortUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to shorten URL' });
  }
});

router.get('/:code', async (req, res) => {
    const { code } = req.params;
    try {
      const url = await Url.findOne({ code });
      if (url) {
        res.redirect(url.originalUrl);
      } else {
        res.status(404).json({ error: 'URL not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

export default router;