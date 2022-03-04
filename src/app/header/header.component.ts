import {Component} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Course {
  IconUrl: string;
  Name: string;
  Version: string;
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
}
