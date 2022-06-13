import express, {NextFunction, Request, Response} from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import {videosRouter} from "./routes/videos-router";
import {blackListMiddleware} from "./middlewares/black-list-middleware";
const app = express()
app.use(cors())
app.use(bodyParser.json())
const port = process.env.PORT || 5000

app.set('trust proxy', true)
app.use( blackListMiddleware)

app.get('/', (req:Request, res: Response) => {
    const ip = req.socket.localAddress
    res.send('Videos backend! Your ip: ' + ip )
})

app.use('/videos', videosRouter)

app.listen(port, () => {
    console.log(`Videos backend app listening on port ${port}`)
})