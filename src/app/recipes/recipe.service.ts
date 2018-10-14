import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';
export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [new Recipe('A test Recipe', 'This is a test','https://www.kitchensanctuary.com/wp-content/uploads/2017/05/Mexican-Chicken-Kebabs-with-Picante-Salsa-Recipe-tall2.jpg'),
  new Recipe('A test Recipe', 'This is a test','https://www.kitchensanctuary.com/wp-content/uploads/2017/05/Mexican-Chicken-Kebabs-with-Picante-Salsa-Recipe-tall2.jpg')];

  getRecipes(){
    return this.recipes.slice();
  }
}