import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  incrementa() {

    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {

   if (this.valor > 0) {
    this.campoValorInput.nativeElement.value--;
    this.mudouValor.emit({ novoValor: this.valor });

   }
  }
}
