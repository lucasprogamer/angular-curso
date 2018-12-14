import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';


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

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

  ngOnInit() {
    this.alunos = this.alunosService.getAlunos();
    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        this.aluno = this.alunosService.getAluno(id);

      }
    );
  }
  ngOnDestroy() {
  if (this.inscricao) {
    this.inscricao.unsubscribe();
    }

  }

}
