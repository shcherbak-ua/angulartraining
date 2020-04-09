import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ChildWithInputComponent } from './components/child-with-input/child-with-input.component';
import { ChildWithOutputComponent } from './components/child-with-output/child-with-output.component';
import { InputComponent } from './components/input/input.component';
import { DataComponent } from './components/data/data.component';
import { ReverseStrPipe } from './pipes/reverse-str.pipe';
import { ShadowDirective } from './directives/shadow.directive';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChildWithInputComponent,
    ChildWithOutputComponent,
    InputComponent,
    DataComponent,
    ReverseStrPipe,
    ShadowDirective,
    TemplateDrivenFormComponent,
    FormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
