const express = require('express')
const axios = require('axios')
const categoryroute = require('./routers/kategori')
const app = express()
const port = 3000

//import route posts
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.use('/kategori', categoryroute)


app.listen(port, () => {
  console.log(`app running at http://localhost:${port}`)
})