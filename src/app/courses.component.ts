import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
    <div (click)="onDivClick()">
    <button (click)="onSave($event)" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
</div>
    `
})
export class CoursesComponent{
    getTitle(){
        return "New list of courses";
    }

    onSave($event: any){
        $event.stopPropagation();
        console.log($event);
        console.log("Message that its logged");
    }

    onDivClick(){
        console.log("div was clicked");
    }
    courses;
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;

    isActive = 0;

    constructor(service: CoursesService){

        this.courses = service.getCourses();
    }

}