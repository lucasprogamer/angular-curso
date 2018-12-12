import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  valor: number = 5;
  destroyCiclo: boolean = false ;
    constructor() {

      console.log(this.valor);
    }

    mudar() {
      this.valor++;
    }

    deletar() {
      this.destroyCiclo = true;
    }
}
