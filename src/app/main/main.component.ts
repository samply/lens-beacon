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
  private siteHeaders: Map<string, string> = new Map<string, string>()
    .set('berlin', 'Berlin')
    .set('bonn', 'Bonn')
    .set('dresden', 'Dresden')
    .set('essen', 'Essen')
    .set('frankfurt', 'Frankfurt')
    .set('freiburg', 'Freiburg')
    .set('hannover', 'Hannover')
    .set('mainz', 'Mainz')
    .set('mannheim', 'Mannheim')
    .set('muenchen-lmu', 'München(LMU)')
    .set('muenchen-tum', 'München(TUM)')
    .set('ulm', 'Ulm')
    .set('wuerzburg', 'Würzburg')
    .set('dktk-test', 'DKTK-Test');

  private genderHeaders: Map<string, string> = new Map<string, string>()
    .set('male', 'männlich')
    .set('female', 'weiblich')
    .set('other', 'sonstiges / intersexuell')
    .set('unknown', 'unbekannt');

  private summaryBarHeaders: Map<string, string> = new Map<string, string>()
    .set('sites', 'Standorte')
    .set('patients', 'Patienten')
    .set('specimen', 'Proben')
    .set('diagnosis', 'Diagnosen');

  public summaryBar = new ResultRenderer(
    'Ergebnisse',
    [{ key: 'sites' }, { key: 'patients' }],
    ResultSummaryBarComponent,
    {
      headers: this.summaryBarHeaders,
      clickDisabled: true,
      showNegotiationButton: true,
    }
  );

  public diagrams: ResultRenderer[] = [
    new ResultRenderer(
      'Overview',
      [{ key: 'patients', subset: 'sites' }],
      BeaconResultTableComponent,
      {
        headers: this.siteHeaders,
        clickDisabled: true,
        displayProperties: ['wide-diagram'],
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
