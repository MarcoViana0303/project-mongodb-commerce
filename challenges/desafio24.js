db.produtos.updateMany({}, {
    $push: {
     valoresNutricionais: {
       $each: [],
       $sort: { percentual: -1 },
     },
 } });
 
 db.produtos.find().projection({ _id: false, nome: true, valoresNutricionais: true });