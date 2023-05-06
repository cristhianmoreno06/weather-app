import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from "./map/map.component";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DataHistoryComponent} from "./data-history/data-history.component";

const routes: Routes = [
  { path: '', component: MapComponent },
  { path: 'history', component: DataHistoryComponent }
];

@NgModule({
  imports: [CommonModule, BrowserModule,BrowserAnimationsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
