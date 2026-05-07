import { Router, Request, Response } from 'express';
import pool from '../config/postgre';

const router = Router();

// POST a new user

router.post('/', async (req: Request, res: Response) => {
    try {
        await pool.query(
            'INSERT INTO utilisateur (pseudo, email, mot_de_passe, niveau) VALUES ($1, $2, $3, $4)',
            [req.body.pseudo, req.body.email, req.body.mot_de_passe, req.body.niveau] 
        );
        res.status(201).json({ success: true, message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

// SELECT all users 

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM utilisateur');

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: 'Erreur serveur',
    });
  }
});

export default router;