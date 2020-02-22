import { Sequelize } from 'sequelize';


module.exports = new Sequelize('postgres', 'postgres', 'postgres',
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

  

