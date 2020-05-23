import {Router} from 'express'

import UserController from './controllers/UserController'
import MessageController from './controllers/MessageController'
import SessionController from './controllers/SessionController'


const routes = Router()

  routes.post('/user', UserController.create)
  routes.get('/user', UserController.findAll)
  routes.delete('/user/:id', UserController.delete)
  
  routes.post('/message/:userId', MessageController.create)
  routes.get('/message/:userId', MessageController.findAllUser)
  routes.get('/message', MessageController.findTitle)
  routes.delete('/message/:id', MessageController.delete)

  routes.get('/session', SessionController.login)


export default routes