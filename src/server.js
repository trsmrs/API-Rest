const express = require('express')
const cors = require('cors')


const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()


// conexão com o banco de dados
db.connect()

// habilita o CORS

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://127.0.0.1:8080',
    'http://0.0.0.0:8080',
    'http://0.0.0.0:5500',
]

app.use(cors({
    origin: function(origin, cb){
        let allowed = true

        if(!origin) allowed = true

        if(!allowedOrigins.includes(origin)) allowed = false

        cb(null, allowed)
    }
}))

// habilita o server para receber dados JSON
app.use(express.json())

// definindo as rotas
app.use('/api', routes)


//  executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.info(`Server is listening on port ${port}`))
