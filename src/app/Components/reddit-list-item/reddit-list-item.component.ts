import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reddit-list-item',
  templateUrl: './reddit-list-item.component.html',
  styleUrls: ['./reddit-list-item.component.css'],
})
export class RedditListItemComponent implements OnInit {

  // the Component receives the input properties that it needs
  @Input() title: string = '';
  @Input() thumbnail: string = '';
  @Input() subreddit: string = '';
  @Input() link: string = '';

  constructor() {}

  ngOnInit(): void {}
}
