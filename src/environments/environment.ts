// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {
  LensConfig,
  patientsMeasure,
  specimenMeasure,
} from '@samply/lens-core';
import {geneticsMeasure} from '../app/model/lens-config';
import {Beacon} from '../app/services/beacon';

/**
 * Specify the request target and measures needed for Beacon queries.
 */

export const environment = {
  production: false,
  lensConfig: new LensConfig(
    [new Beacon('beacon', new URL('http://localhost:8080'))],
    [
      patientsMeasure,
      specimenMeasure,
      geneticsMeasure // Measure report for variants and other genetic information
    ]
  ),
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
