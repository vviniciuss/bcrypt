const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('estudoback','root','senai',{
    host: "localhost",
    dialect: "mysql"
})

// sequelize.authenticate().then(()=>{
//     console.log("Banco de dados conectado!")
// }).catch((err)=>{
//     console.error("Erro de conexão com o banco de dados!", err)
// })

module.exports = sequelize