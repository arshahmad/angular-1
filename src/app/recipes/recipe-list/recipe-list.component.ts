import { Component, OnInit } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: recipe []= [
    new recipe('A test recipe', 'this is simply a test', 'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
    new recipe('A test recipe', 'this is simply a test', 'https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d'),
 
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
