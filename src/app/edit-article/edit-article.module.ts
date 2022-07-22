import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditArticleComponent } from "./components/create-article/edit-article.component";
import { RouterModule } from "@angular/router";
import { ArticleFormModule } from "../shared/modules/article-form/article-form.module";
import { EffectsModule } from "@ngrx/effects";
import { UpdateArticleEffect } from "./store/effects/update-article.effect";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./store/reducers";
import { EditArticleService } from "./services/edit-article.service";
import { ArticleService as SharedArticleService } from "../shared/services/article.service";
import { GetArticleEffect } from "./store/effects/get-article.effect";
import { LoadingModule } from "../shared/modules/loading/loading.module";

const routes = [
  {
    path: 'articles/:slug/edit',
    component: EditArticleComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule,
    EffectsModule.forFeature([UpdateArticleEffect, GetArticleEffect]),
    StoreModule.forFeature('editArticle', reducers),
    LoadingModule
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService]
})
export class EditArticleModule {}
