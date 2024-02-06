import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

// Import components for routing
import { AppComponent } from './app.component'; // Import AppComponent here
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { CuisineListComponent } from './cuisine-list/cuisine-list.component';
import { AboutComponent } from './about/about.component';
import { StatisticsComponent } from './statistics/statistics.component';

// Define routes
const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // Default route to redirect to the recipe list page
  { path: 'recipes', component: RecipeListComponent },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'recipes/:id/edit', component: RecipeEditComponent },
  { path: 'recipes/create', component: RecipeCreateComponent },
  { path: 'ingredients', component: IngredientsListComponent },
  { path: 'cuisine', component: CuisineListComponent },
  { path: 'about', component: AboutComponent },
  { path: 'statistics', component: StatisticsComponent },
];

@NgModule({
  declarations: [
    // Declare your components here
    AppComponent, // Add AppComponent here
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeEditComponent,
    RecipeCreateComponent,
    IngredientsListComponent,
    CuisineListComponent,
    AboutComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Configure routes
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent] // Add AppComponent to bootstrap array
})
export class AppModule { }
