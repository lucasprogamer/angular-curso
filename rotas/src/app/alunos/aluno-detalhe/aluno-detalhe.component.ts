import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { query } from '@angular/core/src/render3';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;
  alunos: any[];
  inscricao: Subscription;

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
    this.route.queryParams.subscribe(
      (params: any) => {
        const id = params['id'];
        this.aluno = this.alunosService.getAluno(id);
      }
    );
  }
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
