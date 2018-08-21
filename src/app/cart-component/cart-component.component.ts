import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
  @Input()
  items = [];
  @Output()
  itemAdded = new EventEmitter<string>();
  newItem = '';

  constructor() {}

  ngOnInit() {}

  onAddItem() {
    this.itemAdded.emit(this.newItem);
  }
}
