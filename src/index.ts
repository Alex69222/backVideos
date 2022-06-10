import express, {Request, Response}  from 'express'
import cors from 'cors'
import bodyParser from "body-parser";
import {videosRouter} from "./routes/videos-router";
const app = express()
app.use(cors())
app.use(bodyParser.json())
const port = process.env.PORT || 5000

app.get('/', (req:Request, res: Response) => {
    res.send('Videos backend')
})

app.use('/videos', videosRouter)

app.listen(port, () => {
    console.log(`Viedos backend app listening on port ${port}`)
})