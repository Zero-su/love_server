class HandleDB {
  constructor (db) {
    this.db = db
  }
  sql (sql, param, mode) {
    let _self = this
    mode = mode === 'all' ? 'all' : mode === 'get' ? 'get' : 'run'
    return new Promise((resolve, reject) => {
      _self.db[mode](sql, param,
        function (err, data) { // data: Array, Object
          if (err) {
            reject(new Error(err))
          } else {
            if (data) {
              resolve(data) // 返回数据查询成功的结果
            } else {
              resolve('success') // 提示 增 删 改 操作成功
            };
          };
        }
      )
    })
  }
}
export default HandleDB
