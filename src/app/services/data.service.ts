import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getAll(): any[] { //Add a new method getAll()
    return [
    {title: 'My task  1', desc: 'My  task description'},
    {title: 'My task  2', desc: 'My  task description'},
    {title: 'My task  3', desc: 'My  task description'},
    ];
    }
}
