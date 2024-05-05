import { Event } from "./event";

export interface Photo {
    _id: string;
    title: string,
    date?:Date
    caption?:string,
    event?:string,
    url:string,
    tags: [string],
    credit: [string]
}


export interface PhotoGallery {
    photos: Photo[],
    event?: Event
  }