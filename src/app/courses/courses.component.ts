import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from "../data.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: [ './courses.component.css' ]
})
export class CoursesComponent {
  courses: any;
  course: any;
  constructor(private apiCall: HttpService, private httpClient: HttpClient) {
    this.apiCall.getUsers().subscribe(courses => {
      console.log('courses', courses);
      this.courses=courses;
      
    }); 
  }
  
  public filterCourses(event: any){
    this.course = event.target.value;
    this.apiCall.getUsers().subscribe(courses => {
      console.log('courses', courses);
      this.courses = courses;
    
    });
    

    
  }

 }
