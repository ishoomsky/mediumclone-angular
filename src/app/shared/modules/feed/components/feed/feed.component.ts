import { Component, Input } from "@angular/core";

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  @Input('apiUrl') apiUrlProps: string;
}
