import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  }

  // onFavoriteChanged(isFavorite: {newValue:boolean}){
    onFavoriteChanged(isFavorite:  FavoriteChangedEventArgs){
    console.log("Favorite Changed:", isFavorite.newvalue);
  }
}
