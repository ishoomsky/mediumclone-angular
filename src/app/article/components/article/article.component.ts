import { Component, OnDestroy, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { getArticleAction } from "../../store/actions/get-article.action";
import { ActivatedRoute } from "@angular/router";
import { ArticleInterface } from "../../../shared/types/article.interface";
import { combineLatest, Observable, Subscription } from "rxjs";
import { articleSelector, errorSelector, isLoadingSelector } from "../../store/selectors";
import { currentUserSelector } from "../../../auth/store/selectors";
import { map } from "rxjs/operators";
import { CurrentUserInterface } from "../../../shared/types/current-user.interface";
import { deleteArticleAction } from "../../store/actions/delete-article.action";

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string | null;
  article: ArticleInterface | null;
  articleSubscription: Subscription;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;

  isAuthor$: Observable<any>;

  constructor(private store: Store, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initValues();
    this.initListeners();
    this.fetchData();
  }

  ngOnDestroy(): void {
    this.articleSubscription.unsubscribe();
  }

  initListeners() {
    this.articleSubscription = this.store.pipe(select(articleSelector)).subscribe((article: ArticleInterface | null) => {
      this.article = article;
    })
  }

  initValues() {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.isAuthor$ = combineLatest([
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))
    ]).pipe(
      map(([article, currentUser]: [ArticleInterface | null, CurrentUserInterface | null]) => {
        if (!article || !currentUser) {
          return false;
        }
        return currentUser.username === article.author.username;
      })
    )
  }

  fetchData() {
    if (this.slug) this.store.dispatch((getArticleAction({slug: this.slug})))
  }

  deleteArticle(): void {
    if (this.slug) this.store.dispatch(deleteArticleAction({slug: this.slug}))
  }
}
