import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchemb'
})
@Injectable()
export class SearchembPipe implements PipeTransform {

  transform(items: any, term?: any): any {
    if (term === undefined) {
      return items;
    }
    return items.filter(function(item) {
      console.log(item);
      
      return item.NUM_REFE.toLowerCase().includes(term.toLowerCase()) ||
            //  item.NUM_PEDI.toLowerCase().includes(term.toLowerCase()) ||
             item.ADU_DESP.toLowerCase().includes(term.toLowerCase()) ||
             item.NOM_IMP.toLowerCase().includes(term.toLowerCase()) ||
             item.FEC_PAGO.toLowerCase().includes(term.toLowerCase());
    });
  }

}