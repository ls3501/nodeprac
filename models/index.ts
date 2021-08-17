import {Sequelize} from 'sequelize';
import {config} from '../config/config'


// export const sequelize = new Sequelize('typescript_test', 'root','Jaehyeon2!',{
//     host : 'localhost',
//     dialect : 'mysql',
// })


export const sequelize = new Sequelize(
    config.categoryDataBase.database||'',
    config.categoryDataBase.username||'',
    config.categoryDataBase.password,
    {
        host: config.categoryDataBase.host,
        dialect: 'mysql'
    }
)
