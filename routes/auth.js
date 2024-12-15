import { Router } from 'express';

const router = Router();

router.get('/auth/login', (req, res) => {
  res.render('auth/login', {
    title: 'Login',
  });
});

router.get('/auth/register', (req, res) => {
  res.render('auth/register', {
    title: 'Registration',
  });
});

export default router;