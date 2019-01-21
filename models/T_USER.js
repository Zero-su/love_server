import db from '../db'
import HandleDB from '../utils/HandleDB'

const handledb = new HandleDB(db.sqlite3)

const UserModel = {
  insert: async (param) => {
    const sql = `
    INSERT INTO T_USER (USER_ID,NAME,COMPANY,TEL,WX_ID,IS_CARD)
    VALUES ($USER_ID, $NAME, $COMPANY, $TEL, $WX_ID, $IS_CARD)
    `
    return handledb.sql(sql, param, 'run')
  },
  selectById: async (param) => {
    const sql = `
    select * from T_USER where USER_ID = $USER_ID
    `
    return handledb.sql(sql, param, 'all')
  },
  update: async (param) => {
    const sql = `
    update T_USER set NAME = $NAME,COMPANY=$COMPANY,TEL=$TEL,IS_CARD=$IS_CARD where USER_ID=$USER_ID
    `
    return handledb.sql(sql, param, 'run')
  }
}
export default UserModel
