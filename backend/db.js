const sql= require('mysql');
require('dotenv').config();

let pool= sql.createPool({
    connectionLimit: 3,
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQLPASSWORD,
    database: 'MuleSoftAssessment',
    multipleStatements: true
})

pool.getConnection((err, connection) => {
    if(err) {
        if(err.code === 'PROTOCOL_CONNECTION_LOST')
        {
            console.error('Database connection was closed.');
        }
        if(err.code === 'ER_CON_COUNT_ERROR')
        {
            console.error('Database has too many connections');
        }
        if(err.code === 'ECONNREFUSED')
        {
            console.error('Database connection was refused.');
        }
    }
    if(connection)
      connection.release()
    return
})

module.exports= pool;