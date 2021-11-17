import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses;

  post={
    isFavorite:true
  };

  loadCourses(){
    this.courses = [
      {id:1, name: "Course1"},
      {id:2, name: "Course2"},
      {id:3, name: "Course3"},
  
    ];  
  
  }
  
  trackCourse(index, course){
    return course ? course.id: undefined;
  }

  onFavoriteChanged(event){

  }

}


