import { Component ,OnInit,OnChanges, Input,DoCheck,AfterViewChecked} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../../Services/authentication.service';
import { AgGridAngular } from 'ag-grid-angular';
import { AgGridModule } from 'ag-grid-angular';
import { ColDefUtil } from 'ag-grid-community';
import { ColDef } from 'ag-grid-community';
//import { AgChartThemePalette } from 'ag-grid-community';
import { AgChartTheme } from 'ag-grid-community';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule,AgGridModule],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent implements OnInit,OnChanges {

  //columnDefs: ColDef[] = [];
  //rowData: any[] = [];
  data :any
  rowData:any[]=[]
  columnDefs:ColDef[]=[]
  random:any
  constructor(private authService: AuthenticationService,private changeDetectorRef: ChangeDetectorRef){}

  // ngDoCheck()
  // {
  //   console.log("do check chnage ");
  //   // console.log(this.rowData)
  //   // console.log(this.random)
  //   // if(this.data.data[0])
  //   // {
  //   //    this.random = this.data.data[0].name
  //   // }
  // }

  // ngAfterViewChecked()
  // {
  //   console.log("hi")
  // }


  ngOnInit(): void {
  //  / this.getData();
  }

  ngOnChanges(): void 
  {
    
     console.log("here at ng change")
  }
   
  getData() {


   // this.columnDefs =this.columnDefs=[];
    //this.rowData =[];
console.log("buttoin")
    this.authService.getTasks().subscribe((task)=> {
    this.data=task
    this.rowData = this.data.data;

    if (this.rowData.length > 0) {

      const firstObject = this.rowData[0];
      Object.keys(firstObject).forEach(key => {
        this.columnDefs.push({field:key, headerName: key });
      });
     }
    
    this.changeDetectorRef.detectChanges(); // Manually trigger change detection

     // this.ngOnChanges()
      // Assuming data is in task.data
     // this.columnDefs = this.generateColumnDefs(this.rowData); // Generate column definitions after setting rowData
     // this.changeDetectorRef.detectChanges(); 
     // Generate column definitions dynamically

    })
    }
}
