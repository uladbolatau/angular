import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public temp: any = [
    [],
    [],
    [],
    []
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
