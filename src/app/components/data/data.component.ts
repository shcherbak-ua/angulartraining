import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  myArr = [];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.myArr = this.data.getAll();
  }

}
