import { Router, Request, Response } from 'express';
import pool from '../config/postgre'; // Importation de la connexion

const router = Router();

// GET tous les types
router.get('/', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM type');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des types' });
    }
});

// POST créer un nouveau type
router.post('/', async (req: Request, res: Response) => {
    const { libelle, couleur_hex } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO type (libelle, couleur_hex) VALUES ($1, $2) RETURNING *',
            [libelle, couleur_hex]
        );
        res.status(201).json({ 
            success: true, 
            message: 'Type créé avec succès',
            type: result.rows[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la création du type' });
    }
});

export default router;