import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunosDeactivateGuard } from '../guards/alunos.deactivate.guard';
import { AlunoDetalheResolver } from './guards/alunos-detalhe.resolver';


const AlunosRoutes: Routes = [
  { path: '', component: AlunosComponent, children: [
    { path: 'novo', component: AlunoFormComponent },
    { path: ':id', component: AlunoDetalheComponent,
      resolve: { aluno: AlunoDetalheResolver }
    },
    { path: ':id/editar', component: AlunoFormComponent,
      canDeactivate: [AlunosDeactivateGuard]
    },
  ] },

];

@NgModule({
  imports: [RouterModule.forChild(AlunosRoutes)],
  exports: [RouterModule]
})
export class AlunosRoutingModule { }
