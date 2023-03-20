db.produtos.countDocuments({
    nome: {
        $regex: /mc/, $options: "i",
    },
});
