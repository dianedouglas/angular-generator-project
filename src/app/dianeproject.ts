import {Component} from 'angular2/core';


@Component({
  selector: 'dianeproject-app',
  providers: [],
  templateUrl: 'app/dianeproject.html',
  directives: [],
  pipes: []
})
export class DianeprojectApp {
  defaultMeaning: number = 42;
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
