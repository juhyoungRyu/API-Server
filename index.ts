import express, { Request, Response, Router } from 'express'
import { getUuid } from './src/utils/projectUtil'

import { ObjReturn } from './src/interface'
import { createCipheriv } from 'crypto'

const app = express()
app.use(express.json()) // JSON 본문 파싱 미들웨어 추가

app.listen(8080, () => {
  console.log(`Server is running at :8080`)
})

const dataApi: Router = express.Router()

dataApi.post('/create', (req: Request, res: Response) => {
  const secret = req.body.uuid
  const iv = (() => {
    const base = req.headers.authorization as string
    const signature = base.split('/')[2]

    return signature.slice(-16)
  })()

  const cipher = createCipheriv('aes-256-cbc', secret, iv)
  const encData = cipher.update(req.body.saveData, 'utf8', 'hex').concat(cipher.final('hex'))

  const objReturn: ObjReturn = {
    success: true,
    data: {
      secret,
      iv,
      encData
    },
    error: {
      code: 0,
      type: '',
      message: ''
    }
  }

  console.log(`[POST] Return: ${JSON.stringify(objReturn)}`)
  res.send(objReturn)
  return
})

app.use('/api', dataApi) // 라우터를 앱에 등록
