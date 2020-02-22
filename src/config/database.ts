import { Sequelize } from 'sequelize';


module.exports = new Sequelize('example', 'furkan', '756ee75b',
  {
    host: 'localhost',
    dialect: 'postgres',
    pool:{
      max: 5,
      min: 0,
      idle: 10000
    },
    logging: false
  });

  

