import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import AuthRouter from './routes/auth.js';
import ProductRouter from './routes/contact.js';
import CollectionsRouter from './routes/collections.js';
import CartRouter from './routes/cart.js';

dotenv.config();

const app = express();

// Custom middleware to set the MIME type for navbar.css
app.use((req, res, next) => {
  if (req.url === '/public/css/navbar.css') {
    res.setHeader('Content-Type', 'text/css');
  }
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', './views');

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

app.use(AuthRouter);
app.use(ProductRouter);
app.use(CollectionsRouter);
app.use(CartRouter);

app.listen(PORT, () => {
  console.log(`App is running on: ${PORT}`);
});
