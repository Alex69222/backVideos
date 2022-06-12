import express, {NextFunction, Request, Response} from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import {videosRouter} from "./routes/videos-router";
const app = express()
app.use(cors())
app.use(bodyParser.json())
const port = process.env.PORT || 5000

app.use( (req:Request, res: Response, next: NextFunction)=>{
    const ip = req.ip
    // console.log(ip)
    next()
})

app.get('/', (req:Request, res: Response) => {
    const ip = req.ip
    res.send('Videos backend! Ypur ip: ' + ip )
})

app.use('/videos', videosRouter)

app.listen(port, () => {
    console.log(`Videos backend app listening on port ${port}`)
})