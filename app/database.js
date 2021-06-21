  
const {
  Sequelize,
} = require('sequelize');

const sequelize = new Sequelize(DATABASE_URL, {
  define: {
    timestamps: false,
  },
  dialect: 'postgres',
  ssl: true,
  protocol: 'postgres',
  logging: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    },
  },
});

module.exports = sequelize;

module.exports = sequelize;