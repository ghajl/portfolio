const env = process.env.NODE_ENV || 'development';
const isProduction = env === 'production';
const isDebug = env === 'development';
const isClient = typeof window !== 'undefined';

module.exports = {
  isProduction,
  isDebug,
  isClient,
};
