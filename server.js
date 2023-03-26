const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '', //IP정보
  user     : '',    //USER 정보
  password : '', //mysql root의 pw
  database : '' //database_name
});

connection.connect();

connection.query('SELECT * from tb_user', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();