import {Request, Response, Router} from "express";
import {videosRepository} from "../repositories/videos-repository";
import {titleValidatorMiddleware} from "../middlewares/titleValidatorMiddleware";
import {validationResultMiddleware} from "../middlewares/validationResultMiddleware";

export const videosRouter = Router({})

videosRouter.get('/', (req: Request, res: Response) => {
    const videos = videosRepository.getVideos()
    res.send(videos)
})
videosRouter.get('/:id', (req: Request, res: Response) => {
    const video = videosRepository.getVideo(+req.params.id)
    if (video) {
        res.send(video)
    } else {
        res.send(404)
    }

})
videosRouter.post('/',
    titleValidatorMiddleware,
    validationResultMiddleware,
    (req: Request, res: Response) => {

        const newVideo = videosRepository.createVideo(req.body.title)
        res.status(201).send(newVideo)
    })
videosRouter.delete('/:id', (req: Request, res: Response) => {
    // put your code here
    const videoIsDeleted = videosRepository.deleteVideo(+req.params.id)
    if (!videoIsDeleted) {
        res.send(404)
    } else {
        res.sendStatus(204)
    }
})
videosRouter.put('/:id',
    titleValidatorMiddleware,
    validationResultMiddleware,
    (req: Request, res: Response) => {
        const videoIsUpdated = videosRepository.updateVideo(+req.params.id, req.body.title)
        if (!videoIsUpdated) {
            res.send(404)
        } else {
            res.sendStatus(204)
        }
    })