import {NextFunction, Request, Response} from "express";
const blackList = [
    {
        ip: '176'
    }
]
export const blackListMiddleware = (req: Request, res: Response, next: NextFunction) =>{
    console.log('Black list middleware')
    const blockedId = blackList.find( a => a.ip === req.ip)
    if(blockedId){
        res.status(400).send('You are in a black list')
        return
    }else{
        next()
    }

}