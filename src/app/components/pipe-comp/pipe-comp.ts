import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-comp',
  imports: [UpperCasePipe, LowerCasePipe, TitleCasePipe, SlicePipe, JsonPipe, DatePipe],
  templateUrl: './pipe-comp.html',
  styleUrl: './pipe-comp.css'
})
export class PipeComp implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  firstName: string = "Sushil";
  courseName: string = "Angular 20 tutorial";
  rollNoList = [11, 12, 13, 14, 15, 16, 17, 18]
  currentDate: Date = new Date();

  studentObj: any = {
    name: 'Sushil',
    city: 'Patna',
    state: 'Bihar'
  }

  constructor(){
    console.log("constructor")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }
}
