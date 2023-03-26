const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost', //IP정보
  user     : 'root',    //USER 정보
  password : 'fkdldjs190', //mysql root의 pw
  database : 'instagram_local' //database_name
});

connection.connect();

connection.query('SELECT * from tb_user', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();