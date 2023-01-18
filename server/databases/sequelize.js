require('dotenv').config();
const Sequelize = require('sequelize');
// const fs = require('fs');

// const serverCa = fs.readFile(`./DigiCertGlobalRootCA.crt.pem`, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log('ssl cert sent');
//   });

const connection = {
    open: async () => {
        const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
            host: process.env.HOST,
            timezone: '+01:00',
            dialect: 'mysql',
            port: process.env.DB_PORT,
            // dialect: 'mysql',
            // dialectOptions: {  ssl: {
            //     ca: serverCa
            // }}
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