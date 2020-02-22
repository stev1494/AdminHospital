import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  


//Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

//RUTAS
import { APP_ROUTES } from './app.routes';

//Modulos
import { PagesModule } from './pages/pages.module';

//Servicio

import {SettingsService} from './services/settings.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule

  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
