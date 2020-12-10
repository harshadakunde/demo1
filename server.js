const express = require('express')


const app = express()

app.get('/', (request, response) => {
  response.end("<h1>1156_Harshada Kunde</h1><h2>This is Node Code..Done Successfully...</h2>")
})


app.listen(3005, '0.0.0.0', () => {
  console.log('server started on port 3003')
})