const dotenv = require('dotenv');
dotenv.config();
const MongooseModule = require('../lib/mongoose/mongoose.module');
MongooseModule.connect(process.env.DB_URI, {}, async () => {
  console.log('starting init_admin..');
  await make_admin();
  process.exit(0);
});

const make_admin = async () => {
  const UserService = require('../api/users/user.service');
  await UserService.create({
    username: 'admin',
    password: 'admin',
    email: 'admin@example.com',
    is_admin: true
  });
  console.log('done.');
}