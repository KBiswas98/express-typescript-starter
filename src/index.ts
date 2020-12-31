import express, { Application, Request, Response, NextFunction } from 'express'
import morgan from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(morgan('dev'))
cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
})

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    const sum = (a: number, b: number) => {
        return a + b
    }

    res.send('Node start, ' + req.body.name)
})

app.listen(process.env.PORT || 4000, () =>
    console.log(`Server listening on port ${process.env.PORT}!`)
)
