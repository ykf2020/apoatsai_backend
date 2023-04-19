const express = require("express");

const app = express();

app.get('/', (req, res) => {
  res.send('yayaya')
})

app.listen(8080, () => {
  console.log('server started!')
})