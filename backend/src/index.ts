import { PrismaClient } from '@prisma/client'
import express from 'express'

import routes from './routes'

const app: express.Application = express()

const prisma = new PrismaClient()

app.use(express.json())

async function main() {

  app.use(routes)
}
main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.disconnect()
  })
app.listen(3333)