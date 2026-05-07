import { Router, Request, Response } from 'express';
import pool from '../config/postgre'; //

const router = Router();

// GET tous les effets
router.get('/', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM effet');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des effets' });
    }
});

// GET les effets d'une attaque spécifique
router.get('/attaque/:id_attaque', async (req: Request, res: Response) => {
    const { id_attaque } = req.params;
    try {
        const result = await pool.query(
            'SELECT * FROM effet WHERE id_attaque = $1',
            [id_attaque]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des effets de l\'attaque' });
    }
});

// POST créer un nouvel effet
router.post('/', async (req: Request, res: Response) => {
    const { id_attaque, nom, code_logique, valeur, cible } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO effet (id_attaque, nom, code_logique, valeur, cible) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [id_attaque, nom, code_logique, valeur, cible]
        );
        res.status(201).json({ 
            success: true, 
            message: 'Effet créé avec succès',
            effet: result.rows[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la création de l\'effet' });
    }
});

export default router;