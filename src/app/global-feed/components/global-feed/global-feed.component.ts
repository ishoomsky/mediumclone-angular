import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mc-tag-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}
