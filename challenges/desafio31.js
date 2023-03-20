db.produtos.find({
    $expr: {
        $gt: ["$curtidas", "$vendidos"],
    },
})
.projection({ _id: false, nome: true });
