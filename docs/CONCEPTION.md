# Dossier de Conception - TCG Arena

Ce document regroupe l'ensemble des ressources de conception technique et fonctionnelle du projet TCG Arena.

---

## 🛠 Architecture & Modélisation

Pour assurer une base solide et maintenable, la modélisation a été découpée en plusieurs documents techniques :

### 1. Analyse Fonctionnelle
Le détail des besoins utilisateurs et des fonctionnalités métier se trouve ici :
👉 **[Accéder aux User Stories (USER_STORIES.md)](./USER_STORIES.md)**
*Contient : Acteurs, récits utilisateurs (Agile) et critères d'acceptation.*

### 2. Modélisation Technique (UML & MERISE)
La structure des données et la logique des classes sont détaillées dans ce document :
👉 **[Accéder aux Diagrammes (UML.md)](./UML.md)**
*Contient : Diagramme de classes (Mermaid), Cas d'utilisation et MCD/MLD.*

---

## 🏗 Choix Techniques (Stack Obligatoire)

Conformément aux exigences du client, nous utilisons la stack suivante pour garantir une architecture propre et maintenable :

| Composant | Technologie | Justification |
| :--- | :--- | :--- |
| **Frontend** | **React + TypeScript** | Typage strict pour réduire les bugs et création de composants réutilisables (Card, DeckBuilder). |
| **Backend** | **Node.js (Express/Fastify)** | Architecture asynchrone performante en TypeScript avec séparation des responsabilités. |
| **Database** | **PostgreSQL** | Robustesse des relations pour la gestion des collections et des règles de deck. |
| **API Doc** | **Swagger/OpenAPI 3.0** | Documentation interactive indispensable pour la communication Front/Back. |
| **Sécurité** | **JWT & Bcrypt** | Authentification par jetons et hachage des mots de passe pour la protection des données. |

---

## 🏃 Méthode de Travail : Agile (Scrum)

Le projet est conduit selon une méthodologie **Agile** pour répondre aux besoins du MVP en 4 semaines :

* **Sprints hebdomadaires** : Découpage du projet en 4 itérations (Auth, Collection, Deckbuilding, Polissage).
* **User Stories** : Chaque fonctionnalité est définie par un besoin utilisateur concret (ex: "En tant que joueur, je veux ouvrir un booster...").
* **Tests continus** : Utilisation de **Jest** pour les règles métier critiques et **Postman** pour l'intégration API.



---

## 📁 Organisation des Livrables

L'ensemble de la documentation est organisé comme suit dans le dépôt :
* `/docs/UML.md` : Modélisation des entités (Classes, Use Cases) et schémas relationnels (MCD/MLD).
* `/docs/USER_STORIES.md` : Détail des fonctionnalités par module et backlog.
* `/docs/openapi.yaml` : Spécification complète de l'API REST testable via Swagger.
* `/docs/maquettes/` : Wireframes (Figma/Excalidraw) de la collection et de l'éditeur de deck.
* `/docs/diagrammes/` : Exports haute définition des schémas MERISE.

---
*Dernière mise à jour : 2026*
