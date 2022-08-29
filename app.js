import express  from 'express'
import routes from './routes/routes.js'


const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.send("Sistema de Controle de Veículos")
})

app.listen(port, () =>{
    console.log('Ouvindo na porta 3000');
})


app.use(routes)