db.produtos.updateMany({
    $and: [{
    valoresNutricionais: {
        $elemMatch: {
            tipo: "sódio",
            percentual: { $gte: 40 },
        },
    },
    },
    ],

}, {
   $push: {
    tags: "muito sódio",
   },
   });

db.produtos.find().projection({ _id: false, nome: true, tags: true });