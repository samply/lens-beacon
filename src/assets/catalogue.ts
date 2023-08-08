import {Category, Criteria} from "@samply/lens-core";

/**
 * Describes the search tree for Beacon.
 */

export const staticCatalogue: Array<Category> = [
  new Category(
    "MolecularMarker1",
    "Genetic variants",
    [
      new Criteria(
        "genomic_variation",
        {de: "DNA modification, e.g. 22:g.16050075A>G", en: "DNA modification, e.g. 22:g.16050075A>G"},
        "string",
        "",
        ["EQUALS"],
      ),]
  ),
  new Category(
      "general_data",
      "Individuals",
      [
        new Criteria(
          "gender",
          {en: "Sex", de: "Sex"},
          "string",
          "",
          ["IN"],
          [
            {
              "key": "male",
              "en": "male",
              "de": "male"
            },
            {
              "key": "female",
              "en": "female",
              "de": "female"
            }
          ]
        ),
        new Criteria(
          "ethnicity",
          {en: "Ethnicity", de: "Ethnicity"},
          "string",
          "",
          ["IN"],
          [
            {
              "key": "African",
              "en": "African",
              "de": "African"
            },
            {
              "key": "British",
              "en": "British",
              "de": "British"
            },
            {
              "key": "Asian or Asian British",
              "en": "Asian or Asian British",
              "de": "Asian or Asian British"
            },
            {
              "key": "White and Asian",
              "en": "White and Asian",
              "de": "White and Asian"
            },
            {
              "key": "White and Black African",
              "en": "White and Black African",
              "de": "White and Black African"
            },
            {
              "key": "Any other Asian background",
              "en": "Any other Asian background",
              "de": "Any other Asian background"
            },
            {
              "key": "White and Black Caribbean",
              "en": "White and Black Caribbean",
              "de": "White and Black Caribbean"
            },
            {
              "key": "Black or Black British",
              "en": "Black or Black British",
              "de": "Black or Black British"
            },
            {
              "key": "Any other mixed background",
              "en": "Any other mixed background",
              "de": "Any other mixed background"
            },
            {
              "key": "Bangladeshi",
              "en": "Bangladeshi",
              "de": "Bangladeshi"
            },
            {
              "key": "Any other Black background",
              "en": "Any other Black background",
              "de": "Any other Black background"
            },
            {
              "key": "Irish",
              "en": "Irish",
              "de": "Irish"
            },
            {
              "key": "Mixed",
              "en": "Mixed",
              "de": "Mixed"
            },
            {
              "key": "White",
              "en": "White",
              "de": "White"
            },
            {
              "key": "Pakistani",
              "en": "Pakistani",
              "de": "Pakistani"
            },
            {
              "key": "Caribbean",
              "en": "Caribbean",
              "de": "Caribbean"
            },
            {
              "key": "Other ethnic group",
              "en": "Other ethnic group",
              "de": "Other ethnic group"
            },
            {
              "key": "Indian",
              "en": "Indian",
              "de": "Indian"
            },
            {
              "key": "Any other white background",
              "en": "Any other white background",
              "de": "Any other white background"
            },
            {
              "key": "Chinese",
              "en": "Chinese",
              "de": "Chinese"
            }
          ]
        ),
        new Criteria(
          "disease",
          {en: "Disease", de: "Disease"},
          "string",
          "",
          ["IN"],
          [
            {
              "key": "acute bronchitis",
              "en": "acute bronchitis",
              "de": "acute bronchitis"
            },
            {
              "key": "agranulocytosis",
              "en": "agranulocytosis",
              "de": "agranulocytosis"
            },
            {
              "key": "asthma",
              "en": "asthma",
              "de": "asthma"
            },
            {
              "key": "bipolar affective disorder",
              "en": "bipolar affective disorder",
              "de": "bipolar affective disorder"
            },
            {
              "key": "cardiomyopathy",
              "en": "cardiomyopathy",
              "de": "cardiomyopathy"
            },
            {
              "key": "dental caries",
              "en": "dental caries",
              "de": "dental caries"
            },
            {
              "key": "eating disorders",
              "en": "eating disorders",
              "de": "eating disorders"
            },
            {
              "key": "fibrosis and cirrhosis of liver",
              "en": "fibrosis and cirrhosis of liver",
              "de": "fibrosis and cirrhosis of liver"
            },
            {
              "key": "gastro-oesophageal reflux disease",
              "en": "gastro-oesophageal reflux disease",
              "de": "gastro-oesophageal reflux disease"
            },
            {
              "key": "haemorrhoids",
              "en": "haemorrhoids",
              "de": "haemorrhoids"
            },
            {
              "key": "influenza due to certain identified influenza virus",
              "en": "influenza due to certain identified influenza virus",
              "de": "influenza due to certain identified influenza virus"
            },
            {
              "key": "insulin-dependent diabetes mellitus",
              "en": "insulin-dependent diabetes mellitus",
              "de": "insulin-dependent diabetes mellitus"
            },
            {
              "key": "iron deficiency anaemia",
              "en": "iron deficiency anaemia",
              "de": "iron deficiency anaemia"
            },
            {
              "key": "multiple sclerosis",
              "en": "multiple sclerosis",
              "de": "multiple sclerosis"
            },
            {
              "key": "obesity",
              "en": "obesity",
              "de": "obesity"
            },
            {
              "key": "sarcoidosis",
              "en": "sarcoidosis",
              "de": "sarcoidosis"
            },
            {
              "key": "schizophrenia",
              "en": "schizophrenia",
              "de": "schizophrenia"
            },
            {
              "key": "thyroiditis",
              "en": "thyroiditis",
              "de": "thyroiditis"
            },
            {
              "key": "varicose veins of lower extremities",
              "en": "varicose veins of lower extremities",
              "de": "varicose veins of lower extremities"
            }
          ]
        ),
        new Criteria(
          "geographicOrigin",
          {en: "Geographic origin", de: "Geographic origin"},
          "string",
          "",
          ["IN"],
          [
            {
              "key": "Northern Ireland",
              "en": "Northern Ireland",
              "de": "Northern Ireland"
            },
            {
              "key": "Republic of Ireland",
              "en": "Republic of Ireland",
              "de": "Republic of Ireland"
            },
            {
              "key": "Wales",
              "en": "Wales",
              "de": "Wales"
            },
            {
              "key": "Wales",
              "en": "Wales",
              "de": "Wales"
            },
            {
              "key": "England",
              "en": "England",
              "de": "England"
            }
          ]
        ),
        new Criteria(
          "procedureCode",
          {de: "OPCS4 procedure code, e.g. X53.3", en: "OPCS4 procedure code, e.g. X53.3"},
          "string",
          "",
          ["EQUALS"],
        )
      ]
    ),
    new Category(
      "biosamples",
      "Biosamples",
      [
        new Criteria(
          "sample_kind",
          {de: "Sample type", en: "Sample type"},
          "string",
          "",
          ["IN"],
          [
            {
              "key": "blood",
              "de": "Whole blood",
              "en": "Whole blood"
            },
            {
              "key": "blood-serum",
              "de": "Serum",
              "en": "Serum"
            },
            {
              "key": "blood-plasma",
              "de": "Plasma",
              "en": "Plasma"
            },
            {
              "key": "lymph",
              "de": "Lymph",
              "en": "Lymph"
            }
          ]
        )
      ]
    )
]
