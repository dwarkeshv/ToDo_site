import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  private showAddTask : boolean =true;
  private subjectDropDown =new Subject<any>;
  private  subjectBtnClick=new Subject<any>;


  public id:number =0
  public text:string ="";
  public day:string="";
  public reminder:boolean = false;
  public editTaskData : any=[]

  constructor() { }

  toggleAddTask(): void
  {
    
    this.showAddTask = !this.showAddTask;
    this.subjectDropDown.next(this.showAddTask)
  }
  toggleEditTask(): void
  {
    
    this.showAddTask = true;
    this.subjectDropDown.next(this.showAddTask)
  }

  onToggle(): Observable<any>
  {
    return this.subjectDropDown.asObservable(); 
  }


  resetForm(){
    this.text = "";
    this.day = "";
    this.reminder = false;
    this.editTaskData = null;
    this.subjectBtnClick.next(true); // Emit to notify components

  return this.subjectBtnClick.asObservable();
}
}