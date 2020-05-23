import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

class MessageController {

  public async create(req: Request, res: Response) {
    const { title, content } = req.body
    const userId = req.params


    const message = await prisma.message.create({
      data: {
        title,
        content,
        user: {
          connect: {
            id: Number(userId)
          }
        }
      }
    })

    return res.json(message)

  }

  public async findTitle(req: Request, res: Response) {
    const { title } = req.body

    const message = await prisma.message.findOne({
      where: { title: title }
    })
    return res.json(message)
  }

  public async findAllUser(req: Request, res: Response) {
    const userId = req.params

    const messages = await prisma.message.findMany({
      where: { userId: userId }
    })

    return res.json(messages)

  }

  //Melhorar function
  public async delete(req: Request, res: Response) {
    const { id } = req.params

    await prisma.message.delete({
      where: { id: Number(id) }
    })

    return res.status(200)

  }

}

export default new MessageController()