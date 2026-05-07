// index.ts
import 'dotenv/config'; //
import express, { Request, Response } from 'express'; //
import userRouter from './routes/utilisateur'; // 
import attackRouter from './routes/attaque'; //
import cardRouter from './routes/cartes'; //
import collectionRouter from './routes/collection'; //
import compositionRouter from './routes/composition'; //
import deckRouter from './routes/deck'; //
import effectRouter from './routes/effet'; //
import typeRouter from './routes/type'; //

const app = express(); //
const PORT = process.env.PORT || 3000; //

// MIDDLEWARES
app.use(express.json()); //

// ROUTES
app.use('/utilisateur', userRouter); //
app.use('/attaque', attackRouter); //
app.use('/carte', cardRouter); //
app.use('/collection', collectionRouter); //
app.use('/composition', compositionRouter); //
app.use('/deck', deckRouter); //
app.use('/effet', effectRouter); //
app.use('/type', typeRouter); //


app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', message: 'Je suis la version MODIFIÉE' }); //
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); //
});