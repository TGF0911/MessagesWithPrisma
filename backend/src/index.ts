import { PrismaClient } from '@prisma/client'
import express from 'express'

import UserController from './controllers/UserController'
import MessageController from './controllers/MessageController'

const app : express.Application = express()


const prisma = new PrismaClient()

app.use(express.json())

async function main(){

  userRoutes()
  messageRoutes()
}
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.disconnect()
  })


  function userRoutes(){
    app.post('/user', UserController.create)
    app.get('/user', UserController.findAll)
    app.delete('/user/:id', UserController.delete)
  }

  function messageRoutes(){
    app.post('/message/:userid', MessageController.create)
    app.get('/message/:userid', MessageController.findAll)
  }

  

app.listen(3333)