
## Lancer le BackEnd

1. **Base de données :**
   * Lancez **WampServer** (MySQL sur le port `3306`).
   * Vérifiez le fichier `application.properties` du backend pour que la base de données soit prête à recevoir les données.

2. **Dépendances :**
   * Ouvrez le projet dans **IntelliJ IDEA**.
   * Ajoutez ou mettez à jour les dépendances dans le fichier `pom.xml`.

3. **Initialisation et Démarrage :**
   * Le fichier `DataInitializer.java` s'occupe automatiquement de lire les fichiers JSON et de les ajouter à la base de données au démarrage.
   * Exécutez le fichier principal :
     ```text
     back/mediatheque/mediatheque/src/main/java/com/tp/mediatheque/MediathequeApplication.java
     ```
   * L'application s'exécutera sur `http://localhost:8080`.

---

## Lancer le Frontend

1. Ouvrez un terminal dans le dossier du projet :
   ```bash
   cd jpaMediatheque
   npm install ( si pas déjà fait )
   npm run dev