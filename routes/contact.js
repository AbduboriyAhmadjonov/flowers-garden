import { Router } from 'express';

const router = Router();

router.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact',
  });
});

export default router;
