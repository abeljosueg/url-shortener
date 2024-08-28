// urls.js
import { Router } from 'express';
import UrlController from '../controllers/urlController.js';

const router = Router();
const urlController = new UrlController();

router.post('/', async (req, res) => {
  await urlController.shortenUrl(req, res);
});

router.get('/:code', async (req, res) => {
  await urlController.redirectToOriginalUrl(req, res);
});

export default router;