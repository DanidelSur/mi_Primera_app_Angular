import { Component, OnInit } from '@angular/core';
import { TAREA } from 'src/app/TAREA';
import { listaDeTAREAS } from 'src/app/mock-tareas';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  unasTareas: TAREA[] = listaDeTAREAS 
  
  constructor() { }

  ngOnInit(): void {
  }

}
