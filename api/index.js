import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import serverless from 'serverless-http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware for static files and view engine
app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    theme: 'Minimal Grid Layout',
    name: 'WKND Winter Sale 2024',
    assetLocation: '/content/dam/wknd/../ski',
  });
});

export default serverless(app);
