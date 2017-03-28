import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ItemsComponent } from './items/items.component';
import { ItemsDetailComponent } from './items-detail/items-detail.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
{ path: 'items/:id', component: ItemsDetailComponent },
{ path: 'items', component: ItemsComponent },
{ path: 'home', component: HomeComponent },
{ path: 'about', component: AboutComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ItemsComponent,
    ItemsDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
