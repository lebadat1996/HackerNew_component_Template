import {Component, OnInit} from '@angular/core';
import {IPost} from '../IPost';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: IPost[] = [
    {
    id: 0,
    title: 'Hello World',
    content: 'Today is a good day',
    like: 10,
    comments: [{
      id: 1,
      content: 'Xin chao Ba Dat'
    }]
  },
    {
      id: 1,
      title: 'Hello World',
      content: 'Today is not good day',
      like: 15,
      comments: [{
        id: 1,
        content: 'Hello Le Ba Dat'
      }]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
