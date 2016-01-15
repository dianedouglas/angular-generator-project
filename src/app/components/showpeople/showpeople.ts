import {Component} from 'angular2/core';


@Component({
  selector: 'showpeople',
  templateUrl: 'app/components/showpeople/showpeople.html',
  styleUrls: ['app/components/showpeople/showpeople.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Showpeople {
  name: string;
  constructor() {
    this.name = "Alice";
  }

}
