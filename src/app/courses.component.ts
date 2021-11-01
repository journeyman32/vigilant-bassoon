import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
    Angular 
    <h2>{{getTitle()}}</h2>
    <ul>
        <li *ngFor="let course of courses">
        {{course}}</li>
    </ul>
    <img src="{{ imageUrl}}"/>
    <img [src]="imageUrl"/>
    <table>
        <tr>
            <td [attr.colSpan]="colSpan"></td>
        </tr>
    </table>

    <button class="btn btn-primary" [class.active]="isActive">Save</button>

    `
})
export class CoursesComponent{
    getTitle(){
        return "New list of courses";
    }
    courses;
    imageUrl = "http://lorempixel.com/400/200";
    colSpan = 2;

    isActive = true;

    constructor(service: CoursesService){

        this.courses = service.getCourses();
    }
}