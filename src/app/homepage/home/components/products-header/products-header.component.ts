import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss']
})
export class ProductsHeaderComponent {
  //send value out of component
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 12;

  onSortUpdated(newSort: string): void {
    // this.sortChange.emit(newSort);
    this.sort = newSort;
  }
  onItemsUpdated(count: number): void {
    // this.itemsCountChange.emit(count);
    this.itemsShowCount = count;
  }
  onColumnsUpdated(colsNum: number): void {
    this.columnsCountChange.emit(colsNum);
  }
}
