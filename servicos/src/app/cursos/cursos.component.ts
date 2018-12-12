import { Component, OnInit, Input } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent implements OnInit {


  cursos: string[];

  constructor(private cursosService: CursosService) {

      this.cursos = this.cursosService.getCursos();

   }

  ngOnInit() {
  }

  addCurso() {
    this.cursos;
  }

}
