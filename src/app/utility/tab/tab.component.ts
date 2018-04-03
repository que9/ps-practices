import { Component, QueryList, OnInit, AfterContentInit, ContentChildren } from '@angular/core';
import { SlotComponent } from './slot.component';

/**
 * https://blog.thoughtram.io/angular/2015/04/09/developing-a-tabs-component-in-angular-2.html
 * https://juristr.com/blog/2016/02/learning-ng2-creating-tab-component/
 * https://blog.thoughtram.io/angular/2017/07/26/a-web-animations-deep-dive-with-angular.html
 */

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})

export class TabComponent implements OnInit, AfterContentInit {
  // Getting a list of intances, which is unmodifieable list of items
  // Angular keeps it uptodate when app state changes
  @ContentChildren(SlotComponent) slots:QueryList<SlotComponent>;
  //slots:SlotComponent[] = [];
  constructor() {
    // --
    console.log("Ctor of tab.compo", this.slots);
  }


  // public addSlot( slot:SlotComponent ){
  //   // Adding a new slot into the list slots
  //   if( !this.slots.length )
  //     slot['active'] = true;
  //   this.slots.push(slot);
  // }


  /**
   * @description Making the given tab selected
   * @param slot
   * @returns undefined
   */
  selectTab(slot:SlotComponent){
    //-- 
    // this.slots.forEach( slot => slot['active'] = false );
    // slot['active'] = true;
    this.slots.toArray().forEach( slot => slot['active'] = false );
    slot['active'] = true;
  }


  ngOnInit() {
    //-- 
    console.log("tabs component ngOnInit ", this.slots );
  }

  // Runs when the components content has initialzed
  ngAfterContentInit() {
    let activeTab = this.slots.filter( slot => slot['active'] === true );
    if( !activeTab.length )
      this.slots.first['active'] = true;
  }

}