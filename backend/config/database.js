module.exports = {
  username: process.env.DB_USERNAME || "mhe",
  password: process.env.DB_PASSWORD || "1234",
  database: process.env.DB_DATABASE || "zay",
  host: process.env.DB_HOSTNAME || "localhost",
  //host: 'db',
  dialect: "mysql"
}

//pass:1234
//user:mhe