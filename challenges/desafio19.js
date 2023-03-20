db.produtos.updateMany({}, {
    $pull: {
        ingredientes: "cebola",
    },
});

db.produtos.find().projection({ _id: false, nome: true, ingredientes: true });