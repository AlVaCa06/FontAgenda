import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

import { UsuarioService} from './usuario.service';
import { LoginGuard} from './guard.service';
import { AgendaService} from './agenda.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }, 
    UsuarioService,
    LoginGuard,
    AgendaService
  ],
  declarations: []
})
export class ServiceModule { }
