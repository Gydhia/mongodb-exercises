// 1 compter le nombre de personnes par âge, trier par âge décroissant
db.people.aggregate([
    {
        $group: {
            _id: "$age",
            count: { $sum: 1}
        }
    },
    {
        $sort: { _id: -1 }
    }
])