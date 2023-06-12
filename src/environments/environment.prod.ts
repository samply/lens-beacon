import {LensConfig, patientsMeasure, specimenMeasure} from '@samply/lens-core';
import {Beacon} from "../app/services/beacon";
import {geneticsMeasure} from "../app/model/lens-config";

export const environment = {
  production: true,
  lensConfig: new LensConfig(
    [new Beacon('beacon', new URL('http://localhost:8080'))],
    [
      patientsMeasure,
      specimenMeasure,
      geneticsMeasure // Measure report for variants and other genetic information
    ]
  ),
};
