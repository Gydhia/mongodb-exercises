db.commandes.find(
    {
        DateDeCommande: {
            $gte : ISODate("2023-01-16T00:00:00"), $lt: ISODate("2023-01-17T00:00:00")
        }
    }
)

db.utilisateurs.updateOne(
    { UserID : 1},
    { $set : { AdresseEmail: "jean.dupont69@gmail.com"} } 
)
db.restaurants.updateOne({ RestaurantID: 102 }, { $set: { Fermeture: ISODate("2023-01-12T00:00:00") } })


db.restaurants.deleteOne({NomDuRestaurant: 'Sushi Express'})

db.produits.aggregate([
    {
        $group: { _id: null, moyennePrix: { $avg: "$Prix" } }
    },
    {
        $project: { _id: 0, moyennePrix: 1 }
    }
])

db.utilisateurs.aggregate([{ $group: { _id: "$Adresse", count: { $sum: 1 } } }])
