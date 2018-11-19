import {Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{

  private recipes: Recipe[] = [new Recipe('Tasty Schnitzel',
   'A super tasty Schnitzel!','https://thestayathomechef.com/wp-content/uploads/2018/03/German-Schnitzel-3-small.jpg',
   [
    new Ingredient('Meat', 1),
    new Ingredient('French Fries', 20),
  ]),
  new Recipe('Big Fat Burger', 'What else you need to say?','data:image/jpeg;base64,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',
  [
    new Ingredient('Buns',2),
    new Ingredient('Meat',1),
  ])];

  constructor(private slService: ShoppingListService) {}
  
  getRecipes(){
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}