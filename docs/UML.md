# Dossier de Conception - TCG Arena

## 1. Diagramme de Classes UML (Logique Métier)

Ce diagramme modélise les entités du jeu, leurs propriétés techniques et les méthodes nécessaires au fonctionnement du MVP.

```mermaid
classDiagram
    class Utilisateur {
        +UUID id_utilisateur
        +String pseudo
        +String email
        +String mot_de_passe
        +Int credits
        +Int niveau
        +DateTime date_inscription
        +sInscrire(email, pseudo, mdp)
        +seConnecter(email, mdp)
        +modifierProfil(pseudo, avatar)
        +acheterBooster()
    }

    class Carte {
        +UUID id_carte
        +String nom
        +Int pv_max
        +Int stade_evolution
        +Int manaCost
        +Int attack
        +Int defense
        +Enum rarete
        +String image_url
        +getDetails()
    }

    class Type {
        +Int id_type
        +String libelle
        +String couleur_hex
    }

    class Collection {
        +Int quantite
        +ajouterCarte(id_carte)
        +retirerCarte(id_carte)
    }

    class Deck {
        +UUID id_deck
        +String nom_deck
        +DateTime date_creation
        +validerRegles() Boolean
        +calculerStats() Object
        +ajouterCarte(id_carte)
        +supprimerCarte(id_carte)
    }

    class Composition_Deck {
        +Int quantite_carte
    }

    class Attaque {
        +UUID id_attaque
        +String nom_attaque
        +Int degats_base
        +Int cout_energie
    }

    class Effet {
        +UUID id_effet
        +String nom
        +String code_logique
        +Int valeur
        +String cible
    }

    class ServiceBooster {
        <<service>>
        +ouvrirBooster() Card[]
        +calculerProbabilite(rarete) Float
    }

    %% Relations
    Utilisateur "1" -- "0..*" Deck : Crée
    Utilisateur "1" -- "0..*" Collection : Possède
    Collection "0..*" -- "1" Carte : Référence
    Deck "1" -- "0..*" Composition_Deck : Dispose de
    Composition_Deck "0..*" -- "1" Carte : Inclut
    Carte "*" -- "1" Type : Appartient à
    Carte "1" -- "1..*" Attaque : Déclenche
    Attaque "1" -- "0..*" Effet : Applique
