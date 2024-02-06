import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ingredients-details',
  templateUrl: './ingredients-details.component.html',
  styleUrls: ['./ingredients-details.component.css']
})
export class IngredientsDetailsComponent implements OnInit {

  ingredient: string = '';
  recipes: string[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.ingredient = params.get('id')!;
      this.getRecipesByIngredient(this.ingredient);
    });
  }

  getRecipesByIngredient(ingredient: string) {
    this.apiService.getRecipesByIngredient(ingredient).subscribe(
      (data: string[]) => {
        this.recipes = data;
      },
      (error) => {
        console.error('Error fetching recipes by ingredient:', error);
      }
    );
  }

}
