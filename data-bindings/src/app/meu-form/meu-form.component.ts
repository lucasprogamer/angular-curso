import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss']
})
export class MeuFormComponent implements OnInit {
  url = 'http://lucasouzaa.com';
  cursoAngular = true;
  urlImagem = 'https://picsum.photos/400/300';
  valor = '';
  valorSalvo = '';
  isMouseOver = false;
  nome = '';


  pessoa = {
    nome: 'Otavio',
    idade: 21
  };

  getValor() {
    return 1;
  }

  curtirCurso() {
    return true;
  }

  btnClick() {
    alert('hui');
  }

  onKeyUp(e) {
    this.valor = (<HTMLInputElement>e.target).value;

  }
  salvarValor(e) {
    this.valorSalvo = this.valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
