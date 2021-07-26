const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');

const MongooseModule = require('./lib/mongoose/mongoose.module');
MongooseModule.connect(process.env.DB_URI);

app.listen(process.env.PORT || 8081);