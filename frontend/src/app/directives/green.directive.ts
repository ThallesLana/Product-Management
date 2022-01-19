import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appGreen]'
})
export class GreenDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'rgba(17, 140, 79, 1)'
   }

}
