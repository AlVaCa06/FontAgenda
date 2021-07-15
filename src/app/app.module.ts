import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './services/guard.service';
import { UsuarioService } from './services/usuario.service';
import { StoreModule } from '@ngrx/store';

import { appReducers } from './store/app.reducers';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ContactoComponent,
    LoginComponent,
     

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot( appReducers ),
  ],
  providers: [
    PrincipalComponent,
    ContactoComponent,
    LoginGuard,
    UsuarioService],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
