import { Router, Request, Response } from 'express';
import pool from '../config/postgre';

const router = Router();

// GET toute la table collection (pour administration)
router.get('/', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM collection');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

// GET la collection d'un utilisateur spécifique
router.get('/utilisateur/:id_utilisateur', async (req: Request, res: Response) => {
    const { id_utilisateur } = req.params;
    try {
        const result = await pool.query(
            'SELECT * FROM collection WHERE id_utilisateur = $1',
            [id_utilisateur]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération de la collection' });
    }
});

// POST ajouter une carte à une collection (ou mettre à jour la quantité)
router.post('/', async (req: Request, res: Response) => {
    const { id_utilisateur, id_carte, quantite } = req.body;
    try {
        // Utilisation de ON CONFLICT pour mettre à jour la quantité si le couple utilisateur/carte existe déjà
        await pool.query(
            `INSERT INTO collection (id_utilisateur, id_carte, quantite) 
             VALUES ($1, $2, $3)
             ON CONFLICT (id_utilisateur, id_carte) 
             DO UPDATE SET quantite = collection.quantite + EXCLUDED.quantite`,
            [id_utilisateur, id_carte, quantite]
        );
        res.status(201).json({ success: true, message: 'Collection mise à jour' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la mise à jour de la collection' });
    }
});

export default router;