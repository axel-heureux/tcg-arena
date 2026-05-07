import { Router, Request, Response } from 'express';
import pool from '../config/postgre';

const router = Router();

// GET toutes les cartes
router.get('/', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM carte');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des cartes' });
    }
});

// POST une nouvelle carte
router.post('/', async (req: Request, res: Response) => {
    const { nom, pv_max, stade_evolution, rarete, image_url, id_type } = req.body;
    try {
        await pool.query(
            'INSERT INTO carte (nom, pv_max, stade_evolution, rarete, image_url, id_type) VALUES ($1, $2, $3, $4, $5, $6)',
            [nom, pv_max, stade_evolution, rarete, image_url, id_type]
        );
        res.status(201).json({ success: true, message: 'Carte créée avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la création de la carte' });
    }
});

export default router;