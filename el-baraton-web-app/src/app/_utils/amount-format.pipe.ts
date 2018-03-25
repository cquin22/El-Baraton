import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'amountFormatter'})
export class AmountFormatPipe implements PipeTransform {
    transform(value: number, ...args: any[]): string {
        if (value === null || value === undefined) {
           return '';
        }
//        return value.toString().replace(',', '');
       ;
//    this.value = this.value.replace(/,/g,"");

      let prefix = '';
       if (args[0] === 'currency') {
         prefix = '$ ';
       }
      return prefix + value.toString().replace(/( |,)/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}
