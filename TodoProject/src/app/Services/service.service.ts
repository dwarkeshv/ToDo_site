import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable} from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';


const httpOptions =
{
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private tasksUrl = 'http://localhost:5000/tasks';
  constructor( private http:HttpClient) { }



  getTasks():Observable<Task[]>
  {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  getTasksById(taskId :number):Observable<Task[]>
  {
    return this.http.get<Task[]>(this.tasksUrl+'/'+ taskId);
  }

  deleteTask(task :Task):Observable<Task[]>
  {
    return this.http.delete<Task[]>(this.tasksUrl + '/' + task.id);
  }

  updateTaskReminder(task : Task)
  {
    return this.http.put<Task[]>(this.tasksUrl +'/'+task.id,task,httpOptions)

  }


  addTask(task :Task):Observable<Task[]>
  {
    return this.http.post<Task[]>(this.tasksUrl , task ,httpOptions)
  }

  editTask(task :Task):Observable<Task[]>
  {
    return this.http.put<Task[]>(this.tasksUrl +'/'+task.id,task,httpOptions)

  }
}
