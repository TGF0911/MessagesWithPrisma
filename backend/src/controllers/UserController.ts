import { PrismaClient } from '@prisma/client'
import { Request, Response, text } from 'express'

const prisma = new PrismaClient()

class UserController {

  public async  create(req: Request, res: Response) {
    const { name, email } = req.body

    const user = await prisma.user.findOne({
      where: { email: email }
    })

    if (!user) {
      const user = await prisma.user.create({
        data: {
          name,
          email,
        }
      })
      res.json(user)
    }

    return res.status(400).json({'User already exists.' : text})

  }


  public async findAll(req: Request, res: Response) {
      const user = await prisma.user.findMany()
    return res.json(user)
    }

  public async delete (req: Request, res: Response) {
      const { id } = req.params
      await prisma.user.delete({
        where: {
          id: Number(id)
        }
      })
    }

  }

export default new UserController()