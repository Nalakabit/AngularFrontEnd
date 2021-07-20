import { Employee } from './../../employee';
import { DataService } from './../../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees:any;
  employee = new Employee(); 

  constructor(private DataService:DataService) { }

  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData(){
    this.DataService.getData().subscribe(res=>{
      this.employees = res;
    });
  }

  insertData(){
    this.DataService.insertData(this.employee).subscribe(res => {
      this.getEmployeesData();
    });
   
  }

  deleteData(id: string) {
    this.DataService.deleteData(id).subscribe(res =>{
      this.getEmployeesData();
    })
  }

}
