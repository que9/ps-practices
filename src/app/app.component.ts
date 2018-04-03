import { Component } from '@angular/core';
import { Tab, TabCreator } from './utility/tab/tab.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'PS Utility Features';
  tabs:Array<Tab> = [];

  constructor(){
    this.tabs = [
      TabCreator.create("Tab a"),
      TabCreator.create("Tab b")
    ];
  }

}
