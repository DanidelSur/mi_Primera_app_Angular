import { Injectable } from '@angular/core';
import { listaDeTAREAS } from 'src/app/mock-tareas';
import { TAREA } from 'src/app/TAREA';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'


const httpOptions = {
  // ! NO ES CON MAYUSCULASSSSSS!!!! headers!
  headers: new HttpHeaders ({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TareaSService {

  private apiUrl = 'http://localhost:5000/misTareas'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<TAREA[]>{
    return this.http.get<TAREA[]>(this.apiUrl)
  }

  borrarTarea(tarea: TAREA): Observable<TAREA>{
    const url = `${this.apiUrl}/${tarea.id}`
    return this.http.delete<TAREA>(url)
  }

  actualizarReminder(tarea: TAREA):Observable<TAREA>{
    const url = `${this.apiUrl}/${tarea.id}`
    return this.http.put<TAREA>(url, tarea, httpOptions)

  }

  agregarUnaTarea(tarea: TAREA):Observable<TAREA>{
    
    // const url = `${this.apiUrl}/${tarea.id}`

    return this.http.post<TAREA>(this.apiUrl, tarea, httpOptions)
  }
}
