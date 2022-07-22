import { Component, OnInit } from "@angular/core";
import { ArticleInputInterface } from "../../../shared/types/article-input.interface";
import { filter, Observable } from "rxjs";
import { BackendErrorsInterface } from "../../../shared/types/backend-errors.interface";
import { select, Store } from "@ngrx/store";
import { articleSelector, isSubmittingSelector, validationErrorsSelector } from "../../store/selectors";
import { ActivatedRoute } from "@angular/router";
import { getArticleAction } from "../../store/actions/get-article.actions";
import { map } from "rxjs/operators";
import { updateArticleAction } from "../../store/actions/update-article.actions";

@Component({
  selector: 'mc-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  initialValues$: Observable<any>;
  isSubmitting$: Observable<boolean>;
  isLoading$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  slug: string | null;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initValues();
    this.fetchData();
  }

  initValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
    this.initialValues$ = this.store.pipe(
      select(articleSelector),
      filter(Boolean),
      map((article: ArticleInputInterface) => ({
        title: article.title,
        description: article.description,
        body: article.body,
        tagList: article.tagList.join(' '),
      }))
    );

  }

  fetchData(): void {
    if (this.slug) this.store.dispatch(getArticleAction({slug: this.slug}));
  }

  onSubmit(articleInput: ArticleInputInterface) {
    if (this.slug && articleInput) {
      this.store.dispatch(updateArticleAction({slug: this.slug, articleInput}));
    }
  }
}
