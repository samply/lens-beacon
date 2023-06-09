import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeaconResultTableComponent } from "./beacon-result-table.component";
import { TableModule } from "primeng/table";
import { CardModule } from "primeng/card";
import { NegotiateButtonModule } from '@samply/lens-components/negotiate-button';



@NgModule({
  declarations: [
    BeaconResultTableComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    CardModule,
    NegotiateButtonModule
  ],
  exports: [
    BeaconResultTableComponent
  ]
})
export class BeaconResultTableModule {}
