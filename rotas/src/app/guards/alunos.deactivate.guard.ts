
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { IformCanDeactivate } from '../alunos/aluno-form/iform.candeactivate';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IformCanDeactivate> {
  canDeactivate(
    component: IformCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    console.log('aeeeeee');
    return component.podeDesativar();

  }
}
