# Dossier de Conception - TCG Arena

Ce document regroupe l'ensemble des ressources de conception technique et fonctionnelle du projet TCG Arena.

---

## 🛠 Architecture & Modélisation

Pour assurer une base solide et maintenable, la modélisation a été découpée en plusieurs documents techniques :

### 1. Analyse Fonctionnelle
Le détail des besoins utilisateurs et des fonctionnalités métier se trouve ici :
👉 **[Accéder aux User Stories (USER_STORIES.md)](./USER_STORIES.md)**
*Contient : Acteurs, récits utilisateurs et critères d'acceptation.*

### 2. Modélisation Technique (UML)
La structure des données et la logique des classes sont détaillées dans ce document :
👉 **[Accéder aux Diagrammes UML (UML.md)](./UML.md)**
*Contient : Diagramme de classes (Mermaid), relations et méthodes.*

---

## 🏗 Choix Techniques (Stack)

Conformément aux exigences du client, nous utilisons la stack suivante :

| Composant | Technologie | Justification |
| :--- | :--- | :--- |
| **Frontend** | React + TypeScript | Typage strict pour réduire les bugs et composants réutilisables. |
| **Backend** | Node.js (Express/Fastify) | Architecture asynchrone performante en TypeScript. |
| **Database** | PostgreSQL | Robustesse des relations pour la gestion des collections et decks. |
| **API Doc** | Swagger/OpenAPI | Documentation interactive et typée pour le frontend. |

---

## 📁 Organisation des Livrables

L'ensemble de la documentation est organisé comme suit dans le dépôt :
* `/docs/UML.md` : Modélisation des entités et relations.
* `/docs/USER_STORIES.md` : Détail des fonctionnalités par module.
* `/docs/openapi.yaml` : Spécification complète de l'API REST.
* `/docs/maquettes/` : Wireframes de la collection et de l'éditeur de deck.
* `/docs/diagrammes/` : MCD/MLD méthode MERISE.

---
*Dernière mise à jour : 2026*