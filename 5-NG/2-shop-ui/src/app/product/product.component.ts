import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input('value') product: any;

  currentTab: number = 1;

  reviews: Array<any> = [
    { stars: 1, author: 'nag@email.com', body: 'sapme-review-1' },
    { stars: 3, author: 'nag@email.com', body: 'sapme-review-2' }
  ]

  constructor() { }

  ngOnInit() {
  }
  changeTab(tabIdx: number) {
    this.currentTab = tabIdx;
  }
  isTabSelected(tabIdx: number) {
    return this.currentTab === tabIdx;
  }

}
