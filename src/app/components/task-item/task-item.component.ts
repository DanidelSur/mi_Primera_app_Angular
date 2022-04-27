import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TAREA } from 'src/app/TAREA';
import { listaDeTAREAS } from 'src/app/mock-tareas';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() tarea: TAREA = listaDeTAREAS[0]

  @Output() aDescartarTarea: EventEmitter<TAREA> = new EventEmitter()

  @Output() onToggleReminder: EventEmitter<TAREA> = new EventEmitter()

  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  aDescartar(tarea: TAREA){
    this.aDescartarTarea.emit(tarea)
  }

  onToggle(tarea: TAREA){
    this.onToggleReminder.emit(tarea)
  }

}
