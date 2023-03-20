db.produtos.updateOne({
    nome: "Big Mac",
}, {
    $unset: { curtidas: "" },
});

db.produtos.find()
.projection({ _id: false, nome: true, curtidas: true });
