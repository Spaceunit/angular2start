import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>My favorite hero is: {{myHero}}</h2>
    <p>Heroes:</p>
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero }}
      </li>
    </ul>
  `
  //or we can use templateUrl
})
export class AppComponent {
  title:    string;
  heroes:   [string];
  myHero:   string;
  constructor() {
    this.title    = 'Tour of Heroes';
    this.heroes   = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    this.myHero = this.heroes[0];
    //'Windstorm'

  }
}

