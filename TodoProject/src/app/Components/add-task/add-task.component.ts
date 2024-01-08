import { Component, OnInit ,Output,EventEmitter, Input,OnChanges} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../../Task';
import { FormsModule } from '@angular/forms';
import { UIService } from '../../Services/ui.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit,OnChanges{

  @Output() onAddTask :  EventEmitter<any>=new EventEmitter();
  @Input() editTaskData?:any;
  showAddTask : boolean =false;


  // id:number =this.editTaskData ? this.editTaskData.id :0
  // text:string =this.editTaskData ? this.editTaskData.text :"";
  // day:string=this.editTaskData ? this.editTaskData.day :"";
  // reminder:boolean = this.editTaskData ? this.editTaskData.reminder :false;
  //formValidation:boolean =false
  id:number=0
  text:string ="";
  day:string="";
  reminder:boolean = false;
  formValidation:boolean =false

  ngOnInit(): void {
  }

  ngOnChanges(){

    this.id =this.editTaskData ? this.editTaskData.id :0
    this.text =this.editTaskData ? this.editTaskData.text :"";
    this.day=this.editTaskData ? this.editTaskData.day :"";
    this.reminder = this.editTaskData ? this.editTaskData.reminder :false;
  }

  
  constructor(private uiservice: UIService){
    this.uiservice.onToggle().subscribe((value)=> (this.showAddTask= value))

    this.uiservice.resetForm().subscribe((value) => {
        this.text = "";
        this.day = "";
        this.reminder = false;
        this.editTaskData = null;
    });
    }
  
  onSubmit() {
    // Hide alert messages initially
    this.validation()
   
    if(this.text && this.text.trim() && this.day && this.day.trim()&& this.formValidation ==true)
    {

        if(this.editTaskData)
        {
          const newTask =
          {
            id: this.editTaskData.id,
            text : this.text,
            day : this.day,
            reminder : this.reminder
          };
          this.onAddTask.emit(newTask)
        }
        else
        {
          const newTask =
          {
            text : this.text,
            day : this.day,
            reminder : this.reminder
          };
          this.onAddTask.emit(newTask)
        }
        this.uiservice.resetForm()

    }
    
  }


  validation()
  {
    this.hideAlertMessages();




    if (!this.text || !this.text.trim()) {
      // Show the alert for message if text is empty
      const alertMessageElementMessage = document.getElementById("AlertMessage");
      if (alertMessageElementMessage) {
        alertMessageElementMessage.style.display = "block";
        alertMessageElementMessage.addEventListener('change', () => this.onSubmit());
      }

      const input = document.getElementById("textInput");
      if(input) {

        input.addEventListener('input', () => this.validation());
      }
      //document.getElementById('AlertMessage')?.style.display = 'block';
    }

    if (!this.day || !this.day.trim()) {

      // Show the alert for day if day is empty
      const alertMessageElementDay = document.getElementById("AlertDay");
      if (alertMessageElementDay) {
        alertMessageElementDay.style.display = "block";
      }


      const inputt = document.getElementById("dayInput");
      if(inputt)
      {
        inputt.addEventListener('input', () => this.validation());
      }
    }
    if(this.text && this.text.trim() && this.day && this.day.trim())
    {
      this.formValidation =true;
    }
  }

  hideAlertMessages() {
    // Hide both alert messages
    const alertMessageElementMessage = document.getElementById("AlertMessage");
    if (alertMessageElementMessage) {
      alertMessageElementMessage.style.display = "none";
    }
    const alertMessageElementDay = document.getElementById("AlertDay");
    if (alertMessageElementDay) {
      alertMessageElementDay.style.display = "none";
    }
  }

 
}
