import { Component } from '@angular/core';

import { ResultRenderer } from '@samply/lens-core';
import {
  BarChartComponent,
  PieChartComponent,
} from '@samply/lens-components/chart-js';
import { ResultSummaryBarComponent } from '@samply/lens-components/result-summary-bar';
import { ResultTableComponent } from '@samply/lens-components/result-table';

const DIAGNOSIS_REGEX = /C|D0|D4|D37|D38|D39/gm;

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

  private ageHeaders: Map<string, string> = new Map<string, string>()
    .set('0', '0-9')
    .set('10', '10-19')
    .set('20', '20-29')
    .set('30', '30-39')
    .set('40', '40-49')
    .set('50', '50-59')
    .set('60', '60-69')
    .set('70', '70-79')
    .set('80', '80-89')
    .set('90', '90-99')
    .set('100', '100-109')
    .set('110', '110-119');

  private ageSorters: Array<
    (
      a: { key: string; population: number },
      b: { key: string; population: number }
    ) => number
  > = [
    (a, b) => {
      return parseInt(a.key) - parseInt(b.key);
    },
  ];

  private genderHeaders: Map<string, string> = new Map<string, string>()
    .set('male', 'männlich')
    .set('female', 'weiblich')
    .set('other', 'sonstiges / intersexuell')
    .set('unknown', 'unbekannt');

  private vitalStateHeaders: Map<string, string> = new Map<string, string>()
    .set('lebend', 'alive')
    .set('verstorben', 'deceased')
    .set('unbekannt', 'unknown');

  private vitalStateHints: string[] = [
    '"verstorben" bedeutet, dass ein Todesdatum dokumentiert wurde. Die anderen Werte dieser Übersicht wurden noch nicht harmonisiert.',
  ];

  private therapyHeaders: Map<string, string> = new Map<string, string>()
    .set('OP', 'Operationen')
    .set('ST', 'Strahlentherapien')
    .set('medicationStatements', 'Systemische Therapien');

  private summaryBarHeaders: Map<string, string> = new Map<string, string>()
    .set('sites', 'Standorte')
    .set('patients', 'Patienten')
    .set('specimen', 'Proben')
    .set('diagnosis', 'Diagnosen');

  private diagnosisAggregators: Array<
    (
      values: Array<{ key: string; population: number }>
    ) => Array<{ key: string; population: number }>
  > = [
    // Filter the Input
    (values) => {
      return values.filter((value) => DIAGNOSIS_REGEX.test(value.key));
    },
    // Sort alphabetically
    (values) => {
      return values.sort((a, b) => a.key.localeCompare(b.key));
    },
    (values) => {
      if (values.every((value) => value.key.indexOf(values[0].key) !== -1)) {
        return values;
      } else {
        // 1) Reduce the key to the necessary part (for later aggregation leave the .)
        const adjustedIcdCodes = values.map((value) => {
          return {
            key: value.key.substring(0, 4),
            population: value.population,
          };
        });
        // 2) Aggregate the populations
        let aggregatedResults: Array<{ key: string; population: number }> = [];
        adjustedIcdCodes.forEach((value) => {
          const index = aggregatedResults.findIndex(
            (icdCode) => icdCode.key === value.key
          );
          if (index != -1) {
            aggregatedResults[index].population += value.population;
          } else {
            aggregatedResults = [...aggregatedResults, value];
          }
        });
        // 3) Add % for wildcards on codes with .
        const result = aggregatedResults.map((value) => {
          if (value.key.indexOf('.') !== -1) {
            return { key: value.key + '%', population: value.population };
          } else {
            return value;
          }
        });
        return result;
      }
    },
  ];

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
      'Patienten pro Standort',
      [{ key: 'sites', subset: '*' }],
      PieChartComponent,
      { headers: this.siteHeaders, clickDisabled: true }
    ),
    new ResultRenderer(
      '',
      [{ key: 'patients', subset: 'sites' }],
      ResultTableComponent,
      {
        headers: this.siteHeaders,
        clickDisabled: true,
        displayProperties: ['wide-diagram'],
      }
    ),
    new ResultRenderer(
      'Geschlecht',
      [{ key: 'patients', subset: 'Gender' }],
      PieChartComponent,
      { headers: this.genderHeaders }
    ),
    new ResultRenderer(
      'Diagnosen',
      [{ key: 'diagnosis', subset: 'diagnosis' }],
      BarChartComponent,
      {
        indexAxis: 'y',
        aggregators: this.diagnosisAggregators,
        displayProperties: ['high-diagram'],
        xAxisTitle: 'Anzahl der Diagnosen',
        yAxisTitle: 'ICD-10-Codes',
      }
    ),
    new ResultRenderer(
      'Alter bei Erstdiagnose',
      [{ key: 'patients', subset: 'Age' }],
      BarChartComponent,
      {
        headers: this.ageHeaders,
        sorters: this.ageSorters,
        clickDisabled: true,
        displayProperties: ['wide-diagram'],
        xAxisTitle: 'Alter',
        yAxisTitle: 'Anzahl der Primärdiagnosen',
      }
    ),
    new ResultRenderer(
      'Vitalstatus*',
      [{ key: 'patients', subset: '75186-7' }],
      PieChartComponent,
      { hints: this.vitalStateHints }
    ),
    new ResultRenderer(
      'Therapieart',
      [
        { key: 'procedures', subset: 'ProcedureType' },
        { key: 'medicationStatements' },
      ],
      BarChartComponent,
      {
        headers: this.therapyHeaders,
        clickDisabled: true,
        yAxisTitle: 'Anzahl der Therapien',
      }
    ),
    new ResultRenderer(
      'Systemische Therapien',
      [{ key: 'medicationStatements', subset: 'MedicationType' }],
      BarChartComponent,
      { clickDisabled: true, yAxisTitle: 'Anzahl der Therapien' }
    ),
    new ResultRenderer(
      'Proben',
      [{ key: 'specimen', subset: 'sample_kind' }],
      BarChartComponent,
      { xAxisTitle: 'Probentypen', yAxisTitle: 'Probenanzahl' }
    ),
  ];
}
