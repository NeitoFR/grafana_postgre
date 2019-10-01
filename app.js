const { Client } = require('pg')

const client = new Client({
    user: 'ingestion_test_user',
    password: 'ingestion_test_user',
    host: '10.227.53.90',
    database: 'ingestion_test',
    port: 5432,
  })
  client.connect((err) => {
      console.log(err);
      
  })
  client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  })