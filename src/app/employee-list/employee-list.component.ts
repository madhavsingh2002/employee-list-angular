import { Component, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  EmployeeDetail:any[]=[]
  SingleEmployee:any={
    fullname:"",
    job:"",
    email:"",
  }
  handleSubmit():void{
    this.EmployeeDetail.push({ ...this.SingleEmployee }); // Clone the object
    console.log(this.SingleEmployee)
    this.SingleEmployee = {
      fullname: "",
      job: "",
      email: "",
    };
  }
  ngOnInit(): void {
    
  }
}
