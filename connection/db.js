const {Pool} = require('pg');

const pool = new Pool({
    "user": "benanddalia",
    "host": "retaildb.c05agau0mljy.us-east-2.rds.amazonaws.com",
    "database": "retaildb",
    "password": "benanddaliaawsaccount",
    "port": 5432
});

pool.connect(function(err) {
  if (err) throw err;
});

module.exports = pool;
