import {Category, Criteria} from "@samply/lens-core";

/**
 * Describes the search tree for Beacon.
 */

export const staticCatalogue: Array<Category> = [
  new Category(
    "MolecularMarker1",
    "Genetics",
    [
      new Criteria(
        "genomic_variation",
        // {de: "DNAänderung, z.B. 22:g.16050075A>G", en: "DNA modification, e.g. 22:g.16050075A>G"},
        {de: "DNA modification, e.g. 22:g.16050075A>G", en: "DNA modification, e.g. 22:g.16050075A>G"},
        "string",
        "",
        ["EQUALS"],
      ),
      new Criteria(
        "ensembl_id",
        // {de: "EnsemblID, z.B. ENSG00000125968", en: "EnsemblID, e.g. ENSG00000125968"},
        {de: "EnsemblID, e.g. ENSG00000125968", en: "EnsemblID, e.g. ENSG00000125968"},
        "string",
        "",
        ["EQUALS"],
      ),]
  ),
  new Category(
      "general_data",
      "Clinical data",
      [
        new Criteria(
          "gender",
          // {en: "Sex", de: "Geschlecht"},
          {en: "Sex", de: "Sex"},
          "string",
          "",
          ["IN"],
          [
            {
              "key": "male",
              "en": "male",
              // "de": "männlich"
              "de": "male"
            },
            {
              "key": "female",
              "en": "female",
              // "de": "weiblich"
              "de": "female"
            },
            {
              "key": "other",
              "en": "diverse",
              // "de": "Sonstiges / intersexuell"
              "de": "diverse"
            },
            {
              "key": "unknown",
              "en": "unknown",
              // "de": "unbekannt"
              "de": "unknown"
            }
          ]
        ),
        new Criteria(
          "ethnicity",
          // {en: "Sex", de: "Geschlecht"},
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
        )
      ]
    ),
    new Category(
      "biosamples",
      "Biosample",
      [
        new Criteria(
          "sample_kind",
          // {de: "Probenart", en: "Sample kind"},
          {de: "Sample type", en: "Sample type"},
          "string",
          "",
          ["IN"],
          [
            {
              "key": "blood",
              // "de": "Vollblut",
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
