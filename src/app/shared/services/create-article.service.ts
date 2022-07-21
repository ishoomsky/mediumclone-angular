import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ArticleInputInterface } from "../types/article-input.interface";
import { Observable } from "rxjs";
import { ArticleInterface } from "../types/article.interface";
import { environment } from "../../../environments/environment";
import { map } from "rxjs/operators";
import { SaveArticleResponseInterface } from "../types/save-article-response.interface";

@Injectable()
export class CreateArticleService {

  constructor(private http: HttpClient) { }

  createArticle(articleInput: ArticleInputInterface): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + '/articles';

    return this.http.post<SaveArticleResponseInterface>(fullUrl, {article: articleInput}).pipe(
      map((response: SaveArticleResponseInterface) => response.article)
    )
  }
}
