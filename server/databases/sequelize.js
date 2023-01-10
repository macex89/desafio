const Sequelize = require('sequelize')
const connection = {
    open: async () => {
        const sequelize = new Sequelize('popket', 'root', 'root', {
            host: 'localhost',
            timezone: '+01:00',
            dialect: 'mysql',
            port: 3306
        })
       
        await sequelize.authenticate()
        .then(() => {
            console.log("Sequelize DB Connect")
        })
        
        return sequelize;
    },
    close: async con => {
        await con.close();
        console.log("Sequelize DB Disconnect");
    }
}


module.exports = connection;