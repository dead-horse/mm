module.exports = process.env.MM_COV ? require('./lib-cov/mm') : require('./lib/mm');