import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

class MessageController {

  public async create(req: Request, res: Response) {
    const { title, content} = req.body
    const userId = req.params


    const message = await prisma.message.create({
      data: {
        title,
        content,
        user: {
          connect: {
            id : Number(userId)
          }
        }
      }
    })

    res.json(message)

  }

  public async findAll(req: Request, res: Response){
    const userId = req.params

    const messages = await prisma.message.findMany({
      where : {userId : userId}
    })

    res.json(messages)

  }

}

export default new MessageController()