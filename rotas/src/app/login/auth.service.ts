import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from './usuario';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado = false;
  mostrarMenuEmitter = new EventEmitter();

  constructor(
    private route: Router
  ) { }

  fazerLogin(usuario: Usuario) {
    if (usuario.nome === 'lucas' && usuario.senha === '123' ) {

      this.usuarioAutenticado = true;
      this.route.navigate(['/']);
      this.mostrarMenuEmitter.emit(true);
    } else {

      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);

    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
