const sequelize = require('./db/connection');
// const { User, Post } = require('./models');
const express = require('express');
const app = express();
const PORT = 3030 || process.env.PORT;
const router = require('./controller')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)


sequelize.sync({ force: true }).then(() => {
    console.log('Database has been synced')

    app.listen(PORT, () => {
        console.log(`Port ${PORT} was hit!`)
    })
})

