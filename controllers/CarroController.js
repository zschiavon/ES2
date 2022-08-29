const carros = [
    {modelo: "Corsa", marca: "Chevrolet", ano: 2010, preco: 27800},
    {modelo: "Sandero", marca: "Renault", ano: 2014, preco: 32800},
    {modelo: "Uno Mille", marca: "Fiat", ano: 2017, preco: 31900}
]
export const carroIndex = (req, res) =>{
    res.json(carros)
 }

 export const carroStore = (req, res) =>{
    //destructing
    const {modelo, marca, ano, preco} = req.body
    carros.push({modelo, marca, ano, preco})
    
    res.json({"msg": "Ok, Carro inserido com sucesso."})
}
export const carroUptade = (req, res) =>{
    //destructing
    const {id} = req.params
    const {modelo, marca, ano, preco} = req.body
    if(carros.length < id){
        res.status(401)
        res.json({"msg": "Ops, parece que o pneu furou..."})
        return
    }
    
    carros[id-1].modelo = modelo 
    carros[id-1].marca = marca 
    carros[id-1].ano = ano 
    carros[id-1].preco = preco 

    res.json({"msg": "Ok, Carro atualizado com sucesso."})
}

export const carroDelete = (req, res) =>{
    //destructing
    const {id} = req.params
    
  
    if(carros.length < id){
        res.status(401)
        res.json({"msg": "Ops, parece que o pneu furou..."})
        return
    }
    carros.splice(id-1, 1)
    res.json({"msg": "Carro excluído com sucesso."})
}


export const carroShow = (req, res) =>{
    //destructing
    const {id} = req.params

  
    if(carros.length < id){
        res.status(401)
        res.json({"msg": "Ops, parece que o pneu furou..."})
        return
    }
    res.json(carros[id-1])
}