const bodyParser = require("body-parser");
const express = require("express")  //Importando o EXPRESS
const handlebars = require("express-handlebars") //Importando o Handlebars
const app = express() //ativando a função
const mongoose = require('mongoose');







app.use(express.json())

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get("/", (req, res) => { //estou falando q na rota '/' sendo assim a rota raiz
    res.render("principal")
})
//res.send("oi")}) // uma msg para ver se esta funcionando 

app.get("/teste", (req, res) => {
    res.render("cadastro")
})



app.listen(3333, () => console.log("servidor aberto")) // escohla de uma porta localhost '()=> é para executar uma função'












