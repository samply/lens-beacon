import { Component } from '@angular/core';
import {
  Measure,
  ResultRendererComponent
} from '@samply/lens-core';

/**
 * A table that displays counts of patients, specimens and variants for each site.
 * This was designed to work with the results coming back from a Beacon query.
 * The code was mostly copied-and-pasted from the result-table component in
 * lens-core, with a few tweaks.
 */

@Component({
  selector: 'lens-result-table',
  templateUrl: './beacon-result-table.component.html',
  styleUrls: ['./beacon-result-table.component.css'],
})
export class BeaconResultTableComponent extends ResultRendererComponent {
  public tableData: Array<{site: string, patients: number, samples: number, diagnosis: number}> = [];

  public selectedSites: Array<{site: string, patients: number, samples: number, diagnosis: number}> = [];

  protected override handleUpdatedData(measures: Measure[]) {
    // NOTE: This is not used here, we will refactor this later after adding different result-transformers
    // super.handleUpdatedData(measures);
    let sitesMeasure = measures.find(measure => measure.key == 'sites');
    if (sitesMeasure) {
      this.tableData = sitesMeasure.stratifier
        .filter(stratifier => stratifier.key != "patients")
        .map(site => {
          let geneticsStratum = site.stratum.find(strat => strat.key == "genetics")
          let cohortsStratum = site.stratum.find(strat => strat.key == "cohorts")
          let runsStratum = site.stratum.find(strat => strat.key == "runs")
          let datasetsStratum = site.stratum.find(strat => strat.key == "datasets")
          let analysesStratum = site.stratum.find(strat => strat.key == "analyses")
          let patientStratum = site.stratum.find(strat => strat.key == "patients")
          let specimenStratum = site.stratum.find(strat => strat.key == "specimen")
          return {
            site: site.key,
            genetics: (geneticsStratum != undefined) ? geneticsStratum.population : 0,
            cohorts: (cohortsStratum != undefined) ? cohortsStratum.population : 0,
            runs: (runsStratum != undefined) ? runsStratum.population : 0,
            datasets: (datasetsStratum != undefined) ? datasetsStratum.population : 0,
            analyses: (analysesStratum != undefined) ? analysesStratum.population : 0,
            patients: (patientStratum != undefined) ? patientStratum.population : 0,
            samples: (specimenStratum != undefined) ? specimenStratum.population : 0,
            diagnosis: 0,
          }
        }).sort((a, b) => {
          return b.patients - a.patients
        })
    } else {
      this.tableData = []
    }
  }

  protected override displayPreviousCondition() {
    // Disable the loading of previous condition because user can't click the table
    // super.displayPreviousCondition();
  }

  onSelectedSitesChanged($event: Array<{site: string, patients: number, samples: number, diagnosis: number}>) {
    this.selectedSites = $event;
    this.queryService.selectedNegotiationPartnersSubject$.next($event.map(value => value.site))
  }
}
