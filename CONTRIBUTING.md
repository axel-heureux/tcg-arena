# Guide de Contribution - TCG Arena 🛡️

Merci de participer au développement de ce MVP ! Voici les règles à suivre pour maintenir un code propre :

### 🌳 Gestion des Branches
* Les branches doivent être nommées ainsi : `feature/nom-fonctionnalite` ou `fix/nom-bug`.
* On ne push jamais directement sur `main`. On passe par une Pull Request (PR).

### 💬 Messages de Commit
Nous utilisons les **Conventional Commits** :
* `feat: add booster opening animation`
* `fix: resolve JWT expiration bug`
* `docs: update openapi.yaml`

### 🧪 Tests
* Avant de soumettre une PR, assurez-vous que les tests unitaires (`npm test`) passent.
* Vérifiez que votre nouvel endpoint est bien ajouté à la collection Postman.