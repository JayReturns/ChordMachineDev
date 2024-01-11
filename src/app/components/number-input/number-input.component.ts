import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'number-input',
  templateUrl: './number-input.component.html',
  styleUrls: ['./number-input.component.scss']
})
export class NumberInputComponent {

  @Input() initialValue = 0;
  @Output() number = new EventEmitter<number>();

  minus() {
    this.initialValue--;
    this.number.emit(this.initialValue);
  }

  plus() {
    this.initialValue++;
    this.number.emit(this.initialValue);
  }

  inputChanged($event: any) {
    this.number.emit($event.target.value);
  }

}
