import { Component, OnInit } from '@angular/core';

// tslint:disable-next-line:import-blacklist
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {


  constructor() { }

  livro: any = {
    titulo: 'Learning JavaScript Data Structures and Algorithms 2nd ed',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'http://a.co/glqjpRP'
  };

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string;

  valorAsync = new Promise((resolve) => {
    setTimeout( () => resolve('Valor Assíncrono'), 2000);
  });

  valorAsync2 =  interval(2000).pipe(
    map(valor => 'Valor Assíncrono 2')
  );

  addCurso(valor) {
    this.livros.push(valor);
  }

  ngOnInit() {
  }

}
