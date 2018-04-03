import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ps-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})

export class SlotComponent implements OnInit {
  @Input() title:string;

  constructor() {
    //console.log("ctor of slot");
    //tab.addSlot(this);
  }

  ngOnInit() {
    console.log('title ', this.title );
  }

}
