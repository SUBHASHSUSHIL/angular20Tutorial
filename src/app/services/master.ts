import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Master {
  //store the data
  appName: string = "Angular App";

  onLogin: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  //utility function
  getSum(num1: number, num2: number){
    debugger;
    const result = num1 + num2;
    return result;
  }

  //create a api call function
  getUsers(){
    debugger;
    return this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers")
  }
}
