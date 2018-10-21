import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { HomeComponent } from './home/home.component';

import { MatTabsModule } from '@angular/material/tabs';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'todo', component: ToDoListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToDoListComponent
  ],
  imports: [
    BrowserModule,
	MatTabsModule,
    RouterModule.forRoot(routes, { enableTracing: false} ) // enableTracing = logging purposes in console
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
