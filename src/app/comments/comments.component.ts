import {Component, Input, OnInit} from '@angular/core';
import {IComment} from '../IComment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input()
  comments: any;

  constructor() { }

  ngOnInit(): void {
  }

}
