import {IComment} from './IComment';

export interface IPost {
  id: number;
  title: string;
  content: string;
  comments: IComment[];
  like: number;
}
