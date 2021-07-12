import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';  
import { Contacto } from '../models/contacto.model';

@Injectable({
  providedIn: 'root'
})

export class AgendaService { 
  url = environment.url; 
  constructor(private http: HttpClient, 
     ) { } 
  cargaContactos() {
    return this.http.get( this.url+'/cargacontactos' ).pipe(
      map((data: any) => {
        return data;
      }));
  }  
  CargaContacto(contacto: Contacto) {
    return this.http.post( this.url+'/getcontacto',contacto).pipe(
      map((data: any) => {
        return data;
      }));
  }  
  GuardaContacto(contacto: Contacto) {
    return this.http.post( this.url+'/guardacontacto',contacto).pipe(
      map((data: any) => {
        return data;
      }));
  }  
   
}
