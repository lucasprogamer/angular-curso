import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[FundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private elementRef: ElementRef,
    private elementRender: Renderer
    ) {
      // console.log(this.elementRef);
      // this.elementRef.nativeElement.style.backgroundColor = 'yellow';

      this.elementRender.setElementStyle(
          elementRef.nativeElement,
           'background-color',
           'yellow'
           );
    }

}
