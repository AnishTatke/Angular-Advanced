import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { PostServiceService } from './services/post-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './assignments/posts/posts.component';
import { FormsComponent } from './assignments/forms/forms.component';
import { HomeComponent } from './assignments/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    FormsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
