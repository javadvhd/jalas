const mongoose = require('mongoose')

exports.connect = dbName => {
  const database = mongoose.connect(`mongodb://127.0.0.1:27017/${dbName}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })

  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'connection error:'))
  db.once('open', () => console.log(`Connected to ( ${dbName} ) database!`))
  return database
}
