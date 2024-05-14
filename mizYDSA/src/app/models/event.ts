import { Campaign } from './campaign';
import { Photo } from "./photo";

export interface Event {
  _id: string;
  title: string;
  date: Date;
  summary?: string;
  cover_image?: Photo;
  campaign?: Campaign;
}