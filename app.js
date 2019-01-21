const middleware = require('./middleware')
const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const path = require('path')
const index = require('./routes/index')
const users = require('./routes/T_USER')
// const birthday = require('./routes/birthday')
// const memorial = require('./routes/memorial')

// error handler
onerror(app)

// middlewares
middleware(app)
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(path.join(__dirname, '/public')))

// app.use(views(path.join(__dirname, '/views', {
//   extension: 'pug'
// })))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
// app.use(birthday.routes(), birthday.allowedMethods())
// app.use(memorial.routes(), memorial.allowedMethods())
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
})

module.exports = app
