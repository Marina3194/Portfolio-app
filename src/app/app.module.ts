import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{AboutComponent} from './about/about.component'
import { ProfessionalComponent } from './professional/professional.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}, 
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: "professional", component: ProfessionalComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProfessionalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
