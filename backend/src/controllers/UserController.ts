import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

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

    res.send('Email já existe')

  }


  public async findAll(req: Request, res: Response) {
    const user = await prisma.user.findMany()
    res.json(user)
  }

  public async delete(req: Request, res: Response){
    const {id} = req.params
    await prisma.user.delete({
      where : {
        id : Number(id)
      }
    })
  }

}

export default new UserController()