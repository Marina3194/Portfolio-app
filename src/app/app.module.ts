import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{AboutComponent} from './about/about.component'
import { ProfessionalComponent } from './professional/professional.component';
import {FormBuilderComponent} from './form-builder/form-builder.component'
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'}, 
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: "professional", component: ProfessionalComponent},
  { path: "form", component : FormBuilderComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ProfessionalComponent,
    FormBuilderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
