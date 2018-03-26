import { Pipe, PipeTransform } from '@angular/core';
/**
 * AmountFormatter | Pipe
 *
 * @description :: Formater number to currency
 * @author:: Cristian Quintero <cristianqr22@gmail.com>
 */


@Pipe({name: 'amountFormatter'})
export class AmountFormatPipe implements PipeTransform {
    transform(value: number, ...args: any[]): string {
        if (value === null || value === undefined) {
           return '';
        }
       ;

      let prefix = '';
       if (args[0] === 'currency') {
         prefix = '$ ';
       }
      return prefix + value.toString().replace(/( |,)/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
}
