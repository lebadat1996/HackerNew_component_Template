import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input()
  like: number;
  @Output()
  likeClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  OnLikeClick() {
    this.likeClicked.emit();
  }
}
