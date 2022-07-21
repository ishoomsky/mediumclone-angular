import { Component, OnInit } from "@angular/core";
import { ArticleInputInterface } from "../../../shared/types/article-input.interface";
import { Observable } from "rxjs";
import { BackendErrorsInterface } from "../../../shared/types/backend-errors.interface";
import { select, Store } from "@ngrx/store";
import { isSubmittingSelector, validationErrorsSelector } from "../../store/selectors";
import { createArticleAction } from "../../store/actions/create-actions";

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {
  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: []
  }

  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(articleInput: ArticleInputInterface) {
    this.store.dispatch(createArticleAction({articleInput}));
  }
}
