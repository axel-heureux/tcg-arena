require('dotenv').config();
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3000;

const pgConfig = {
  host: process.env.PG_HOST || 'localhost',
  port: Number(process.env.PG_PORT || 5432),
  user: process.env.PG_USER || 'postgres',
  database: process.env.PG_DATABASE || 'postgres',
};

if (typeof process.env.PG_PASSWORD === 'string' && process.env.PG_PASSWORD.length > 0) {
  pgConfig.password = process.env.PG_PASSWORD;
}

const pool = new Pool(pgConfig);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Backend PostgreSQL server is running' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.get('/db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW() AS now');
    res.json({ databaseTime: result.rows[0].now });
  } catch (error) {
    console.error('Database query error:', error);
    res.status(500).json({ error: 'PostgreSQL query failed' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Nom d\'utilisateur et mot de passe requis' });
  }

  try {
    const query = 'SELECT pseudo, mot_de_passe FROM utilisateur WHERE pseudo = $1 LIMIT 1';
    const result = await pool.query(query, [username]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Identifiants invalides' });
    }

    const user = result.rows[0];
    if (user.mot_de_passe !== password) {
      return res.status(401).json({ error: 'Identifiants invalides' });
    }

    return res.json({ message: 'Connexion réussie', username: user.pseudo });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Erreur serveur lors de la connexion' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
