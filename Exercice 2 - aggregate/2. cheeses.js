//1 Précisez le nombre de variants de fromages par type de fromage. Mettez le type de fromage en majuscules.
db.cheeses.aggregate([
    {
        $group: {
            _id: {$toUpper: "$properties.cheesetype" },
            count: { $sum : 1 }
        }
    },
    {
        $project: {
            _id: 1,
            count : "$count"
        }
    }
])

//2 Donnez le nombre de fromages par fromagerie
db.cheeses.aggregate([
    {
        $group: {
            _id: "$factory",
            count: { $sum: 1 }
        }
    }
    ]
)