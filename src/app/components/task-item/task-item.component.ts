import { Component, OnInit, Input } from '@angular/core';
import { TAREA } from 'src/app/TAREA';
import { listaDeTAREAS } from 'src/app/mock-tareas';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() tarea: TAREA = listaDeTAREAS[0]

  constructor() { }

  ngOnInit(): void {
  }

}
