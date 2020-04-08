import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-with-output',
  templateUrl: './child-with-output.component.html',
  styleUrls: ['./child-with-output.component.css']
})
export class ChildWithOutputComponent implements OnInit {

  exampleChild = 'Hello';
  @Output() exampleOutput = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  exampleMethodChild() {
    this.exampleOutput.emit(this.exampleChild);
  }
}
