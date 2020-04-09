import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  template: ` Input Text: <input type="text" [(ngModel)]="inputValue"> {{inputValue}}`
})
export class TemplateDrivenFormComponent implements OnInit {
  inputValue = '';
  constructor() { }

  ngOnInit() {
  }

}
