
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
  constructor(private route: ActivatedRoute,
              private _agendaService: AgendaService, 
              private router: Router,  ) {
    
  } 
  ngOnInit() { ; 
  }  
  GuardaContacto( ) {
   debugger
  } 

   

}
