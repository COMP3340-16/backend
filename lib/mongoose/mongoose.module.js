const mongoose = require('mongoose');

const MongooseModule = {};

MongooseModule.connect = function connect(uri, moreOptions = {}, success) {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
    ...moreOptions
  }

  mongoose
    .connect(uri, options)
    .then(() => {
      console.log(`Connected to ${uri}`);
      if (success) success();
    })
    .catch((error) => console.log(`Database Error: ${error}`))
}

module.exports = MongooseModule;