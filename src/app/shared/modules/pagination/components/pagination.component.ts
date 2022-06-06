import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: 'mc-pagination',
  styleUrls: ['./pagination.component.scss'],
  templateUrl: './pagination.component.html',
})
export class PaginationComponent implements OnInit {
  @Input('total') totalProps: number;
  @Input('limit') limitProps: number;
  @Input('currentPage') currentPageProps: number;
  @Input('url') urlProps: string;

  pagesCount: number;
  pages: Array<number>;

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = [];
  }
}
