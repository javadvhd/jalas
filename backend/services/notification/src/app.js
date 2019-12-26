// app
const koa = require('koa')
const app = new koa()

// cors
const cors = require('@koa/cors')
app.use(cors({}))

// .env file enable
require('dotenv').config({ path: '../.env' })

// bodyParser
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    ctx.status = error.status || 500
    console.log('error : ', error.message)
  }
})

// router
const Router = require('@koa/router')
const routerHandler = require('./router')

const router = new Router()
routerHandler(router)

app.use(router.routes())
app.use(router.allowedMethods())

const { port } = require('../../../packages/servicesPort.json').notification
const server = app.listen(port)

module.exports = server
