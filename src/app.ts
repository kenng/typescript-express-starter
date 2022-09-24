import express, {Application, Request, Response } from 'express'
import sum from './sum';

const app:Application = express()

const port: number = 3001

app.get('/hello', (req: Request, res: Response) => {
    const total = sum(5, 6);
    res.send(`Hello World! ${total}`);
})

app.listen(port, function () {
    console.log(`App is listening on port ${port}`)
})
