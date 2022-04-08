import express from 'express'

const port = process.env.PORT || 3333

const app = express()
app.use(express.static('./dist'))

const server = app.listen(port, function () {
  console.log('Sanity studio listening on http://localhost:' + port)
})

export default server
