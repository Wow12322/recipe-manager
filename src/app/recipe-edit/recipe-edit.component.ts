import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipe: any = {
    id: null,
    title: '',
    cuisine: '',
    description: '',
    instructions: '',
    time: 0,
    servings: 0
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getRecipeDetails();
  }

  getRecipeDetails() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.getRecipeById(id)?.subscribe(
      (data) => {
        this.recipe = data;
      },
      (error) => {
        console.error('Error fetching recipe details:', error);
      }
    );
  }

  saveRecipe() {
    this.apiService.updateRecipe(this.recipe.id, this.recipe)?.subscribe(
      () => {
        this.router.navigate(['/recipes']);
      },
      (error) => {
        console.error('Error saving recipe:', error);
      }
    );
  }

}
