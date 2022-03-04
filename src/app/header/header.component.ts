import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Course {
  IconUrl: string;
  Name: string;
  Version: string;
}
interface Subject {
  value: string;
  viewValue: string;
}

interface Language {
  value: string;
  viewValue: string;
}



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  courseControl = new FormControl();
  options: string[] = ["Body Joints - Elbow", "Body Joints - Ball-Socket Joint", "Chemical Change - Heating Sugar",  "Acids-Bases - Conductivity"];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.courseControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
  selectedValue: string;
 

  subjects: Subject[] = [
    {value: '0', viewValue: 'Body Joints - Elbow'},
    {value: '1', viewValue: 'Body Joints - Ball-Socket Joint'},
    {value: '2', viewValue: 'Chemical Change - Heating Sugar'},
    {value: '0', viewValue: 'Acids-Bases - Conductivity'},
  ];
 
  selectValue: string;
 

  languages: Language[] = [
    {value: '0', viewValue: 'EN-V1'},
    {value: '1', viewValue: 'HI-V1'},
    
  ];


}


  

