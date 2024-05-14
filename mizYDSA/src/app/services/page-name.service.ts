import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Page {
  public name?: String;

  constructor() { }

  setName(name: String){
    this.name = name
  }

  getName(): String | undefined {
    return this.name
  }
}
