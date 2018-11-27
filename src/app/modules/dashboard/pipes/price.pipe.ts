import { Pipe, PipeTransform } from '@angular/core';
import * as numeral from 'numeral';
@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return numeral(value).format('0,0');
  }

}
