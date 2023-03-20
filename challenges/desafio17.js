db.produtos.aggregate([
    {
      $group: {
        _id: null,
        totalProdutos: { $sum: 1 }
      }
    },
    {
      $project: {
        _id: 0,
        franquia: "McDonalds",
        totalProdutos: 1
      }
    },
    {
      $out: "resumoProdutos"
    }
  ]);
  
  db.resumoProdutos.find({}, { franquia: 1, totalProdutos: 1, _id: 0 });