const express = require('express')
// const path = require('path')

// const db = require('./database')
// const routes = require('./routes')

const app = express()


// conexão com o banco de dados
// db.connect()


// habilita o server para receber dados via post (form)
app.use(express.urlencoded({ extended: true }))

// definindo as rotas
// app.use("/", routes)


//  executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.info(`Server is listening on port ${port}`))
