classDiagram
    class User {
        +UUID id
        +String username
        +String email
        +Int credits
        +Int level
        +register()
        +login()
        +openBooster()
    }

    class Card {
        +UUID id
        +String name
        +Enum faction
        +Int manaCost
        +Int attack
        +Int defense
        +Enum rarity
        +String specialEffect
    }

    class UserCard {
        +UUID userId
        +UUID cardId
        +Int quantity
    }

    class Deck {
        +UUID id
        +String name
        +UUID userId
        +isValid() bool
        +getStats()
    }

    class DeckCard {
        +UUID deckId
        +UUID cardId
        +Int count
    }

    User "1" -- "0..*" Deck : creates
    User "1" -- "0..*" UserCard : owns
    UserCard "*" -- "1" Card : references
    Deck "1" -- "1..*" DeckCard : contains
    DeckCard "*" -- "1" Card : refers to