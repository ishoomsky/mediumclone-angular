import { Component } from "@angular/core";

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent {
  initialValues = {
    title: 'foo',
    description: 'bar',
    body: 'asdfasdfasdf',
    tagList: ['a', 'b', 'c']
  }

  onSubmit(res: any) {
    console.log('sub parent', res)
  }
}
