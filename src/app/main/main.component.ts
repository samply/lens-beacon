import { Component } from '@angular/core';

import { ResultRenderer } from '@samply/lens-core';
import {
  BarChartComponent,
  PieChartComponent,
} from '@samply/lens-components/chart-js';
import { ResultSummaryBarComponent } from '@samply/lens-components/result-summary-bar';
import { BeaconResultTableComponent } from '../components/beacon-result-table/beacon-result-table.component';

/**
 * Defines the components that will be used to build the Beacon search GUI.
 */

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  private siteHeaders: Map<string, string> = new Map<string, string>();

  private genderHeaders: Map<string, string> = new Map<string, string>()
    .set('male', 'männlich')
    .set('female', 'weiblich')
    .set('other', 'sonstiges / intersexuell')
    .set('unknown', 'unbekannt');

  public diagrams: ResultRenderer[] = [
    new ResultRenderer(
      '',
      [{ key: 'patients', subset: 'sites' }],
      BeaconResultTableComponent,
      {
        headers: this.siteHeaders,
        clickDisabled: true,
        displayProperties: ['extra-wide-diagram'],
      }
    ),
    new ResultRenderer(
      'Gender Distribution',
      [{ key: 'patients', subset: 'Gender' }],
      PieChartComponent,
      { headers: this.genderHeaders }
    ),
    new ResultRenderer(
      "Ethnicity",
      [{key: "patients", subset: "Ethnicity"}],
      BarChartComponent
    ),
    new ResultRenderer(
      'Samples',
      [{ key: 'specimen', subset: 'sample_kind' }],
      BarChartComponent,
      { xAxisTitle: 'Sample types', yAxisTitle: 'Sample count' }
    ),
  ];
}
