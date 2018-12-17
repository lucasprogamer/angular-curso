import { Component, OnInit } from '@angular/core';
import { AlunosService } from './alunos.service';
import { IformCanDeactivate } from './aluno-form/iform.candeactivate';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.scss']
})
export class AlunosComponent implements OnInit , IformCanDeactivate {

   alunos: any[];

  constructor(
    private alunosService: AlunosService
  ) { }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
  }
  podeDesativar() {
    return true;
  }

}
