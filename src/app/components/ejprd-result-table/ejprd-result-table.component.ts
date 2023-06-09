import { Component } from '@angular/core';
import { Measure, ResultRendererComponent } from '@samply/lens-core';

/*
* A table specialized on displaying the amount of patients and specimen for each site.
* */
@Component({
  selector: 'lens-result-table',
  templateUrl: './ejprd-result-table.component.html',
  styleUrls: ['./ejprd-result-table.component.css'],
})
export class EjprdResultTableComponent extends ResultRendererComponent{
  public tableData: Array<{site: string, patients: number, samples: number, diagnosis: number, genetics: number}> = [];
  protected override handleUpdatedData(measures: Measure[]) {
    // NOTE: This is not used here, we will refactor this later after adding different result-transformers
    // super.handleUpdatedData(measures);
    let sitesMeasure = measures.find(measure => measure.key == 'sites');
    if (sitesMeasure) {
      this.tableData = sitesMeasure.stratifier
        .filter(stratifier => stratifier.key != "patients")
        .map(site => {
          let patientStratum = site.stratum.find(strat => strat.key == "patients")
          let specimenStratum = site.stratum.find(strat => strat.key == "specimen")
          let geneticsStratum = site.stratum.find(strat => strat.key == "genetics")
          return {
            site: site.key,
            patients: (patientStratum != undefined) ? patientStratum.population : 0,
            samples: (specimenStratum != undefined) ? specimenStratum.population : 0,
            genetics: (geneticsStratum != undefined) ? geneticsStratum.population : 0,
            diagnosis: 0,
          }
        }).sort((a, b) => {
          return b.patients - a.patients
        })
    } else {
      this.tableData = []
    }
  }

}
