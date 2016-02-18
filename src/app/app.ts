import {Component, View} from 'angular2/core';

@Component({
  selector: 'cfsiili'
})

@View({
  templateUrl: './app/app.html'
})

export class App {

  constructor() {
    console.info('Ng2 Component Mounted Successfully');
  }

}
