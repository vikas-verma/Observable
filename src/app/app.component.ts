import { Component, Injectable, OnInit } from '@angular/core';
import { Employee, EmployeeService } from 'src/service/EmployeeService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  implements OnInit {
  title = 'observableApp';
  _employeeService: EmployeeService;
  employeesList: any;

  constructor(employeeService: EmployeeService) {
    debugger;
    this._employeeService = employeeService;
  }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe((empList:Employee[]) => {
      debugger;
       //this.employeesList =  empList.sort((first, second) => 0 - (first.name > second.name ? 1 : -1));
       this.employeesList =  empList.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
      
    });

  }
}
