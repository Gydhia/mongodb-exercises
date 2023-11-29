// 1 Donnez tous les métaux de marque Philips ou Tefal qui coûtent 30 euros ou moins, qui sont rouges, ont une puissance de 2000 ou
// plus et disposent d'un espace de rangement pour le cordon et d'une fonction spray.
db.irons.find({
    $and: [
      { $or: [{ brand: 'Philips' }, { brand: 'Tefal' }] },
      { price: { $lte: 30 } },
      { "description.color": { $regex: /(red)/ } },
      { "technically.power": { $gte: 2000 } },
      { "extras": 'cord storage space' },
      { "extras": 'spray function' }
    ]
  })

// Donnez le modèle, le prix et la marque du métal le plus cher qui n'est pas rouge, pesant moins de 2 kilos, qui
// a au moins 2 points positifs et une hauteur maximale de 20 centimètres.
db.irons.findOne({
    $and: [
      { "description.color": { $ne: 'red' } },
      { "technically.weight": { $lt: 2 } },
      { "reviews.plus": { $exists: true, $not: { $size: 0 } } },
      { "measures.height": { $lte: 20 } }
    ]
  }, {
    _id: 0, // Exclure le champ _id
    model: 1,
    price: 1,
    brand: 1
  }, {
    sort: { price: -1 } // Trier par prix décroissant
  });



// 3 Faites une boucle à travers les métaux. Augmentez le prix de tous les métaux de 10 %.
db.irons.updateMany({}, { $mul: { price: 1.1 } })

// 4 Pendant les soldes, chaque marque accorde une remise spécifique.
// Les remises sont données sous forme d'objet littéral
// var discounts = {'Calor': 1, 'Tefal': 5, 'Philips': 3}
// Mettez à jour tous les prix des métaux.
// Remarque : pour parcourir le littéral objet des remises, vous pouvez utiliser le code suivant
// for (var key in discounts) { … }
var discounts = {'Calor': 1, 'Tefal': 5, 'Philips': 3};

for (var brand in discounts) {
  db.irons.updateMany({ brand: brand }, { $inc: { price: -discounts[brand] } });
}