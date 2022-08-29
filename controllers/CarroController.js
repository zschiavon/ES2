const carros = [
    {modelo: "Corsa", marca: "Chevrolet", ano: 2010, preco: 27800},
    {modelo: "Sandero", marca: "Renault", ano: 2014, preco: 32800},
    {modelo: "Uno Mille", marca: "Fiat", ano: 2017, preco: 31900}
]
export const carroIndex = (req, res) =>{
    res.json(carros)
 }