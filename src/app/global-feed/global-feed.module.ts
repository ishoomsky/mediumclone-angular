import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BannerModule } from "../shared/modules/banner/banner.module";
import { FeedModule } from "../shared/modules/feed/feed.module";
import { GlobalFeedComponent } from './components/global-feed/global-feed.component';

const routes = [
  {
    path: '',
    component: GlobalFeedComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), FeedModule, BannerModule],
  declarations: [GlobalFeedComponent],
  exports: [GlobalFeedComponent],
})
export class GlobalFeed {}