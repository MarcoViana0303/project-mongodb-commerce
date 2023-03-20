db.produtos.updateMany({}, {
    $push: {
        tags: {
            $each: ["combo", "tasty"],
        },
    },
});

db.produtos.find().sort({ tags: 1 }).projection({ _id: false, nome: true, tags: true });