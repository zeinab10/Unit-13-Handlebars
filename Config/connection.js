var mysql = require("./node_modules/mysql");
var connection = mysql.createConnection({
    host: "localhost",
    port: 3000,
    user: "root",
    password: "zj526670",
    database:""
});

//Make connection

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;