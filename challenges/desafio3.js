db.produtos.find({}, { nome: true, vendidos: true })
.sort({ vendidos: -1 }).limit(1)
.projection({ _id: 0, nome: 1, vendidos: 1 });