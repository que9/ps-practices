import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab/tab.component';
import { SlotComponent } from './tab/slot.component';

const PUBLIC_COMPONENTS = [ TabComponent ];
const PRIVATE_COMPONENTS = [ SlotComponent ];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ...PRIVATE_COMPONENTS  ],
  exports:PRIVATE_COMPONENTS
})

export class UtilityModule { }