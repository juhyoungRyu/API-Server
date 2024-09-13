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
  console.log(`[POST] Return: ${JSON.stringify(req)}`)

  const objReturn: ObjReturn = {
    success: true,
    data: {
      uuid: getUuid(),
    },
    error: {
      code: 0,
      type: '',
      message: ''
    }
  }
  console.log(`[POST] Return: ${JSON.stringify(objReturn)}`)
  res.send(objReturn)
})

dataApi.post('/parseCaiRequest', (req: Request, res: Response) => {
  let time = Math.floor(Math.random() * 100)
  time = time > 5 ? 5 : time

  setTimeout(() => {
    const randomVal = Math.floor(Math.random() * Math.random() * 100)

    const objReturn: ObjReturn = {
      success: true,
      data: {
        responseKey: `${getUuid()}.json`,
        responseCount: randomVal === 0 ? 12 : randomVal,
        physicalFlag: false
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
  }, time * 1000)
})

dataApi.post('/createBusinessResourceForCai', (req: Request, res: Response) => {

  let time = Math.floor(Math.random() * 100)
  time = time > 15 ? 15 : time

  setTimeout(() => {

    const objReturn: ObjReturn = {
      success: true,
      data: {
        id: getUuid()
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

  }, time * 1000)
})

app.use('/api', dataApi) // 라우터를 앱에 등록
