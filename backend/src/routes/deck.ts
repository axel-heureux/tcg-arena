import { Router, Request, Response } from 'express';
import pool from '../config/postgre'; // Importation du pool de connexion

const router = Router();

// GET tous les decks (pour administration)
router.get('/', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM deck');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des decks' });
    }
});

// GET les decks d'un utilisateur spécifique
router.get('/utilisateur/:id_utilisateur', async (req: Request, res: Response) => {
    const { id_utilisateur } = req.params;
    try {
        const result = await pool.query(
            'SELECT * FROM deck WHERE id_utilisateur = $1',
            [id_utilisateur]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des decks de l\'utilisateur' });
    }
});

// POST créer un nouveau deck
router.post('/', async (req: Request, res: Response) => {
    const { id_utilisateur, nom_deck } = req.body;
    try {
        // La colonne date_creation peut être gérée automatiquement par PostgreSQL avec DEFAULT NOW()
        const result = await pool.query(
            'INSERT INTO deck (id_utilisateur, nom_deck, date_creation) VALUES ($1, $2, NOW()) RETURNING *',
            [id_utilisateur, nom_deck]
        );
        res.status(201).json({ 
            success: true, 
            message: 'Deck créé avec succès',
            deck: result.rows[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la création du deck' });
    }
});

export default router;