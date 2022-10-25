const express = require('express');
const app = express();


app.get("/", (req, res) =>{
  return res.json({
    message: "Olá pessoal",
    pessoa: ["Helberte", "costa"],
    id: 15
  });
});


app.listen('3000', () => console.log('server 3000'));