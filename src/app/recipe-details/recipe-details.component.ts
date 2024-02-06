import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  recipe: any;

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
    this.apiService.getRecipeById(id).subscribe(
      (data) => {
        this.recipe = data;
      },
      (error) => {
        console.error('Error fetching recipe details:', error);
      }
    );
  }

  deleteRecipe() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.apiService.deleteRecipe(id).subscribe(
      () => {
        this.router.navigate(['/recipes']);
      },
      (error) => {
        console.error('Error deleting recipe:', error);
      }
    );
  }

}
