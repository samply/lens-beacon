// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {
  diagnosisMeasure,
  LensConfig,
  medicationStatementsMeasure,
  patientsMeasure,
  proceduresMeasure,
  specimenMeasure,
} from '@samply/lens-core';
import { Blaze } from '@samply/lens-core/cql';

export const environment = {
  production: false,
  lensConfig: new LensConfig(
    [new Blaze('blaze', new URL('http://localhost:8080'))],
    [
      patientsMeasure,
      diagnosisMeasure,
      specimenMeasure,
      proceduresMeasure,
      medicationStatementsMeasure,
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
