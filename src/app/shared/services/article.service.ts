import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { GetArticleResponseInterface } from "../types/get-article-response.interface";
import { ArticleInterface } from "../types/article.interface";
import { map } from "rxjs/operators";


@Injectable()
export class ArticleService {
  constructor(private http: HttpClient) {
  }

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = environment.apiUrl + '/articles/' + slug;
    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
      map((response) => response.article)
    );
  }
}
