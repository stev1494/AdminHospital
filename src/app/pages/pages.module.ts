import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';  


import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';



//Modulos
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

//Temporal
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

//ng2charts
import { ChartsModule } from 'ng2-charts';
import { RxjsComponent } from './rxjs/rxjs.component';




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
      RxjsComponent
    ],
    exports:[
      PagesComponent,
      DashboardComponent,
      ProgressComponent,
      Graficas1Component,
      PromesasComponent
    ],
    imports:[
      SharedModule,
      PAGES_ROUTES,
      FormsModule,
      ChartsModule
    ]
})

export class PagesModule{}