db.produtos.find({
 
    vendidos: {
        $gt: 50,
        $lt: 100
     }
    }, 
    
    { nome: true, vendidos: true })
.sort({ vendidos: 1 }).projection({ _id: 0, nome: 1, vendidos: 1});