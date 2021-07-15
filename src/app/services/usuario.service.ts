
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
//import { Servicio } from '../models/servicio.model';
import { environment } from '../../environments/environment';  

import { Router } from '@angular/router';
import swal from 'sweetalert2';

import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducers';
import { SetUserAction } from '../store/actions/auth.actions';
import { ActivarLoadingAction, DesactivarLoadingAction } from '../store/actions/ui.actions';


@Injectable()
export class UsuarioService {

  usuario: Usuario;

  constructor(public http: HttpClient,
              private store: Store<AppState>,
              public router: Router) {
                this.cargarStorage();
              }

  estaLogueado() {
    return ( this.usuario ) ? true : false;
  }

 

  cargarStorage() {
    if ( localStorage.getItem('usuario') ) {
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else {
      this.usuario = null;
    }
  }

  guardarStorage( usuario: Usuario ) {
    localStorage.setItem('usuario', JSON.stringify( usuario ));
    //localStorage.setItem('url', usuario.root);
    this.usuario = usuario;
  }

  cerrarSesion() {
    this.usuario = null;
    localStorage.removeItem('usuario');
    localStorage.removeItem('url');
    this.router.navigate(['/login']);
  }

  login (usuario: Usuario, recordar: boolean = false) {
    if ( recordar ) {
      localStorage.setItem('email', usuario.correo);
    } else {
      localStorage.removeItem('email');
    }

    this.store.dispatch( new ActivarLoadingAction() );

    const url = environment + '/Login';
    return this.http.post(url, usuario).pipe(
    map( (resp: any) => {
      this.guardarStorage(resp);
      this.store.dispatch( new DesactivarLoadingAction() );
      this.store.dispatch( new SetUserAction ( resp ) );
      return resp;
    }));
  }

  cargarPromedio() {
    const url = environment + '/rating';
    return this.http.get( url );
  }

  cargarUsuarios( desde: number = 0 ) {
    let url = environment + '/usuarios?desde=' + desde;
    return this.http.get( url );
  }

  buscarUsuarios( termino: string ) {
    let url = environment + '/usuarios?termino=' + termino;
    return this.http.get( url ).pipe(
                map( (resp: any) => resp ));
  }

  cargarUsuaActivos( ) {
    let url = environment + '/usuarios/activos';
    return this.http.get( url );
  }

  guardarUsuario (usuario: Usuario) {
    let url = environment + '/usuario';

    return this.http.post( url, usuario ).pipe(
              map( (resp: any) => {
                swal.fire('Usuario Creado', usuario.nombre, 'success');
                return resp;
              }));
  }

  modificarUsuario (usuario: Usuario) {
    let url = environment + '/usuario';

    return this.http.put( url, usuario ).pipe(
                map( (resp: any) => {
                  swal.fire('Usuario Actualizado', usuario.nombre, 'success');
                  return resp;
                }));
  }

  cargarUsuario (id: number) {

    let url = environment + '/usuario?id=' + id;

    return this.http.get( url ).pipe(
              map( (resp: any) => resp ));
  }

  cargarLoagueado() {
    const url = environment + '/user';
    return this.http.get( url );
  } 
  cargarPerfil() {
    const url = environment + '/perfil';
    return this.http.get( url );
  }

   

}
