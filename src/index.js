const express = require('express')
const DB = require('./db.json')

const app = express()
const PORT = process.env.PORT || 3002

app.use(express.json())
app.get('/workouts', (req, res, next) => {
  req.DB = DB
  return res.json(req.DB.workouts)
})

app.get('/trainers', (req, res, next) => {
  req.DB = DB
  return res.json(req.DB.trainers)
})
app.get('/members', (req, res, next) => {
  req.DB = DB
  return res.json(req.DB.members)
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
