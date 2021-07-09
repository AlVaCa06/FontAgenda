import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';  
 
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
}
