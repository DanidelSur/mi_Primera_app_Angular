import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TAREA } from 'src/app/TAREA';

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

  constructor() { }

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
    // * 1:52:23

}
