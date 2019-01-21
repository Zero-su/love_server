const path = require('path')

module.exports = {
  secret: 'jwt demo',
  dbFile: './db/test.db',
  log: {
    logLevel: 'debug', // 指定记录的日志级别
    dir: path.resolve(__dirname, '../logs'), // 指定日志存放的目录名
    projectName: 'birthday', // 项目名，记录在日志中的项目信息
    ip: '0.0.0.0' // 默认情况下服务器 ip 地址
  }
}
