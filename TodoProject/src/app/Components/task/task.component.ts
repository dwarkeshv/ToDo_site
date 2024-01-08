import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from '../../Task';
import { TaskItemComponent } from '../task-item/task-item.component';
import { ServiceService }  from '../../Services/service.service';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from '../add-task/add-task.component';
import { UIService } from '../../Services/ui.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule,TaskComponent,TaskItemComponent,HttpClientModule,AddTaskComponent,HeaderComponent],
  providers: [ServiceService],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{

  tasks: Task[] = [];
  editData?:Task[];

  constructor(private service: ServiceService,private uiservice:UIService) { 

  }


  ngOnInit(): void {
    // this.tasks = this.service.getTasks();
    this.service.getTasks().subscribe(tasks =>  {
      
        this.tasks = tasks;
   })
   
  }

  deleteTask(currentTask: any)
  {

     this.service.deleteTask(currentTask).subscribe(() =>  {
       this.tasks = this.tasks.filter(task => task.id!== currentTask.id);
     })
  }

  ToggleChnage(currentTask: Task) {

    currentTask.reminder = !(currentTask.reminder);
    this.service.updateTaskReminder(currentTask).subscribe()
    }

    addTask(addNewtask :any)
    {

      if(addNewtask.id)
      {
        this.service.editTask(addNewtask).subscribe((currentTask) => {
          const index = this.tasks.findIndex((task) => task.id === addNewtask.id);
          if (index !== -1) {
            this.tasks[index] = addNewtask;
          }
        }) 
      }
      else
      {
        this.service.addTask(addNewtask).subscribe((currentTask) =>  
          this.tasks.push(addNewtask)
        )
      }
    }

    sendEditDataToForm(sendData: number) 
    {
      this.uiservice.resetForm()

      //this.uiservice.onToggle().subscribe((value)=> (this.showAddTask= false))
      this.uiservice.toggleEditTask()
      //this.uiservice.onToggle().subscribe((value)=> (this.showAddTask = false))
      //this.editId = sendData;
      this.service.getTasksById(sendData).subscribe(tasks => {
        this.editData = tasks
      
      });

    }
}
