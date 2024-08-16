#### ng-user-list-demo
Le code se retrouve sous la structure 'client/src/app' et les composants principaux sont:
 * [app.component.html](client/src/app/app.component.html) ==> Application principale
 * [app.component.ts](client/src/app/app.component.ts) ==> Application principale
 * [login.component.html](client/src/app/login/login.component.html) ==> Composant contiends mon nom, password et un bouton 'Login' qui permet de lancer la requête vers l'api.
 * [login.component.ts](client/src/app/login/login.component.ts) ==>  Composant contiends mon nom, password et un bouton 'Login' qui permet de lancer la requête vers l'api.
 * [user-list.component.html](client/src/app/user-list/user-list.component.html) ==>  Composant pour afficher la liste des users.
 * [user-list.component.ts](client/src/app/user-list/user-list.component.html) ==> Composant pour afficher la liste des users.
 * [user-list.service.ts](client/src/app/user-list.ts) ==> Service pour appeler le REST endpoint du back-end.
 

Pour démarrer l'application Angular, vous devez:
 1. Démarrer la partie back-end.
 2. Avoir npm d'installé.
 3. Installer Angular avec la commande suivante:
```
npm install -g @angular/cli@18
```
 4. Exécuter les commandes suivantes à partir du répertoire client/ du projet:
```
npm install
ng serve
```
  
Une fois démarrer, vous devriez pouvoir appeler le endpoint suivant: http://localhost:4200/
