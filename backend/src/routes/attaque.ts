import { Router, Request, Response } from 'express';
import pool from '../config/postgre';

const router = Router();

// GET toutes les attaques
router.get('/', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM attaque');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des attaques' });
    }
});

// POST une nouvelle attaque
router.post('/', async (req: Request, res: Response) => {
    const { id_carte, nom_attaque, degats_base, cout_energie, description_effet } = req.body;
    try {
        await pool.query(
            'INSERT INTO attaque (id_carte, nom_attaque, degats_base, cout_energie, description_effet) VALUES ($1, $2, $3, $4, $5)',
            [id_carte, nom_attaque, degats_base, cout_energie, description_effet]
        );
        res.status(201).json({ success: true, message: 'Attaque créée avec succès' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la création de l\'attaque' });
    }
});

// GET les attaques d'une carte spécifique
router.get('/carte/:id_carte', async (req: Request, res: Response) => {
    const { id_carte } = req.params;
    try {
        const result = await pool.query('SELECT * FROM attaque WHERE id_carte = $1', [id_carte]);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des attaques' });
    }
});

export default router;