# 🛡️ Pokémon TCG Arena - Fullstack Project

[![Stack](https://img.shields.io/badge/Stack-Fullstack%20TypeScript-blue)](https://www.typescriptlang.org/)
[![Frontend](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)](https://reactjs.org/)
[![Backend](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js)](https://nodejs.org/)
[![Database](https://img.shields.io/badge/Database-PostgreSQL-336791?logo=postgresql)](https://www.postgresql.org/)

## 📝 Présentation du Projet
**Pokémon TCG Arena** est une plateforme web permettant aux dresseurs de collectionner des cartes, d'ouvrir des boosters et de construire des decks stratégiques. Ce projet "Fil Rouge" de 4 semaines simule le lancement d'un **MVP (Produit Minimum Viable)** pour une startup gaming.

---

## 🎯 Objectifs du MVP

* **Authentification** : Inscription sécurisée et gestion du profil de dresseur.
* **Collection** : Système de possession de cartes et algorithme d'ouverture de boosters aléatoires.
* **Deck Building** : Création et édition de decks de 20 cartes avec validation des règles métier.
* **Administration** : Panel de gestion du catalogue de cartes et modération des joueurs.

---

## 🏗️ Architecture Technique

```text
tcg-arena/
├── frontend/          # React + TS (Mobile-first, Tailwind/SASS) - Port 3000
├── backend/           # Node.js + TS (Express/Fastify) - Port 4000
├── docs/              # Conception (Diagrammes, Maquettes, OpenAPI)
├── postman/           # Collection JSON pour tests API
└── README.md          # Guide principal
```

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
