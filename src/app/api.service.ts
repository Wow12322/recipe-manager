import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://localhost:3000'; // Base URL of the API

  constructor(private http: HttpClient) { }

  // Method to fetch list of recipes
  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recipes`);
  }

  // Method to fetch a single recipe by ID
  getRecipeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/recipes/${id}`);
  }

  // Method to create a new recipe
  createRecipe(recipeData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/recipes`, recipeData);
  }

  // Method to update an existing recipe
  updateRecipe(id: number, recipeData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/recipes/${id}`, recipeData);
  }

  // Method to delete an existing recipe
  deleteRecipe(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/recipes/${id}`);
  }

  // Method to fetch list of ingredients
  getIngredients(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ingredients`);
  }

  // Method to fetch list of cuisines
  getCuisines(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cuisines`);
  }

  // Method to fetch list of recipes by ingredient
  getRecipesByIngredient(ingredient: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recipes?ingredient=${ingredient}`);
  }
}
