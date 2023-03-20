db.produtos.updateMany({}, {
    $rename: { descricao: "descricaoSite" },
});

db.produtos.find().projection({ _id: false, nome: true, descricaoSite: true });