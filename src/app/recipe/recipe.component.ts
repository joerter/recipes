import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent {
  recipeForm = this.fb.group({
    name: [''],
    ingredients: this.fb.array([
      this.fb.group({
        name: [''],
        amount: [''],
        unit: ['']
      })
    ]),
    steps: this.fb.array([
      ['']
    ])
  });

  constructor(private fb: FormBuilder) { }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addIngredient() {
    this.ingredients.push(this.createIngredient());
  }

  private createIngredient() {
    return this.fb.group({
      name: this.fb.control(''),
      amount: this.fb.control(''),
      unit: this.fb.control('')
    });
  }
}
