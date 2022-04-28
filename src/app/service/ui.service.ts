import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false
  private aSubject = new Subject<any>()

  constructor() { }

  toggleAgregarTarea():void{
    console.log("first")
    this.showAddTask = !this.showAddTask
    this.aSubject.next(this.showAddTask)
  }

  onToggle():Observable<any>{
    return this.aSubject.asObservable()
  }
}
