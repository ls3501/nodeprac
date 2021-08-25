import * as dotenv from 'dotenv'

const env = dotenv.config().parsed;
if(!env){
  throw new Error('env is undefined');
}
export const config = {
  "categoryDataBase": {
    "username":env!['USERNAME'],
    "password":env!['DBPWD'],
    "database":env!['CATEGORY_DATABASE_NAME'],
    "host":env!['HOST'],
    "dialect":env!['DIALECT']
  },
}