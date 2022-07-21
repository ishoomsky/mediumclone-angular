import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateArticleComponent } from "./components/create-article/create-article.component";
import { RouterModule } from "@angular/router";
import { ArticleFormModule } from "../shared/modules/article-form/article-form.module";
import { CreateArticleService } from "../shared/services/create-article.service";
import { EffectsModule } from "@ngrx/effects";
import { CreateArticleEffect } from "./store/effects/create-article.effect";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([CreateArticleEffect]),
    StoreModule.forFeature('createArticle', reducers)
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService]
})
export class CreateArticleModule {}
