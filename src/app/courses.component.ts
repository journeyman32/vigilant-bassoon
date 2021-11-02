import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',
    template: `
    <!-- <input (keyup)="onKeyUp($event)" /> -->
    <input (keyup.enter)="onKeyUp()" />

    
    `
})
export class CoursesComponent{
    /*onKeyUp($event:any){
        if($event.keyCode === 13) console.log("key enter was pressed");
    }
    */

    onKeyUp(){
        console.log("key enter was pressed");
    }

}