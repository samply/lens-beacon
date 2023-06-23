import {LensConfig, patientsMeasure, specimenMeasure} from '@samply/lens-core';
import {Beacon} from "../app/services/beacon";
import {geneticsMeasure} from "../app/model/lens-config";

/**
 * Specify the request target and measures needed for Beacon queries.
 */

export const environment = {
  production: true,
  lensConfig: new LensConfig(
    // TODO: the URL should come from a parameter
    [new Beacon('beacon', new URL('http://localhost:8080'))],
    [
      patientsMeasure,
      specimenMeasure,
      geneticsMeasure // Measure report for variants and other genetic information
    ]
  ),
};
