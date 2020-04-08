import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { ChildWithInputComponent } from './components/child-with-input/child-with-input.component';
import { ChildWithOutputComponent } from './components/child-with-output/child-with-output.component';
import { InputComponent } from './components/input/input.component';
import { DataComponent } from './components/data/data.component';
import { ReverseStrPipe } from './pipes/reverse-str.pipe';
import { ShadowDirective } from './directives/shadow.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ChildWithInputComponent,
    ChildWithOutputComponent,
    InputComponent,
    DataComponent,
    ReverseStrPipe,
    ShadowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
