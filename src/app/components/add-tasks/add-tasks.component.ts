import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TAREA } from 'src/app/TAREA';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {

  @Output() aAgregarTarea: EventEmitter<TAREA> = new EventEmitter()

  texto: string = ""
  dia: string = ""
  reminder: boolean = false
  showAgregarTarea: boolean = false
  subcripcion?: Subscription

  constructor(private uiServicio:UiService) {
    this.subcripcion = this.uiServicio.onToggle().subscribe(value => this.showAgregarTarea = value)
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.texto.length === 0){
      alert("Favor de agregar una Tarea!")
      return
    }

    const {texto, dia, reminder} = this
    const nuevaTarea = {texto,dia,reminder}
    this.aAgregarTarea.emit(nuevaTarea)
    }
    // * ok

}
