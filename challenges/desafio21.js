db.produtos.updateOne({
    nome: 'Cheddar McMelt'
}, {
    $pop: {
        ingredientes: 1
    }
});

db.produtos.find().projection({ _id: false, nome: true, ingredientes: true });