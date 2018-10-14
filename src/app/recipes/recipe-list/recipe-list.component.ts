import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [new Recipe('A test Recipe', 'This is a test','https://www.kitchensanctuary.com/wp-content/uploads/2017/05/Mexican-Chicken-Kebabs-with-Picante-Salsa-Recipe-tall2.jpg'),
  new Recipe('A test Recipe', 'This is a test','https://www.kitchensanctuary.com/wp-content/uploads/2017/05/Mexican-Chicken-Kebabs-with-Picante-Salsa-Recipe-tall2.jpg')];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
