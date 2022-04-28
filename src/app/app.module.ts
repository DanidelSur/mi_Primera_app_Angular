import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { AboutComponent } from './components/about/about.component';


const appRoutes:Routes = [
  {path: '', component: TasksComponent}
] 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTasksComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// * HASTA BASE D todo funciona Correctamente
// * Base E Funciona con Exito! 
// * Base F ANDUVO LA CONCHA DE LA LORA!!! era H en minuscula! ;c
// * BASE G Formulario completado y funcionando ok, Base de datos ok. todo ok! :D
// ? Base H en progreso...