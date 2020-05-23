import { PrismaClient } from '@prisma/client'
import { Request, Response, text } from 'express'

const prisma = new PrismaClient()

class SessionController{

  public async login( req: Request, res : Response) {
    const {email} = req.body

    const user = prisma.user.findOne({
      where : {email : email},
      select : {
        name : true
      }
    })
    if(!user){
      res.status(400).json({'User not found.': text}) 
    }

      return res.json(user)
  }

}

export default new SessionController()