db.produtos.find({
    vendidos: { $mod: [5, 0] },
})
.projection({ _id: false, nome: true, vendidos: true });
