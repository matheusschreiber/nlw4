import express from 'express'
import cors from 'cors'

import routes from './router.js'
import { MyConnection } from './database'

MyConnection.initialize()

const app = express()

// app.use(express.json())
// app.use(routes)
// app.use(cors())

app.get('/users', (req, res) =>{
  return res.json({Mensagem: 'working users'});
})


app.listen(8080, ()=>console.log("Server running on port 8080"))


