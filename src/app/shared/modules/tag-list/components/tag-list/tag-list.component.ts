import { Component, Input } from '@angular/core';
import { PopularTagType } from 'src/app/shared/types/popular-tag.type';

@Component({
  selector: 'mc-tag-list',
  templateUrl: './tag-list.component.html',
  styles: [],
})
export class TagListComponent {
  @Input('tags') tagsProps: Array<PopularTagType>;
}
