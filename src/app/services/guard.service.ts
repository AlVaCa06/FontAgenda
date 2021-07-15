import { Injectable } from '@angular/core';
import { CanActivate, Router, CanLoad } from '@angular/router';
import { UsuarioService } from './usuario.service';

@Injectable()
export class LoginGuard implements CanActivate, CanLoad {

  constructor ( public _usuarioService: UsuarioService, public router: Router ) { }

  canActivate() {
    if ( this._usuarioService.estaLogueado() ) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canLoad() {
    if ( this._usuarioService.estaLogueado() ) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
