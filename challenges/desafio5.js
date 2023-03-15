db.produtos.find({ 
    $or: [{
     curtidas: {
     $eq: 36,
     } },
    { vendidos: {
     $eq: 85,
     } },
 
    ],
 })
 .projection({ _id: 0, nome: 1, curtidas: 1, vendidos: 1 });