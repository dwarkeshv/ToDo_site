import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Components/header/header.component';
import { TaskComponent } from './Components/task/task.component';
import { TaskItemComponent } from './Components/task-item/task-item.component';
import { AddTaskComponent } from './Components/add-task/add-task.component';
import { Router } from 'express';
import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { HomeComponent } from './Components/home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule,HeaderComponent,AuthenticationComponent,HomeComponent,TaskComponent,TaskItemComponent,AddTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent { 

hi()
{
  console.log("click event");
}
  
}
