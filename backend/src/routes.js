const express = require('express')
const routes = express.Router();

const users = [{
  id: 1,
  name: "Lucas",
  login: "devlucasalexsandro@gmail.com",
  password: "123456"
}]

routes.post('/login', (req, res) => {
  const {login, password} = req.body;

  const user = users.find(user => user.login === login && user.password === password)
  if(user) {
    res.status(200).json(user)
  }
  res.status(401).json({
    msg: "Não deu :D"
  })
})

module.exports = routes;