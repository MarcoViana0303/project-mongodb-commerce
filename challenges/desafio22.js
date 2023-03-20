// 1
db.produtos.updateMany({}, {
    $set: { 
      vendasPorDia: [0, 0, 0, 0, 0, 0, 0],
       },
  });
  
  // 2
  db.produtos.updateOne({
      nome: "Big Mac",
  }, {
      $inc: {
          "vendasPorDia.3": 60,
      },
  });
  
  // 3
  db.produtos.updateMany({
      tags: "bovino",
  }, {
      $inc: {
          "vendasPorDia.6": 120,
      },
  });
  
  // Query 4
  db.produtos.find().projection({ _id: false, nome: true, vendasPorDia: true });