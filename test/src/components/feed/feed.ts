import { Component } from '@angular/core';

/**
 * Generated class for the FeedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'feed',
  templateUrl: 'feed.html'
})
export class FeedComponent {

  text: string;

  constructor() {
    console.log('Hello FeedComponent Component');
    this.text = 'Hello World';
  }

}
