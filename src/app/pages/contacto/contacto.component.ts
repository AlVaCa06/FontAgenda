
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
 import { AgendaService } from '../../services/agenda.service';
import { Contacto } from '../../models/contacto.model';
 
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: [ ],
})
export class ContactoComponent implements OnInit {
 
  contacto: Contacto  = new Contacto();    
  constructor(private activatedRoute: ActivatedRoute,
              private _agendaService: AgendaService, 
              private router: Router,  ) {
                activatedRoute.params.subscribe( params => { 
                  let id = params['id'];
                  try{this.contacto.id = id} catch{}
                  this.cargaContacto();
                });
    
  } 
  ngOnInit() { ; 
  }  
  GuardaContacto( ) {
   debugger
    this._agendaService.GuardaContacto(this.contacto)
   .subscribe((data: any) => {
      this.router.navigate(['/']);  
   });
  }
  cargaContacto(){
    this._agendaService.CargaContacto(this.contacto)
    .subscribe((data: any) => {
      this.contacto = data[0];
    }); 
  }  
}
