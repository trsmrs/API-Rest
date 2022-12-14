const express = require('express')
// const path = require('path')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()


// conexão com o banco de dados
db.connect()


// habilita o server para receber dados JSON
app.use(express.json())

// definindo as rotas
app.use('/api', routes)


//  executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.info(`Server is listening on port ${port}`))
