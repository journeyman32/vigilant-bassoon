import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `

    <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />

    
    `
})
export class CoursesComponent{
 
    email:any="example@bryan.com";

    onKeyUp(){
        console.log(this.email);
    } 
    

   

}