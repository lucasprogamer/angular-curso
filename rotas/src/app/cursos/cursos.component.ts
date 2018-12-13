import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit, OnDestroy {

  cursos: any[];
  pagina: number;
  inscricao: Subscription;
  disabled: boolean;

  constructor(
    private cursosService: CursosService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  nextPage() {

    this.router.navigate(['/cursos'],
          {queryParams: {'pagina': ++this.pagina}}
      );
  }
  previousPage() {

    if (this.pagina > 1) {
      this.router.navigate(['/cursos'],
          {queryParams: {'pagina': --this.pagina}}
        );
    }
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
    this.route.queryParams.subscribe(
      (queryParamns: any) => {
        this.pagina = queryParamns['pagina'];

      }
    );
  }
  ngOnDestroy() {
   //this.inscricao.unsubscribe();
  }


}
