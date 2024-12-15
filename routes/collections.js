import { Router } from 'express';

const router = Router();

router.get('/collections/index', (req, res) => {
  const products = [
    { name: "Birthday Celebrations", price: 10000, image: "/public/images/logo.jpg" },
    { name: "Jack's Party Zone", price: 18000, image: "/public/images/logo.jpg" },
    { name: "Henry's First Birthday", price: 17000, image: "/public/images/logo.jpg" },
  ];

  res.render('collections/index', {
    title: 'Collections | Main',
    products
  });
});

export default router;