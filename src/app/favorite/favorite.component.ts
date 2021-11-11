import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  
  styles:[
    `
      
      .bi{
        color:cornflowerblue;
      }
    `
  ],
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {

  @Input('isFavorite') isFavorite: boolean;
  @Output('change') changeClick = new EventEmitter();

  onClick() { 
    this.isFavorite = !this.isFavorite;
    this.changeClick.emit({newValue: this.isFavorite});
  }

}


export interface FavoriteChangedEventArgs{
  newvalue:boolean;
}
