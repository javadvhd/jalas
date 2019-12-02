// app
const koa = require('koa')
const app = new koa()

// cors
const cors = require('@koa/cors')
app.use(cors({}))

// bodyParser
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

// db
const database = require('./database/dbConnector')
database.connect('user_db')

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

const { port } = require('../../../packages/servicesPort.json').user
const server = app.listen(port)

module.exports = server
