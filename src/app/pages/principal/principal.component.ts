
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
 import { AgendaService } from '../../services/agenda.service';
import { Contacto } from '../../models/contacto.model';
 
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: [ ],
})
export class PrincipalComponent implements OnInit {
 
  contactos: Contacto[] = [];    
  constructor(private route: ActivatedRoute,
              private _agendaService: AgendaService, 
              private router: Router,  ) {
    
  }
 
  ngOnInit() {
      this.cargaContactos(); 
  }  
  cargaContactos( ) {
    this._agendaService.cargaContactos()
    .subscribe((data: any) => {
      this.contactos = data; 
    });
  } 

   

}
