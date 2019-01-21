const router = require('koa-router')()
const userctrl = require('../controllers/T_USER.js')
const validate = require('koa2-validation')
const Joi = require('joi')

// const info = { 'session_key': 'Fa9EwVESiaXBBbBbV2CtgQ==', 'openid': 'oNBVd5RfBDAl4LRVfdfg3iV9nf6M' }
const userValidate = {
  register: {
    body: {
      openid: Joi.string().required()
    }
  }
}
router.prefix('/user')

router.post('/insert', validate(userValidate.insert), userctrl.insert)

module.exports = router
