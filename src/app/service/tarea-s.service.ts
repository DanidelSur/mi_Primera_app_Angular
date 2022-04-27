import { Injectable } from '@angular/core';
import { listaDeTAREAS } from 'src/app/mock-tareas';
import { TAREA } from 'src/app/TAREA';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TareaSService {

  private apiUrl = 'http://localhost:5000/misTareas'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<TAREA[]>{
    return this.http.get<TAREA[]>(this.apiUrl)
  }
}
