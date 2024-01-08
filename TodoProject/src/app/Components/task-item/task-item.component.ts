import { Component ,Input,OnInit,Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task} from '../../Task'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { debug } from 'node:console';
//import {fa-pen-to-square} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {


  @Input() data:any;
  @Output() DeleteData :  EventEmitter<Task>=new EventEmitter();
  @Output() onToggleData :  EventEmitter<Task>=new EventEmitter();
  @Output() EditData : EventEmitter<number> =new EventEmitter();

  faTimesIcon = faTimes;
  faEditIcon = faEdit;

  constructor() {
  }

  ngOnInit() {
  }

  isDeleted(item:Task)
  {
      this.DeleteData.emit(item);
  }

  isEdit(itemId: number) {
    this.EditData.emit(itemId);
  }


  onToggle(item : Task)
  {
      this.onToggleData.emit(item);
  }

} 
