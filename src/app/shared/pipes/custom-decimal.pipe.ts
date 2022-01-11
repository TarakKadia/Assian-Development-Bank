import { Pipe, PipeTransform } from '@angular/core';
import {DecimalPipe} from '@angular/common';

@Pipe({
  name: 'customDecimal'
})
export class CustomDecimalPipe implements PipeTransform {
  transform(val: any, ...args: any[]) {
      let returnVal: any = val;
      if (typeof val == 'string') {
          val = parseInt(val, 10);
      }
      if (val) {
          const format = args[0] ? '1.0-2' : '1.0-0';
          returnVal = this.decimalPipe.transform(val, format);
      }
      return returnVal;
  }

  constructor(private decimalPipe: DecimalPipe) { }
}