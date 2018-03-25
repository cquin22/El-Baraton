import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-quantity-control',
  templateUrl: './quantity-control.component.html',
  styleUrls: ['./quantity-control.component.scss']
})
export class QuantityControlComponent implements OnInit {

  @Input() public size: string;

  @Input() public selectQuantity: number;

  @Output() public changeValue = new EventEmitter();

  public defaultQuantity: number = 1;

  constructor() { }

  ngOnInit() {
    if(this.selectQuantity){
      this.defaultQuantity = this.selectQuantity;
    }
  }

  public add(){
    this.defaultQuantity = this.defaultQuantity + 1;
    this.changeValue.emit(this.defaultQuantity);
  }

  public remove(){
    if(this.defaultQuantity > 1){
      this.defaultQuantity = this.defaultQuantity - 1;
      this.changeValue.emit(this.defaultQuantity);
    }
  }

}
