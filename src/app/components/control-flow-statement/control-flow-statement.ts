import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow-statement',
  imports: [],
  templateUrl: './control-flow-statement.html',
  styleUrl: './control-flow-statement.css'
})
export class ControlFlowStatement {
  // Variables for if-else statement
  isParaVisiable: boolean = true;

  showP(){
    this.isParaVisiable = true;
  }

  hideP(){
    this.isParaVisiable = false;
  }

  // Variables for else-if statement
  startMonthName: string = "feb";

  //variable for for loop condition
  cityList: string[] = ["Noida", "New Delhi", "Old Delhi", "New Ashok Nagar"]

  studentList: any[] = [
    {Name: "Sushil", city: "New Delhi", isActive: true},
    {Name: "Sandip", city: "Old Delhi", isActive: false},
    {Name: "Subhash", city: "Bihar", isActive: false},
    {Name: "Pradip", city: "Siwan", isActive: false},
    {Name: "Sagar", city: "Patna", isActive: false}
  ]
}
