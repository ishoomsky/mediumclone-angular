import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PaginationComponent } from "./components/pagination.component";

@NgModule({
  imports: [CommonModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
})
export class PaginationModule {}
