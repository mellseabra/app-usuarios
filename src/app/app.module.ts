import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsuarioModule } from './usuario/usuario.module';  // Importando o UsuarioModule

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsuarioModule  // Adicione o UsuarioModule aqui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


