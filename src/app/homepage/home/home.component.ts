import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cols = 3;
  constructor(
  
  ) {}
  ngOnInit(): void {
    
  }
  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    // this.rowHeight = ROWS_HEIGHT[colsNum];
  }
}
