import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './courses/course/course.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CourseComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
