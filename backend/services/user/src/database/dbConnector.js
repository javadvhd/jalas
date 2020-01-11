const mongoose = require("mongoose");

exports.connect = dbName => {
  mongoose.connect(`mongodb://10.5.0.5:27017/${dbName}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });

  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => console.log(`Connected to ( ${dbName} ) database!`));
};
