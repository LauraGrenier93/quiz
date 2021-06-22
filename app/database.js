const {
  Sequelize,
} = require('sequelize');
/*
const sequelize = new Sequelize(process.env.PG_URL, {
  define: {
    timestamps: false,
  },
  */
 
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  define: {
    timestamps: false,
  },
  dialect: 'postgres',
  ssl: true,
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, //
    },
  },
});

module.exports = sequelize;