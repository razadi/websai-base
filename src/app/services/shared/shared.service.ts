import { Injectable } from '@angular/core';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  position = ['bottom-left', 'bottom-right', 'top-right', 'top-left', 'bottom-center', 'top-center', 'mid-center'];
  icons = ['success', 'error', 'info', 'warning'];

  constructor() { }

  setToast(head, texto, tipo = 'info') {
    $.toast({
      heading: head,
      text: texto,
      position: 'bottom-center',
      loaderBg: '#f33c49',
      icon: tipo,
      hideAfter: 6000,
      stack: 6
    });
  }

  findIndexByKeyValueNum(_array, key, value) {
    // console.log(_array.length);    
    for (let i = 0; i < _array.length; i++) { 
      console.log(i, _array[i][key], value);        
      if (_array[i][key] === Number(value)) {   
            return i;
        }
    }
    return -1;
  }

  findIndexByKeyValueStr(_array, key, value) {
    // console.log(_array.length);    
    for (let i = 0; i < _array.length; i++) { 
      console.log(i, _array[i][key], value);        
      if (_array[i][key] === value) {   
            return i;
        }
    }
    return -1;
  }

}
