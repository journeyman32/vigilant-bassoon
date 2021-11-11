import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  @Input('isFavorite') isFavorite: boolean;
  @Output('change') changeClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() { 
    this.isFavorite = !this.isFavorite;
    this.changeClick.emit({newValue: this.isFavorite});
  }

}


export interface FavoriteChangedEventArgs{
  newvalue:boolean;
}
