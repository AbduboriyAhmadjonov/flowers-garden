import { Router } from 'express';

const router = Router();

router.get('/cart', (req, res) => {
  res.render('cart', {
    title: 'Cart',
  });
});

export default router;
