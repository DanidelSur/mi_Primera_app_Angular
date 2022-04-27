import { Component, OnInit } from '@angular/core';
import { TAREA } from 'src/app/TAREA';
// import { listaDeTAREAS } from 'src/app/mock-tareas';
import { TareaSService } from 'src/app/service/tarea-s.service';
// import { Observable } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  unasTareas: TAREA[] = [] 

  
  constructor(private taskService: TareaSService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tareas)=>{
      this.unasTareas = tareas
    })
  }

}
