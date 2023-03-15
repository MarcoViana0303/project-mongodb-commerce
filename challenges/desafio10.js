db.produtos.find(
    {
     $and: [
    {
      "valoresNutricionais.3.percentual": { $gte: 30, $lte: 40 },
    },
  ],

    },
).projection({ _id: 0, nome: 1 });