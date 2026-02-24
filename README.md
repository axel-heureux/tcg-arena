<h1>🛡️ Pokémon TCG Arena - Fullstack Project</h1>
📝 Présentation du Projet
Pokémon TCG Arena est une plateforme web permettant aux dresseurs de collectionner des cartes, d'ouvrir des boosters et de construire des decks stratégiques. Ce projet "Fil Rouge" de 4 semaines simule le lancement d'un MVP (Produit Minimum Viable) pour une startup gaming.
<br>

<h2>🎯 Objectifs du MVP</h2>
Authentification : Inscription et profil de dresseur.

Collection : Système de possession de cartes et ouverture de boosters aléatoires.

Deck Building : Création de decks de 20 cartes respectant les règles officielles.

Administration : Gestion du catalogue de cartes et des joueurs.

<h2>🏗️ Architecture Technique</h2>

tcg-arena/
<br>
├── frontend/          # React + TS (Mobile-first, Tailwind/SASS) - Port 3000
<br>
├── backend/           # Node.js + TS (Express/Fastify) - Port 4000
<br>
├── docs/              # Conception (Diagrammes, Maquettes, OpenAPI)
<br>
├── postman/           # Collection JSON pour tests API
<br>
└── README.md          # Guide principal

<h2>🃏 L'Univers de Jeu (Pokémon Edition)</h2>

Les Types & Spécialités
🔥 Feu : Dégâts directs élevés et brûlures.

💧 Eau : Contrôle du terrain et défense.

🌿 Plante : Résistance et régénération.

⚡ Électrik : Vitesse et paralysie (esquive).

Structure d'une Carte
Stats : Nom, Type, Coût en Énergie (Mana), Attaque, Défense.

Rareté : Commune (60%), Rare (25%), Épique (12%), Légendaire (3%).

<br>

<h2>🚀 Installation Express</h2>
Clonage & Backend :

Bash

git clone https://github.com/votre-equipe/pokemon-tcg-arena.git
cd backend && npm install
npm run dev # API sur http://localhost:4000
Frontend :

Bash

cd ../frontend && npm install
npm start # App sur http://localhost:3000
Documentation API :
Accédez à Swagger via http://localhost:4000/api-docs pour tester les endpoints.
