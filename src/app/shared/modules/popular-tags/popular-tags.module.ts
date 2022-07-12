import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ErrorMessageModule } from '../error-message/error-message.module';
import { LoadingModule } from '../loading/loading.module';
import { PopularTagsComponent } from './components/popular-tags/popular-tags.component';
import { PopularTagsService } from './popular-tags.service';
import { GetPopularTagsEffect } from './store/effects/get-popular-tags.effect';
import { reducers } from './store/reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    LoadingModule,
    RouterModule,
    ErrorMessageModule,
  ],
  providers: [PopularTagsService],
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
})
export class PopularTagsModule {}
