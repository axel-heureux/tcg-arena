import { Router, Request, Response } from 'express';
import pool from '../config/postgre';

const router = Router();

// GET le contenu d'un deck spécifique (toutes ses cartes)
router.get('/:id_deck', async (req: Request, res: Response) => {
    const { id_deck } = req.params;
    try {
        const result = await pool.query(
            'SELECT * FROM compo_deck WHERE id_deck = $1',
            [id_deck]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération du deck' });
    }
});

// POST ajouter une carte à un deck
router.post('/', async (req: Request, res: Response) => {
    const { id_deck, id_carte, quantite_carte } = req.body;
    try {
        await pool.query(
            `INSERT INTO compo_deck (id_deck, id_carte, quantite_carte) 
             VALUES ($1, $2, $3)
             ON CONFLICT (id_deck, id_carte) 
             DO UPDATE SET quantite_carte = compo_deck.quantite_carte + EXCLUDED.quantite_carte`,
            [id_deck, id_carte, quantite_carte]
        );
        res.status(201).json({ success: true, message: 'Carte ajoutée au deck' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de l\'ajout de la carte au deck' });
    }
});

// DELETE retirer une carte d'un deck
router.delete('/:id_deck/:id_carte', async (req: Request, res: Response) => {
    const { id_deck, id_carte } = req.params;
    try {
        await pool.query(
            'DELETE FROM compo_deck WHERE id_deck = $1 AND id_carte = $2',
            [id_deck, id_carte]
        );
        res.json({ success: true, message: 'Carte retirée du deck' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la suppression' });
    }
});

export default router;