import Url from '../models/Url.js';

function generateCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return code;
}

class UrlController {
  async shortenUrl(req, res) {
    try {
      const { url } = req.body;
      let code = generateCode();
      let existingUrl = await Url.findOne({ code });
      while (existingUrl) {
        code = generateCode();
        existingUrl = await Url.findOne({ code });
      }
      const newUrl = new Url({ originalUrl: url, code, clicks: 0 });
      await newUrl.save();
      const shortUrl = `http://localhost:3000/api/${code}`;
      res.json({ shortUrl }); // send the shortened URL as response
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to shorten URL' });
    }
  }

  async redirectToOriginalUrl(req, res) {
    try {
      const { code } = req.params;
      const url = await Url.findOne({ code });
      if (url) {
        url.clicks = (url.clicks || 0) + 1;
        await url.save();
        res.redirect(url.originalUrl);
      } else {
        res.status(404).json({ error: 'URL not found' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  async getUrlInfo(req, res) {
    try {
      const { code } = req.params;
      const url = await Url.findOne({ code });
      if (url) {
        const { clicks, updatedAt } = url;
        res.json({ clicks, updatedAt });
      } else {
        res.status(404).json({ error: 'URL no encontrada' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  }
}

export default UrlController;