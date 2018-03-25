import {Directive, ElementRef, HostListener, OnInit, Input} from '@angular/core';
import {NgControl, FormControl} from '@angular/forms';

@Directive({
  selector: '[amountInput]'
})
export class BigdecimalInputDirective implements OnInit {

  private inputFormControl: FormControl;

  private optionsToSetValue = {emitEvent: false, emitModelToViewChange: false};

  @Input() supportListener = false;

  constructor(private el: ElementRef, private control: NgControl) {
  }


  @HostListener('keydown', ['$event']) onKeyDown(event) {
    const e = <KeyboardEvent>event;
    if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A
      (e.keyCode === 65 && e.ctrlKey === true) ||
      // Allow: Ctrl+C
      (e.keyCode === 67 && e.ctrlKey === true) ||
      // Allow: Ctrl+V
      (e.keyCode === 86 && e.ctrlKey === true) ||
      // Allow: Ctrl+X
      (e.keyCode === 88 && e.ctrlKey === true) ||
      // Allow: home, end, left, right
      (e.keyCode >= 35 && e.keyCode <= 39)) {
      // let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }



  @HostListener('input', ['$event']) onEvent($event) {
    this.updateValues(this.inputFormControl.value);
  }

  @HostListener('focus', ['$event']) onBlur($event) {
    this.updateValues(this.inputFormControl.value);
  }

  /*
    @HostListener('focus', ['$event']) onBlur($event) {
      this.updateValues();
    }
  */
  updateValues(value: number) {
    if (value !== undefined && value !== null && value.toString() !== '') {
      const valueFormatted = this.addDelimiter(value);
      this.el.nativeElement.value = valueFormatted;
      const value_cleaned = this.el.nativeElement.value.replace(/( |,|\.)/g, '');
      this.inputFormControl.setValue(value_cleaned, this.optionsToSetValue);
    }
  }

  addDelimiter(value: number): string {
    if (value != null) {
    let formattedValue;
      let decimalValue;
      const lastPoint = value.toString().lastIndexOf('.');
      const lastComma = value.toString().lastIndexOf(',');

      if (lastComma >= 0 && lastPoint >= 0) {
        if (lastComma > lastPoint) {
          decimalValue = value.toString().substr(lastComma + 1);
          formattedValue = value.toString().substring(0, lastComma);
          formattedValue = formattedValue.replace(/(\D)/g, '');
        } else {
          decimalValue = value.toString().substr(lastPoint + 1);
          formattedValue = value.toString().substring(0, lastPoint);
          formattedValue = formattedValue.replace(/(\D)/g, '');
        }
      }
      if (formattedValue === undefined) {
        formattedValue = value.toString().replace(/(\D)/g, '');
      }
      if (decimalValue !== undefined) {
        formattedValue = formattedValue + '.' + decimalValue;
      }
      formattedValue = parseFloat(formattedValue);
      formattedValue = Math.round(formattedValue);
      return formattedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
  }

  ngOnInit(): void {

    this.inputFormControl = this.control.control as FormControl;

    this.updateValues(this.inputFormControl.value);

    if (this.supportListener) {
      this.inputFormControl.registerOnChange(() => {
        this.updateValues(this.inputFormControl.value);
      });
    }
  }
}
