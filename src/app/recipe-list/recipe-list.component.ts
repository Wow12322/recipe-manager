import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: any[] = [];
  filteredRecipes: any[] = [];
  pagedRecipes: any[] = [];
  searchQuery: string = '';
  currentPage: number = 1;
  pageSize: number = 10; // Number of recipes per page
  totalRecipes: number = 0;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.fetchRecipes();
  }

  fetchRecipes() {
    this.apiService.getRecipes().subscribe(
      (data) => {
        this.recipes = data;
        this.filteredRecipes = [...this.recipes]; // Initialize filteredRecipes with all recipes
        this.totalRecipes = this.recipes.length;
        this.updatePagedRecipes(); // Update pagedRecipes after fetching recipes
      },
      (error) => {
        console.error('Error fetching recipes:', error);
      }
    );
  }

  deleteRecipe(id: number) {
    this.apiService.deleteRecipe(id).subscribe(
      () => {
        // Remove deleted recipe from the list
        this.recipes = this.recipes.filter(recipe => recipe.id !== id);
        this.filteredRecipes = [...this.recipes]; // Update filteredRecipes after deleting
        this.totalRecipes = this.recipes.length;
        this.updatePagedRecipes(); // Update pagedRecipes after deleting
      },
      (error) => {
        console.error('Error deleting recipe:', error);
      }
    );
  }

  searchRecipes() {
    // Filter recipes based on searchQuery
    this.filteredRecipes = this.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.totalRecipes = this.filteredRecipes.length;
    this.updatePagedRecipes(); // Update pagedRecipes after searching
  }

  updatePagedRecipes() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.pagedRecipes = this.filteredRecipes.slice(startIndex, endIndex);
  }

}
