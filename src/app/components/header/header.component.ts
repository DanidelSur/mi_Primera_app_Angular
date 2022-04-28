import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = "Mi Lista de Tareas🐕"
  showAgregarTarea: boolean = false
  subcripcion?: Subscription


  constructor(private uiServicio:UiService,private router:Router) {
    this.subcripcion = this.uiServicio.onToggle().subscribe(value => this.showAgregarTarea = value)
   }

  ngOnInit(): void {
  }

  toggleAgregarTarea(){
    // LA ACCION VIENE DEL BUTTON COMPONENT MEDIANTE OUTPUT Y EMIT
    // todo corre correctamente! 
    
    this.uiServicio.toggleAgregarTarea()

  }

  comoRuta(route:String){
    return this.router.url === route
  }
}
