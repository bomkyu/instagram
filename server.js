const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost', //IP정보
  user     : 'root',    //USER 정보
  password : '1234', //mysql root의 pw
  database : 'local_instagram' //database_name
});

module.exports = connection;