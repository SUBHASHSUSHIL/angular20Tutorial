import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {

  constructor(){

  }
  // Interpolation & Strongly Typed Data Binding
  // This component demonstrates various types of data binding in Angular.
  userName: string = 'Sushil Thakur';
  courseName: string = 'Angular Fundamentals';
  courseDuration: number = 40;
  coursePrice: number = 199.99;
  courseDescription: string = 'Learn the fundamentals of Angular, a powerful framework for building web applications.';
  courseImage: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  courseUrl: string = 'https://angular.io/';
  courseTags: string[] = ['Angular', 'Web Development', 'Frontend Framework'];
  courseRating: number = 4.5;
  courseAvailable: boolean = true;
  courseStartDate: Date = new Date('2023-10-01');
  courseEndDate: Date = new Date('2023-12-01');
  courseInstructor: string = 'Subhashsushil';
  courseTopics: string[] = [
    'Introduction to Angular',
    'Components and Templates',
    'Data Binding',
    'Directives',
    'Services and Dependency Injection',
    'Routing and Navigation',
    'Forms in Angular',
    'HTTP Client',
    'Pipes',
    'Testing Angular Applications'
  ];

  // Property Binding
  courseImageAlt: string = 'Angular Logo';
  maxlength: number = 50;
  minLength: number = 5;
  minCharacters: number = 3;
  inputType: string = 'checkbox';



  // Method to get course details(Event Binding)
  getCourseDetails(): string {
    return `Course: ${this.courseName} by ${this.courseInstructor} costs $${this.coursePrice}. Duration: ${this.courseDuration} hours.`;
  }

  showWelcomeMessage(): string {
    return `Welcome to the ${this.courseName} course!`;
  }

  showCourseDetails(){
    this.courseName = 'Angular Advanced Concepts';
    this.courseDescription = 'Dive deeper into Angular with advanced topics and best practices.';
    this.coursePrice = 299.99;
    this.courseDuration = 60;
    this.courseImage = 'https://angular.io/assets/images/logos/angular/angular.png';
    this.courseUrl = 'https://angular.io/advanced';
    this.courseTags.push('Advanced Angular', 'Best Practices');
    this.courseRating = 4.8;
    this.courseAvailable = true;
    this.courseStartDate = new Date('2023-11-01');
    this.courseEndDate = new Date('2024-01-01');
  }

  onCityChange(){
    alert('City changed successfully!');
  }

}