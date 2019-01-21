const router = require('koa-router')()
const userctrl = require('../controllers/T_USER.js')
const validate = require('koa2-validation')
const Joi = require('joi')

// const info = { 'session_key': 'Fa9EwVESiaXBBbBbV2CtgQ==', 'openid': 'oNBVd5RfBDAl4LRVfdfg3iV9nf6M' }
const userValidate = {
  insert: {
    body: {
      WX_ID: Joi.string().required()
    }
  },
  update: {
    body: {
      USER_ID: Joi.string().required()
    }
  }
}
router.prefix('/user')

router.post('/insert', validate(userValidate.insert), userctrl.insert)

router.post('/update', validate(userValidate.update), userctrl.update)

module.exports = router
