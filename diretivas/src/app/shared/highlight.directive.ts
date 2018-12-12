import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input() defaltColor: string = 'white';
  @Input('highlight') highlightColor: string = 'yellow';


  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    this.backgroundColor = this.highlightColor;
  }


  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaltColor;
  }

  constructor( ) { }

  ngOnInit() {
    this.backgroundColor = this.defaltColor;
  }



}
