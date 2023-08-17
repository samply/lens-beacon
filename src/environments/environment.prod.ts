import {LensConfig, patientsMeasure, specimenMeasure} from '@samply/lens-core';
import {Beacon} from "../app/services/beacon";
import {geneticsMeasure} from "../app/model/lens-config";

/**
 * Specify the request target and measures needed for Beacon queries.
 */

export const environment = {
  production: true,
  lensConfig: new LensConfig(
    // The lens-beacon-service URL is assumed to be the same as the one hosting lens.
    [new Beacon('beacon', new URL(window.location.origin + ':8080'))],
    []
  ),
};
