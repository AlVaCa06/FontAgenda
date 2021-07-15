import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

 

// NGRX (Store, Reducer)
import { StoreModule } from '@ngrx/store';
 
// Rutas
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
 
import { PrincipalComponent } from './principal/principal.component';
  
@NgModule({
    declarations: [
        PagesComponent, 
        PrincipalComponent,
        
    ],
    exports: [ 
    ],
    imports: [
        RouterModule, 
        PAGES_ROUTES,
        CommonModule,
        FormsModule, 
     ]
})

export class PagesModule { }
