// 1 Quelles sont les différentss bases de données atteignables via cette connexion ? Quelle commande permet de les afficher?
// -> 'show dbs'


// 2 Allez dans la BDD "exercices". Quelle commande permet de se déplacer à une nouvelle base de données. Que se passe-t-il si cette base n'existe pas ?
// -> 'use exercices'. Si elle n'existe pas, mongoDB créé automatiquement la nouvelle BDD


// 3 Quelles sont les différentes collections présentes dans cette BDD ? Quelle commande permet de les afficher.
// bel20 - cheeses - irons - laptops - people
// -> 'show collections'

// 4 Quelle est la commande nécessaire pour affichez la liste des documents d'une des collections.
// -> 'db.nom_de_la_collection.find()'

// Vous allez maintenant changer de BDD pour pouvoir travailler sur vos propres documents.
// Pour cela, utilisez la commande de la question 2 pour ouvrir la BDD qui porte les noms des membres de votre groupe.
// db : group_8