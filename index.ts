import express, { Request, Response, Router } from 'express'
import { getUuid } from './src/utils/projectUtil'

import { ObjReturn } from './src/interface'

const app = express()
app.use(express.json()) // JSON 본문 파싱 미들웨어 추가

app.listen(8080, () => {
  console.log(`Server is running at :8080`)
})

const dataApi: Router = express.Router()

dataApi.post('/create', (req: Request, res: Response) => {
  const name: string = req.body.name

  const objReturn: ObjReturn = {
    success: true,
    data: {
      id: getUuid(),
      name: `${name.replace('S3', 'S4')} (Rest API)`
    },
    error: {
      code: 0,
      type: '',
      message: ''
    }
  }

  res.send(objReturn)
  return
})

app.use('/api', dataApi) // 라우터를 앱에 등록
