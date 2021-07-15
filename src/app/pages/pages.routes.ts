import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { PrincipalComponent } from '../pages/principal/principal.component';
import { ContactoComponent } from '../pages/contacto/contacto.component';
import { LoginGuard } from '../services/guard.service';
const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuard ],
        children: [ 
            { path: 'principal', component: PrincipalComponent  },
            { path: '', component: PrincipalComponent },
            { path: 'contacto', component: ContactoComponent },
            { path: 'contacto/:id', component: ContactoComponent  },
           
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
