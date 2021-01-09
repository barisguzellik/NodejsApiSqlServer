const sql = require('mssql');
var config = {
    server: 'localhost',
    database: 'database',
    user: 'user',
    password: 'password',
    options: {
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    }
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('connected...');
        return pool
    }).catch(err => {
        console.log(err);
    });

module.exports = { sql, poolPromise }