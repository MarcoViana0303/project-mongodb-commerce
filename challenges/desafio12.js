db.produtos.updateMany(
    {
        nome: { $ne: "McChicken" }, 
  }, 
  {
    $addToSet: {
        ingredientes: "ketchup",
    },
  },
);

db.produtos.find()
.projection({ _id: 0, nome: 1, ingredientes: 1 });