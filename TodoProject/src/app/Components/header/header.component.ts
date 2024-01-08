import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIService } from '../../Services/ui.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  showAddTask:boolean | undefined;
  subscription:Subscription | undefined;

  ngOnInit(): void {
    
  }

  constructor(private uiservice : UIService){

    // this.subscription = this.uiservice.onToggle().subscribe((value)=> (this.showAddTask= value))
    this.uiservice.onToggle().subscribe((value)=> (this.showAddTask= value))
  }

  addTask()
  {
    this.uiservice.toggleAddTask();
    this.uiservice.resetForm()

    console.log(this.showAddTask)
  }




}
