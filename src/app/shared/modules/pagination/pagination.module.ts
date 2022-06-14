import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UtilitiesService } from "../../services/utilities.service";
import { PaginationComponent } from "./components/pagination.component";

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
  providers: [UtilitiesService]
})
export class PaginationModule {}
