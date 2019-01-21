import userModel from '../models/T_USER'
import uuid from '../utils/UUID'
class UserController {
  async insert (ctx) {
    console.log('-----------------------------新增用户接口---------------')
    const postData = ctx.request.body
    const uuids = uuid.getUuid()
    const param = [uuids, postData.NAME, postData.COMPANY, postData.TEL, postData.WX_ID, postData.IS_CARD]
    const insertData = await userModel.insert(param).then(resp => {
      return resp
    })
    const findData = await userModel.selectById(uuids).then(resp => {
      return resp
    })
    if (insertData) {
      console.log('-----------------------------新增用户成功---------------')
      ctx.body = {
        success: true,
        data: findData
      }
    }
  }
  update (ctx) {
    console.log('------------------------------修改用户接口--------------')
    const post = ctx.request.body
    console.log('post--------' + post.NAME)
    const param = [post.NAME, post.COMPANY, post.TEL, post.IS_CARD, post.USER_ID]
    const updateData = userModel.update(param).then(resp => {
      return resp
    })
    if (updateData) {
      console.log('---------------------------修改用户成功------------------')
      ctx.body = {
        success: true
      }
    }
  }
}
module.exports = new UserController()
