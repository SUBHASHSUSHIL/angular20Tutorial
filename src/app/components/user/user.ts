import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User implements OnInit {

  http = inject(HttpClient);

  userList: any[] = [];
  userObj: any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res: any) => {
      this.userList = res;
    });
  }

  onSaveUser() {
    debugger;
    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj).subscribe({
      next: (result) => {
        debugger;
        alert("User Created Successfully");
        this.getUsers()
      },
      error: (error) => {
        debugger;
        alert("Error -" + error.error)
      }
    })
  }

  onReset() {
    this.userObj = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    };
  }

  onEdit(item: any) {
    this.userObj = item;
  }

  onUpdateUser() {
    this.userObj.CreatedDate = new Date;
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id=" + this.userObj.userId, this.userObj).subscribe({
      next: () => {
        alert("User update success");
        this.getUsers()
      },
      error: (error) => {
        alert("Error -" + error.error)
      }
    })
  }

  onDeleteUser(id: number) {
    debugger;
    const isDelet = confirm("Are you sure want to Deleted")
    if (isDelet) {
      this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id=" + id).subscribe({
        next: () => {
          alert("User Deleted Success");
          this.getUsers()
        },
        error: (error) => {
          alert("Error -" + error.error)
        }
      })
    }
  }

}
