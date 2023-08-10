import {Category, Criteria} from "@samply/lens-core";

/**
 * Describes the search tree for Beacon.
 */

export const staticCatalogue: Array<Category> = [
  new Category(
    "MolecularMarker1",
    "Variants",
    [
      new Criteria(
        "genomic_variation",
        {de: "DNA modification, e.g. 22:g.16050075A>G", en: "DNA modification, e.g. 22:g.16050075A>G"},
        "string",
        "",
        ["EQUALS"],
      ),
      new Criteria(
        "variant_type",
        {en: "Variant Type", de: "Variant Type"},
        "string",
        "",
        ["IN"],
        [
          {
            "key": "Variant",
            "en": "Variant",
            "de": "Variant"
          },
          {
            "key": "Sequence variant",
            "en": "Sequence variant",
            "de": "Sequence variant"
          },
          {
            "key": "Structural variant",
            "en": "Structural variant",
            "de": "Structural variant"
          },
          {
            "key": "Allele",
            "en": "Allele",
            "de": "Allele"
          },
          {
            "key": "Short tandem repeat variant",
            "en": "Short tandem repeat variant",
            "de": "Short tandem repeat variant"
          },
          {
            "key": "Splice acceptor variant",
            "en": "Splice acceptor variant",
            "de": "Splice acceptor variant"
          },
          {
            "key": "Splice donor variant",
            "en": "Splice donor variant",
            "de": "Splice donor variant"
          },
          {
            "key": "Frameshift variant",
            "en": "Frameshift variant",
            "de": "Frameshift variant"
          },
          {
            "key": "Missense variant",
            "en": "Missense variant",
            "de": "Missense variant"
          },
          {
            "key": "Protein altering variant",
            "en": "Protein altering variant",
            "de": "Protein altering variant"
          },
          {
            "key": "Splice region variant",
            "en": "Splice region variant",
            "de": "Splice region variant"
          },
          {
            "key": "Incomplete terminal codon variant",
            "en": "Incomplete terminal codon variant",
            "de": "Incomplete terminal codon variant"
          },
          {
            "key": "Intergenic variant",
            "en": "Intergenic variant",
            "de": "Intergenic variant"
          },
          {
            "key": "Stop retained variant",
            "en": "Stop retained variant",
            "de": "Stop retained variant"
          },
          {
            "key": "Synonymous variant",
            "en": "Synonymous variant",
            "de": "Synonymous variant"
          },
          {
            "key": "Flagged variant",
            "en": "Flagged variant",
            "de": "Flagged variant"
          }        ]
      ),
      new Criteria(
        "zygosity",
        {en: "Zygosity", de: "Zygosity"},
        "string",
        "",
        ["IN"],
        [
          {
            "key": "Hemizygous",
            "en": "Hemizygous",
            "de": "Hemizygous"
          },
          {
            "key": "Heterozygous",
            "en": "Heterozygous",
            "de": "Heterozygous"
          },
          {
            "key": "Homozygous",
            "en": "Homozygous",
            "de": "Homozygous"
          },
          {
            "key": "Hemizygous X-linked",
            "en": "Hemizygous X-linked",
            "de": "Hemizygous X-linked"
          },
          {
            "key": "Hemizygous Y-linked",
            "en": "Hemizygous Y-linked",
            "de": "Hemizygous Y-linked"
          },
          {
            "key": "Hemizygous insertion-linked",
            "en": "Hemizygous insertion-linked",
            "de": "Hemizygous insertion-linked"
          },
          {
            "key": "Simple heterozygous",
            "en": "Simple heterozygous",
            "de": "Simple heterozygous"
          },
          {
            "key": "Disomic zygosity",
            "en": "Disomic zygosity",
            "de": "Disomic zygosity"
          },
          {
            "key": "Aneusomic zygosity",
            "en": "Aneusomic zygosity",
            "de": "Aneusomic zygosity"
          },
          {
            "key": "Trisomic homozygous",
            "en": "Trisomic homozygous",
            "de": "Trisomic homozygous"
          },
          {
            "key": "Trisomic heterozygous",
            "en": "Trisomic heterozygous",
            "de": "Trisomic heterozygous"
          },
          {
            "key": "Compound heterozygous",
            "en": "Compound heterozygous",
            "de": "Compound heterozygous"
          }
        ]
      )
    ]
  ),
  new Category(
    "cohorts",
    "Cohorts",
    [
      new Criteria(
        "cohorts_gender",
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
        "cohorts_geographicOrigin",
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
      )
    ]
  ),
  new Category(
    "runs",
    "Runs",
    [
      new Criteria(
        "genomic_source",
        {en: "Genomic source", de: "Genomic source"},
        "string",
        "",
        ["IN"],
        [
          {
            "key": "Genomic Source",
            "en": "Genomic Source",
            "de": "Genomic Source"
          },
          {
            "key": "Metagenomic Source",
            "en": "Metagenomic Source",
            "de": "Metagenomic Source"
          }
        ]
      ),
      new Criteria(
        "platform_model",
        {en: "Platform model", de: "Platform model"},
        "string",
        "",
        ["IN"],
        [
          {
            "key": "DNA sequencer",
            "en": "DNA sequencer",
            "de": "DNA sequencer"
          },
          {
            "key": "Illumina HiSeq 2000",
            "en": "Illumina HiSeq 2000",
            "de": "Illumina HiSeq 2000"
          },
          {
            "key": "Oxford Nanopore MinION",
            "en": "Oxford Nanopore MinION",
            "de": "Oxford Nanopore MinION"
          },
          {
            "key": "Large-insert clone DNA microarray",
            "en": "Large-insert clone DNA microarray",
            "de": "Large-insert clone DNA microarray"
          }
        ]
      )
    ]
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
        ),
        new Criteria(
          "biosample_status",
          {de: "Biosample status", en: "Biosample status"},
          "string",
          "",
          ["IN"],
          [
            {
              "key": "Reference sample",
              "de": "Reference sample",
              "en": "Reference sample"
            },
            {
              "key": "Abnormal sample",
              "de": "Abnormal sample",
              "en": "Abnormal sample"
            }
          ]
        )
      ]
    )
]
