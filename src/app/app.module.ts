import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {SaveListComponent} from './save/save-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SearchComponent} from '../app/srch/search.component'; 
import {Router, RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SvdComponent } from './saved/svd.component';

const appRoutes: Routes = [
    {path:'', component:SearchComponent},
    {path:'saved',component:SaveListComponent},
    {path:'srch/:id', component:SvdComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SaveListComponent,
    SvdComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }