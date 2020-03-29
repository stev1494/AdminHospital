import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';



import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { ProfileComponent } from './profile/profile.component';



//Modulos
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

//ng2charts
import { ChartsModule } from 'ng2-charts';
import { RxjsComponent } from './rxjs/rxjs.component';

//Pipes
import { PipesModule } from '../pipes/pipes.module';







@NgModule({
    declarations:[
      PagesComponent,
      DashboardComponent,
      ProgressComponent,
      Graficas1Component,
      IncrementadorComponent,
      GraficoDonaComponent,
      AccountSettingsComponent,
      PromesasComponent,
      RxjsComponent,
      ProfileComponent
    ],
    exports:[
      PagesComponent,
      DashboardComponent,
      ProgressComponent,
      Graficas1Component,
      PromesasComponent
    ],
    imports:[
      CommonModule,
      SharedModule,
      PAGES_ROUTES,
      FormsModule,
      ChartsModule,
      PipesModule
    ]
})

export class PagesModule{}