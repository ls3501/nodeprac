import * as dotenv from 'dotenv'

dotenv.config();

export const config = {
  "categoryDataBase": {
    "username":process.env.USERNAME,
    "password":process.env.DBPWD,
    "database":process.env.CATEGORY_DATABASE_NAME,
    "host":process.env.HOST,
    "dialect":process.env.DIALECT
  },
}