import {videos} from "./db";

export const  videosRepository = {
    getVideos(){
        return videos
    },
    getVideoById(id: number){
        return videos.find(v => v.id === id)
    },
    createVideo(title: string){
        const newVideo = {
            id: +(new Date()),
            title: title,
            author: 'it-incubator.eu'
        }
        videos.push(newVideo)
        return newVideo
    },
    deleteVideoById(id: number){
        const index = videos.findIndex(v => v.id === id)
        if(index === -1){
            return false
        }else{
            videos.splice(index, 1)
            return true
        }
    },
    updateVideoById(id: number, newTitle: string){
        const video = videos.find(v => v.id === id)

        if(video){
            video.title = newTitle
            return true
        }else{
            return false
        }
    }
}