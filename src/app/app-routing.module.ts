import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { InputComponent } from './components/input/input.component';
import { DataComponent } from './components/data/data.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';


const routes: Routes = [
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'input/:name/:age',
    component: InputComponent
  },
  {
    path: 'data',
    component: DataComponent
  },
  {
    path: 'app-template-driven-form',
    component: TemplateDrivenFormComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
