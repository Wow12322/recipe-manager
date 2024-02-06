import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.css']
})
export class IngredientsListComponent implements OnInit {

  ingredients: string[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getIngredientsList();
  }

  getIngredientsList() {
    this.apiService.getIngredients().subscribe(
      (data: string[]) => {
        this.ingredients = data;
      },
      (error) => {
        console.error('Error fetching ingredients list:', error);
      }
    );
  }

}
