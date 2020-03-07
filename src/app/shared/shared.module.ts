import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioService } from './usuario.service';
import { MethodsService } from './methods.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    
  ],
  providers: [
    MethodsService,
    UsuarioService
  ]
})
export class SharedModule { }
