db.produtos.find(
    {
       "valoresNutricionais.0.tipo": "calorias",
       
       "valoresNutricionais.0.quantidade": {
        $lt: 500
       }

    }).projection({ _id: 0, nome: 1 });