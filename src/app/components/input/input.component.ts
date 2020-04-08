import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  public age: number = 36;
  name: string = 'Serhii';
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {this.name = params['name']; this.age = params['age'];})
  }

}
