import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cuisine-list',
  templateUrl: './cuisine-list.component.html',
  styleUrls: ['./cuisine-list.component.css']
})
export class CuisineListComponent implements OnInit {

  cuisines: string[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getCuisinesList();
  }

  getCuisinesList() {
    this.apiService.getCuisines().subscribe(
      (data: string[]) => {
        this.cuisines = data;
      },
      (error) => {
        console.error('Error fetching cuisines list:', error);
      }
    );
  }

}
