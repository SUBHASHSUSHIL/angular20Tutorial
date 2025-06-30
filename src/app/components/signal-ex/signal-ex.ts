import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {
  firstName: string = "Subhashsushil";
  productName = "Moto"
  courseName = signal<string>("Angular");
  courseDuration = signal("15 Videos");
  courseDetail = computed(() => this.courseName() + " - " + this.courseDuration());
    
  constructor() {
    this.firstName = "Subhashsushil Kumar";
    console.log(this.courseName);
    console.log(this.courseName());
    this.courseName.set("Angular 18");
    console.log(this.courseName());
    setTimeout(() =>{
      this.courseName.set("Angular 20");
    } , 5000);
  }
}
