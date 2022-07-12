import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PopularTagType } from "../../types/popular-tag.type";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from "rxjs/operators"
import { GetPopularTagsResponseInterface } from "./types/get-popular-tags-response.interface";

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  public getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';

    return this.http.get<GetPopularTagsResponseInterface>(url).pipe(
      map((response) => {
        return response.tags;
      })
    );
  }
}
