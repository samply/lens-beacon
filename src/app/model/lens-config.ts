/* This defines a measure 'genetics for creating a population of all genetics with additional stratifier Gene-Type */
export const geneticsMeasure = {
    key: "genetics",
    measure: {
      "code": {
        "text": "genetics"
      },
      "extension": [
        {
          "url": "http://hl7.org/fhir/us/cqfmeasures/StructureDefinition/cqfm-populationBasis",
          "valueCode": "Genetics"
        }
      ],
      "population": [
        {
          "code": {
            "coding": [
              {
                "system": "http://terminology.hl7.org/CodeSystem/measure-population",
                "code": "initial-population"
              }
            ]
          },
          "criteria": {
            "language": "text/cql-identifier",
            "expression": "Genetics"
          }
        }
      ],
      "stratifier": [
        {
          "code": {
            "text": "Gene-Type"
          },
          "criteria": {
            "language": "text/cql",
            "expression": "GeneType"
          }
        }
      ]
    },
    cql:
      `
define Genetics:
if InInitialPopulation then [Genetics] else {} as List <Genetics>
`
}
