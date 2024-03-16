require('dotenv').config();

module.exports = {
  host: 'localhost',
  dialect: 'mysql',
  username: process.env.DATABASE_USENAME,
  password: process.env.DATABASE_PASSWORD,
  port: process.env.DATABASE_PORT,
  database: 'escola',
  define: {
    timestamps: true,
    underscored: true,
    createAt: 'created_at',
    updateAt: 'updated_at',
  },
  timezone: '+00:00',
};
