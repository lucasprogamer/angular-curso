import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../aluno';


@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: Aluno;
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
    this.inscricao = this.route.data.subscribe(
      (data) => {
        this.aluno = data.aluno;
      }
    );
  }
  ngOnDestroy() {
  if (this.inscricao) {
    this.inscricao.unsubscribe();
    }

  }

}
