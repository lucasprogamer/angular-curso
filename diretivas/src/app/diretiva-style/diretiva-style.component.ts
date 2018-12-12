import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-style',
  templateUrl: './diretiva-style.component.html',
  styleUrls: ['./diretiva-style.component.scss']
})
export class DiretivaStyleComponent implements OnInit {

  ativo: boolean = true;
  fz: number = 14;
  constructor() { }

  ngOnInit() {
  }

  mudarAtivo() {
    this.ativo = !this.ativo;
  }

}
