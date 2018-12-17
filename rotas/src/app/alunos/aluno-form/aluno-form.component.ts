import { Component, OnInit, OnDestroy } from '@angular/core';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IformCanDeactivate } from './iform.candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss']
})
export class AlunoFormComponent implements OnInit, OnDestroy, IformCanDeactivate {

  aluno: any;
  inscricao: Subscription;

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {

        const id = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno == null) {
          this.aluno = {};
        }
      }
    );
  }
  ngOnDestroy() {
    if(this.inscricao) {
      this.inscricao.unsubscribe();
    }
  }
  podeDesativar() {
    return true;
  }

}
