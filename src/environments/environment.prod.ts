import {
  LensConfig,
  diagnosisMeasure,
  medicationStatementsMeasure,
  patientsMeasure,
  proceduresMeasure,
  specimenMeasure,
} from '@samply/lens-core';
import { Blaze } from '@samply/lens-core/cql';

export const environment = {
  production: true,
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
