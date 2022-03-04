import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface Course {
  
  IconUrl: string;
  Name: string;
  Version: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})

export class HeaderComponent { 

  courseCtrl = new FormControl();
  filteredCourses: Observable<Course[]>;

  courses: Course[] = [
    {
      IconUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Biology-01.jpeg?alt=media&token=8eea799d-29a3-4628-a384-e3a2d10e7c5a',
      Version: 'EN-V1',
      Name: 'Body Joints - Elbow'
    },
     {
      IconUrl: 'https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Biology-01.jpeg?alt=media&token=8eea799d-29a3-4628-a384-e3a2d10e7c5a',
      Version: 'HI-V1',
      Name: 'Body Joints - Ball-Socket Joint'
    },
     {
      IconUrl: "https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Chemistry-01.jpeg?alt=media&token=92a52c20-0edb-43db-b006-4d5bf1724970",
      Version: 'EN-V1',
      Name: 'Chemical Change - Heating Sugar'
    },
     {
      IconUrl: "https://firebasestorage.googleapis.com/v0/b/fir-3ebaf.appspot.com/o/Chemistry-01.jpeg?alt=media&token=92a52c20-0edb-43db-b006-4d5bf1724970",
      Version: 'EN-V1',
      Name: 'Acids-Bases - Conductivity',
    },
  ];
  constructor() {
    this.filteredCourses = this.courseCtrl.valueChanges.pipe(
      startWith(''),
      map(course => (course ? this._filteredCourses(course) : this.courses.slice())),
    );
  }

  private _filteredCourses(value: string): Course[] {
    const filterValue = value.toLowerCase();

    return this.courses.filter(course => course.Name.toLowerCase().includes(filterValue));
  }
}
