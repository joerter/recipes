import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { RecipeComponent } from './recipe/recipe.component';

@NgModule({
    declarations: [AppComponent, RecipeComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MaterialComponentsModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
