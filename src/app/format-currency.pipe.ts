import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency' //CamelCase
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: any, locale: 'pt-BR'): any {
    //return new Intl.NumberFormat(locale, {style: 'currency', currency: 'BRL'}).format(value);
    return new Intl.NumberFormat(locale).format(value);
  }

}
