import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[Highlight]'
})
export class HighlightDirective {

  constructor( ) { }


  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = 'yellow';
  }


  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = 'white';
  }

}
