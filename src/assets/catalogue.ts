import { Category, Criteria } from '@samply/lens-core';
import { Entities } from './entities';
import { Diagnosen } from './diagnosen';
import { Morphologien } from './morphologien';
import { Lokalisation } from './lokalisation';
import { MolecularMarker } from './molecular-marker';

export const staticCatalogue: Array<Category> = [
  new Category('patient', 'Patient', [
    new Criteria(
      'gender',
      { de: 'Geschlecht', en: 'Sex' },
      'string',
      '',
      ['IN'],
      [
        {
          key: 'male',
          de: 'männlich',
          en: 'male',
        },
        {
          key: 'female',
          de: 'weiblich',
          en: 'female',
        },
        {
          key: 'other',
          de: 'Sonstiges / intersexuell',
          en: 'diverse',
        },
        {
          key: 'unknown',
          de: 'unbekannt',
          en: 'unknown',
        },
      ]
    ),
    new Criteria(
      '75186-7',
      { de: 'Vitalstatus', en: 'Vital status' },
      'string',
      'http://dktk.dkfz.de/fhir/onco/core/CodeSystem/VitalstatusCS',
      ['IN'],
      [
        {
          key: 'lebend',
          de: 'lebend',
          en: '',
        },
        {
          key: 'verstorben',
          de: 'verstorben',
          en: '',
        } /*,
            {
              "key": "unbekannt", // @TODO unbekannt can be deleted
              "de": "unbekannt",
              "en": ""
            }*/,
      ]
    ),
  ]),
  new Category('tumor_entity', 'Tumorentität', Entities),
  new Category('tumor_classification', 'Klassifikation von Tumoren', [
    new Criteria(
      'year_of_diagnosis',
      { de: 'Diagnosejahr', en: 'Year of Diagnosis' },
      'number',
      '',
      ['LOWER_THAN', 'GREATER_THAN', 'BETWEEN']
    ),
    new Criteria(
      'age_at_diagnosis',
      { de: 'Alter bei Erstdiagnose', en: 'Age at Diagnosis' },
      'number',
      '',
      ['LOWER_THAN', 'GREATER_THAN', 'BETWEEN']
    ),
    Diagnosen,
    Lokalisation,
    Morphologien, // TODO there is only the possibility to add a code, but (in the central search/reality) it must be possible to search for several codes at the same time.
    // @TODO: Lokalisation (ICD-O-3) is missing
    new Criteria(
      'bodySite',
      { de: 'Seitenlokalisation', en: 'Side location' },
      'string',
      'http://dktk.dkfz.de/fhir/onco/core/CodeSystem/SeitenlokalisationCS',
      ['IN'],
      [
        {
          key: 'L',
          de: 'Links',
          en: '',
        },
        {
          key: 'R',
          de: 'Rechts',
          en: '',
        },
        {
          key: 'B',
          de: 'Beidseitig',
          en: '',
        },
        {
          key: 'M',
          de: 'Mittellinie/Mittig',
          en: '',
        },
        {
          key: 'U',
          de: 'Unbekannt',
          en: '',
        },
        {
          key: 'T',
          de: 'Trifft nicht zu',
          en: '',
        },
      ]
    ),
    new Criteria(
      '59542-1',
      { de: 'Grading', en: 'Grading' },
      'string',
      'http://dktk.dkfz.de/fhir/onco/core/CodeSystem/GradingCS',
      ['IN'],
      [
        {
          key: '0',
          de: 'malignes Melanom der Konjunktiva',
          en: '',
        },
        {
          key: '1',
          de: 'gut differenziert',
          en: '',
        },
        {
          key: '2',
          de: 'mäßig differenziert',
          en: '',
        },
        {
          key: '3',
          de: 'schlecht differenziert',
          en: '',
        },
        {
          key: '4',
          de: 'undifferenziert',
          en: '',
        },
        {
          key: 'X',
          de: 'nicht bestimmbar',
          en: '',
        },
        {
          key: 'L',
          de: 'low grade (G1 oder G2)',
          en: '',
        },
        {
          key: 'M',
          de: 'intermediate (G2 oder G3)',
          en: '',
        },
        {
          key: 'H',
          de: 'high grade (G3 oder G4)',
          en: '',
        },
        {
          key: 'B',
          de: 'Borderline',
          en: '',
        },
        {
          key: 'U',
          de: 'unbekannt',
          en: '',
        },
        {
          key: 'T',
          de: 'trifft nicht zu',
          en: '',
        },
      ]
    ),

    // @TODO: UICC is missing REVIEW es handelt sich trotzdem um eine flache Struktur, obwohl die Darstellung anders ist XXXXXXXXXXXXXXXXXXXXX

    new Criteria(
      '21908-9',
      { de: 'UICC Stadium', en: 'UICC Stadium' },
      'string',
      'http://dktk.dkfz.de/fhir/onco/core/CodeSystem/UiccstadiumCS',
      ['IN'],
      [
        {
          key: '0is',
          de: '0is',
          en: '',
        },
        {
          key: '0a',
          de: '0a',
          en: '',
        },
        {
          key: '0',
          de: '0',
          en: '',
        },
        {
          key: 'IA2',
          de: 'IA2',
          en: '',
        },
        {
          key: 'IA1',
          de: 'IA1',
          en: '',
        },
        {
          key: 'IA',
          de: 'IA',
          en: '',
        },

        {
          key: 'IB2',
          de: 'IB2',
          en: '',
        },
        {
          key: 'IB1',
          de: 'IB1',
          en: '',
        },
        {
          key: 'IB',
          de: 'IB',
          en: '',
        },
        {
          key: 'IIC',
          de: 'IIC',
          en: '',
        },
        {
          key: 'IIB',
          de: 'IIB',
          en: '',
        },
        {
          key: 'IIA2',
          de: 'IIA2',
          en: '',
        },
        {
          key: 'IIA1',
          de: 'IIA1',
          en: '',
        },
        {
          key: 'IIA',
          de: 'IIA',
          en: '',
        },
        {
          key: 'II',
          de: 'II',
          en: '',
        },
        {
          key: 'IIIC2',
          de: 'IIIC2',
          en: '',
        },
        {
          key: 'IIIC1',
          de: 'IIIC1',
          en: '',
        },
        {
          key: 'IIIC',
          de: 'IIIC',
          en: '',
        },
        {
          key: 'IIIB',
          de: 'IIIB',
          en: '',
        },
        {
          key: 'IIIA',
          de: 'IIIA',
          en: '',
        },
        {
          key: 'III',
          de: 'III',
          en: '',
        },

        {
          key: 'IVC',
          de: 'IVC',
          en: '',
        },
        {
          key: 'IVB',
          de: 'IVB',
          en: '',
        },
        {
          key: 'IVA',
          de: 'IVA',
          en: '',
        },
        {
          key: 'IV',
          de: 'IV',
          en: '',
        },
        {
          key: 'IS',
          de: 'IS',
          en: '',
        },
      ]
    ),
    /*new Category(
          "uicc",
          "UICC Stadium",
          [


          ]
        )*/ // @TODO: TNM is missing --> Review (Office cpu was not taken into account. Is that ok? XXXXXXXXXXXXXXXXXXXXXXX
    new Category('tnm', 'TNM(c)', [
      new Criteria(
        '21905-5',
        { de: 'TNM-T', en: 'TNM-T' },
        'string',
        '',
        ['IN'],
        [
          {
            key: '0',
            de: '0',
            en: '',
          },
          {
            key: '1',
            de: '1',
            en: '',
          },
          {
            key: '1a',
            de: '1a',
            en: '',
          },
          {
            key: '1a1',
            de: '1a1',
            en: '',
          },
          {
            key: '1a2',
            de: '1a2',
            en: '',
          },
          {
            key: '1b',
            de: '1b',
            en: '',
          },
          {
            key: '1b1',
            de: '1b1',
            en: '',
          },
          {
            key: '1b2',
            de: '1b2',
            en: '',
          },
          {
            key: '1c',
            de: '1c',
            en: '',
          },
          {
            key: '1c1',
            de: '1c1',
            en: '',
          },
          {
            key: '1c2',
            de: '1c2',
            en: '',
          },
          {
            key: '1c3',
            de: '1c3',
            en: '',
          },
          {
            key: '1d',
            de: '1d',
            en: '',
          },
          {
            key: '1mi',
            de: '1mi',
            en: '',
          },
          {
            key: '2',
            de: '2',
            en: '',
          },
          {
            key: '2a',
            de: '2a',
            en: '',
          },
          {
            key: '2a1',
            de: '2a1',
            en: '',
          },
          {
            key: '2a2',
            de: '2a2',
            en: '',
          },
          {
            key: '2b',
            de: '2b',
            en: '',
          },
          {
            key: '2c',
            de: '2c',
            en: '',
          },
          {
            key: '2d',
            de: '2d',
            en: '',
          },
          {
            key: '3',
            de: '3',
            en: '',
          },
          {
            key: '3a',
            de: '3a',
            en: '',
          },
          {
            key: '3b',
            de: '3b',
            en: '',
          },
          {
            key: '3c',
            de: '3c',
            en: '',
          },
          {
            key: '3d',
            de: '3d',
            en: '',
          },
          {
            key: '4',
            de: '4',
            en: '',
          },
          {
            key: '4a',
            de: '4a',
            en: '',
          },
          {
            key: '4b',
            de: '4b',
            en: '',
          },
          {
            key: '4c',
            de: '4c',
            en: '',
          },
          {
            key: '4d',
            de: '4d',
            en: '',
          },
          {
            key: '4e',
            de: '4e',
            en: '',
          },
          {
            key: 'a',
            de: 'a',
            en: '',
          },
          {
            key: 'is',
            de: 'is',
            en: '',
          },
          {
            key: 'is(DCIS)',
            de: 'is(DCIS)',
            en: '',
          },
          {
            key: 'is(LCIS)',
            de: 'is(LCIS)',
            en: '',
          },
          {
            key: 'is(Paget)',
            de: 'is(Paget)',
            en: '',
          },
          {
            key: 'is(pd)',
            de: 'is(pd)',
            en: '',
          },
          {
            key: 'is(pu)',
            de: 'is(pu)',
            en: '',
          },
          {
            key: 'X',
            de: 'X',
            en: '',
          },
        ]
      ),

      new Criteria(
        '21906-3',
        { de: 'TNM-N', en: 'TNM-N' },
        'string',
        '',
        ['IN'],
        [
          {
            key: '0',
            de: '0',
            en: '',
          },
          {
            key: '0(i+)',
            de: '0(i+)',
            en: '',
          },
          {
            key: '0(i-)',
            de: '0(i-)',
            en: '',
          },
          {
            key: '0(mol+)',
            de: '0(mol+)',
            en: '',
          },
          {
            key: '0(mol-)',
            de: '0(mol-)',
            en: '',
          },
          {
            key: '1',
            de: '1',
            en: '',
          },
          {
            key: '1a',
            de: '1a',
            en: '',
          },
          {
            key: '1b',
            de: '1b',
            en: '',
          },
          {
            key: '1c',
            de: '1c',
            en: '',
          },
          {
            key: '1mi',
            de: '1mi',
            en: '',
          },
          {
            key: '2',
            de: '2',
            en: '',
          },
          {
            key: '2a',
            de: '2a',
            en: '',
          },
          {
            key: '2b',
            de: '2b',
            en: '',
          },
          {
            key: '2c',
            de: '2c',
            en: '',
          },
          {
            key: '3',
            de: '3',
            en: '',
          },
          {
            key: '3a',
            de: '3a',
            en: '',
          },
          {
            key: '3b',
            de: '3b',
            en: '',
          },
          {
            key: '3c',
            de: '3c',
            en: '',
          },
          {
            key: 'X',
            de: 'X',
            en: '',
          },
        ]
      ),

      new Criteria(
        '21907-1',
        { de: 'TNM-M', en: 'TNM-M' },
        'string',
        '',
        ['IN'],
        [
          {
            key: '0',
            de: '0',
            en: '',
          },
          {
            key: '1',
            de: '1',
            en: '',
          },
          {
            key: '1a',
            de: '1a',
            en: '',
          },
          {
            key: '1b',
            de: '1b',
            en: '',
          },
          {
            key: '1c',
            de: '1c',
            en: '',
          },
          {
            key: '1d',
            de: '1d',
            en: '',
          },
          {
            key: '1e',
            de: '1e',
            en: '',
          },
          {
            key: '0(i-)',
            de: '0(i-)',
            en: '',
          },
          {
            key: '0(i+)',
            de: '0(i+)',
            en: '',
          },
          {
            key: '0(mol-)',
            de: '0(mol-)',
            en: '',
          },
          {
            key: '0(mol+)',
            de: '0(mol+)',
            en: '',
          },
        ]
      ),

      new Criteria(
        '42030-7',
        { de: 'TNM-m-Symbol', en: 'TNM-m-Symbol' },
        'string',
        '',
        ['IN'],
        [
          {
            key: 'm',
            de: 'Kennzeichnet Vorhandensein multipler Primärtumoren in einem Bezirk',
            en: '',
          },
          {
            key: '2',
            de: '(2) simultaner Tumoren',
            en: '',
          },
          {
            key: '3',
            de: '(3) simultaner Tumoren',
            en: '',
          },
          {
            key: '4',
            de: '(4) simultaner Tumoren',
            en: '',
          },
          {
            key: '5',
            de: '(5) simultaner Tumoren',
            en: '',
          },
          {
            key: '6',
            de: '(6) simultaner Tumoren',
            en: '',
          },
          {
            key: '7',
            de: '(7) simultaner Tumoren',
            en: '',
          },
          {
            key: '8',
            de: '(8) simultaner Tumoren',
            en: '',
          },
          {
            key: '9',
            de: '(9) simultaner Tumoren',
            en: '',
          },
        ]
      ),

      new Criteria(
        '59479-6',
        { de: 'TNM-y-Symbol', en: 'TNM-y-Symbol' },
        'string',
        '',
        ['IN'],
        [
          {
            key: 'y',
            de: 'Klassifikation erfolgte während oder nach initialer multimodaler Therapie',
            en: '',
          },
          {
            key: '9',
            de: 'native Klassifikation',
            en: '',
          },
        ]
      ),

      new Criteria(
        '21983-2',
        { de: 'TNM-r-Symbol', en: 'TNM-r-Symbol' },
        'string',
        '',
        ['IN'],
        [
          {
            key: 'r',
            de: 'Klassifikation erfolgte zur Beurteilung eines Rezidivs',
            en: '',
          },
          {
            key: '9',
            de: 'native Klassifikation vor Eintreten eines Rezidivs',
            en: '',
          },
        ]
      ),
    ]),
    // @TODO: commented out because it does not yet have a CQL mapping. Must be translated to CQL later
    new Criteria(
      'local_assessment_residual_tumor',
      {
        de: 'Lokale Beurteilung Resttumor',
        en: 'local assessment residual tumor',
      },
      'string',
      'http://dktk.dkfz.de/fhir/onco/core/CodeSystem/LokaleBeurteilungResidualstatusCS',
      ['IN'],
      [
        {
          key: 'R0',
          de: 'kein Residualtumor',
          en: '',
        },
        {
          key: 'R1',
          de: 'Mikroskopischer Residualtumor',
          en: '',
        },
        {
          key: 'R2',
          de: 'Makroskopischer Residualtumor',
          en: '',
        },
        {
          key: 'R1(is)',
          de: 'In-Situ-Rest',
          en: '',
        },
        {
          key: 'R1(cy+)',
          de: 'Cytologischer Rest',
          en: '',
        },
        {
          key: 'RX',
          de: 'Vorhandensein von Residualtumor kann nicht beurteilt werden',
          en: '',
        },
      ]
    ),

    new Criteria(
      'metastases_present',
      { de: 'Fernmetastasen vorhanden', en: 'Distant metastases present' },
      'string',
      '',
      ['IN'],
      [
        {
          key: 'J',
          de: 'Ja',
          en: 'yes',
        },
      ]
    ),
    new Criteria(
      'localization_metastases',
      { de: 'Lokalisation Fernmetastasen', en: 'localization metastases' },
      'string',
      'http://dktk.dkfz.de/fhir/onco/core/CodeSystem/FMLokalisationCS',
      ['IN'],
      [
        {
          key: 'PUL',
          de: 'Lunge',
          en: '',
        },
        {
          key: 'OSS',
          de: 'Knochen',
          en: '',
        },
        {
          key: 'HEP',
          de: 'Leber',
          en: '',
        },
        {
          key: 'BRA',
          de: 'Hirn',
          en: '',
        },
        {
          key: 'LYM',
          de: 'Lymphknoten',
          en: '',
        },
        {
          key: 'MAR',
          de: 'Knochenmark',
          en: '',
        },
        {
          key: 'PLE',
          de: 'Pleura',
          en: '',
        },
        {
          key: 'PER',
          de: 'Peritoneum',
          en: '',
        },
        {
          key: 'ADR',
          de: 'Nebennieren',
          en: '',
        },
        {
          key: 'SKI',
          de: 'Haut',
          en: '',
        },
        { key: 'OTH', de: 'Andere Organe', en: '' },
        { key: 'GEN', de: 'Generalisierte Metastasierung', en: '' },
      ]
    ),
    // TODO
    // @TODO: UICC is missing
    // @TODO: TNM is missing
    // @TODO: Lokale beurteilung is missing
    // @TODO: Fernmitastasen is missing
    // @TODO Lokalisation Fernmittastasen is missing
  ]),
  new Category('therapy_of_tumor', 'Therapie des Tumors', [
    // @TODO: only one category with the following types is necessary: OP, Strahlentherapie, Chemotherapie, Immuntherapie, Hormontherapie und Knochentransplantation  XXXXXXXXXXXXXXXXX
    new Criteria('OP', { de: 'Operation', en: '' }, 'boolean', ''),
    new Criteria('ST', { de: 'Strahlentherapie', en: '' }, 'boolean', ''),
    new Criteria('CH', { de: 'Chemotherapie', en: '' }, 'boolean', ''),
    new Criteria('IM', { de: 'Immunotherapie', en: '' }, 'boolean', ''),
    new Criteria('HO', { de: 'Hormontherapie', en: '' }, 'boolean', ''),
    new Criteria('KM', { de: 'Knochentransplantation', en: '' }, 'boolean', ''),
  ]), // @TODO: Ansprechen auf Therapie is missing --> Review XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  new Category('response_to_therapy', 'Ansprechen auf Therapie', [
    new Criteria(
      '21976-6',
      { de: 'Ansprechen im Verlauf', en: 'Ansprechen im Verlauf' },
      'string',
      '',
      ['IN'],
      [
        {
          key: 'V',
          de: 'Vollremission (complete remission, CR)',
          en: '',
        },
        {
          key: 'T',
          de: 'Teilremission / mindestens 50% Rückgang des Tumors (partial remission, PR)',
          en: '',
        },
        {
          key: 'K',
          de: 'Keine Änderung (no change, NC) = stable disease',
          en: '',
        },
        {
          key: 'P',
          de: 'Progression',
          en: '',
        },
        {
          key: 'D',
          de: 'Divergentes Geschehen',
          en: '',
        },
        {
          key: 'B',
          de: 'Klinische Besserung des Zustandes, Kriterien für Teilremission jedoch nicht erfüllt (minimal response, MR)',
          en: '',
        },
        {
          key: 'R',
          de: 'Vollremission mit residualen Auffälligkeiten (CRr)',
          en: '',
        },
        {
          key: 'U',
          de: 'Beurteilung unmöglich',
          en: '',
        },
        {
          key: 'X',
          de: 'Fehlende Angabe',
          en: '',
        },
      ]
    ),

    new Criteria(
      'LA4583-6',
      { de: 'Lokales/regionäres Rezidiv', en: 'Lokales/regionäres Rezidiv' },
      'string',
      '',
      ['IN'],
      [
        {
          key: 'K',
          de: 'Kein Tumor nachweisbar',
          en: '',
        },
        {
          key: 'T',
          de: 'Tumorreste (Residualtumor)',
          en: '',
        },
        {
          key: 'P',
          de: 'Tumorreste Residualtumor Progress',
          en: '',
        },
        {
          key: 'N',
          de: 'Tumorreste Residualtumor No Change',
          en: '',
        },
        {
          key: 'R',
          de: 'Lokalrezidiv',
          en: '',
        },
        {
          key: 'F',
          de: 'Fraglicher Befund',
          en: '',
        },
        {
          key: 'U',
          de: 'unbekannt',
          en: '',
        },
        {
          key: 'X',
          de: 'Fehlende Angabe',
          en: '',
        },
      ]
    ),

    new Criteria(
      'LA4370-8',
      { de: 'Lymphknoten-Rezidiv', en: 'Lymphknoten-Rezidiv' },
      'string',
      '',
      ['IN'],
      [
        {
          key: 'K',
          de: 'Kein Lymphknotenbefall nachweisbar',
          en: '',
        },
        {
          key: 'R',
          de: 'Neu aufgetretenes Lymphknotenrezidiv',
          en: '',
        },
        {
          key: 'T',
          de: 'bekannter Lymphknotenbefall Residuen',
          en: '',
        },
        {
          key: 'P',
          de: 'bekannter Lymphknotenbefall Progress',
          en: '',
        },
        {
          key: 'N',
          de: 'bekannter Lymphknotenbefall No Change',
          en: '',
        },
        {
          key: 'F',
          de: 'Fraglicher Befund',
          en: '',
        },
        {
          key: 'U',
          de: 'unbekannt',
          en: '',
        },
        {
          key: 'X',
          de: 'Fehlende Angabe',
          en: '',
        },
      ]
    ),

    new Criteria(
      'LA4226-2',
      { de: 'Fernmetastasen', en: 'Fernmetastasen' },
      'string',
      '',
      ['IN'],
      [
        {
          key: 'K',
          de: 'Keine Fernmetastasen nachweisbar',
          en: '',
        },
        {
          key: 'M',
          de: 'Verbliebene Fernmetastase(n)',
          en: '',
        },
        {
          key: 'R',
          de: 'Neu aufgetretene Fernmetastase(n) bzw. Metastasenrezidiv',
          en: '',
        },
        {
          key: 'T',
          de: 'Fernmetastasen Residuen',
          en: '',
        },
        {
          key: 'P',
          de: 'Fernmetastasen Progress',
          en: '',
        },
        {
          key: 'N',
          de: 'Fernmetastasen No Change',
          en: '',
        },
        {
          key: 'F',
          de: 'Fraglicher Befund',
          en: '',
        },
        {
          key: 'U',
          de: 'Unbekannt',
          en: '',
        },
        {
          key: 'X',
          de: 'Fehlende Angabe',
          en: '',
        },
      ]
    ),
  ]),
  new Category('biosamples', 'Bioproben', [
    /*new Criteria(
          "pat_with_samples",
          {de: "Patienten mit Bioproben", en: "Patients with Biosamples"},
          "string",
          "",
          ["IN"],
          [
            {
              "key": "pat_with_samples_value",
              "de": "Ja",
              "en": "yes"
            }
          ]
        ),*/
    new Criteria( // TODO must be adapted to the bbmri valueSet
      'sample_kind',
      { de: 'Probenart', en: 'Sample kind' },
      'string',
      '',
      ['IN'],
      [
        {
          key: 'tumor-tissue-ffpe',
          de: 'Tumorgewebe (FFPE)',
          en: 'Tumor tissue (FFPE)',
        },
        {
          key: 'tumor-tissue-frozen',
          de: 'Tumorgewebe (Kryo/Frisch)',
          en: 'Tumor tissue (frozen)',
        },
        {
          key: 'normal-tissue-ffpe',
          de: 'Normalgewebe (FFPE)',
          en: 'Normal tissue (FFPE)',
        },
        {
          key: 'normal-tissue-frozen',
          de: 'Normalgewebe (Kryo/Frisch)',
          en: 'Normal tissue (frozen)',
        },
        {
          key: 'whole-blood',
          de: 'Vollblut',
          en: 'Whole blood',
        },
        {
          key: 'blood-serum',
          de: 'Serum',
          en: 'serum',
        },
        {
          key: 'blood-plasma',
          de: 'Plasma',
          en: 'Plasma',
        },
        {
          key: 'urine',
          de: 'Urin',
          en: 'urine',
        },
        {
          key: 'csf-liquor',
          de: 'Liquor/CSF',
          en: 'CSF/Liquor',
        },
        {
          key: 'stool-faeces',
          de: 'Stuhl/Kot',
          en: 'Stool/Faeces',
        },
        {
          key: 'bone-marrow',
          de: 'Knochenmark',
          en: 'Bone marrow',
        },
        {
          key: 'dna',
          de: 'DNA',
          en: 'DNA',
        },
        {
          key: 'rna',
          de: 'RNA',
          en: 'RNA',
        },
      ]
    ),
  ]),
  new Category('MolecularMarker1', 'Molekulare Marker', [
    MolecularMarker,
    new Criteria(
      '48005-3',
      { de: 'Aminosäureänderung', en: 'Aminoacidchange' },
      'string',
      'http://loinc.org',
      ['EQUALS']
    ),
    new Criteria(
      '81290-9',
      { de: 'DNA Änderung', en: 'DNAchange' },
      'string',
      'http://loinc.org',
      ['EQUALS']
    ),
    new Criteria(
      '81248-7',
      { de: 'SeqRefNCBI', en: 'SeqRefNCBI' },
      'string',
      'http://loinc.org',
      ['EQUALS']
    ),
    new Criteria(
      '81249-5',
      { de: 'EnsemblID', en: 'EnsemblID' },
      'string',
      'http://loinc.org',
      ['EQUALS']
    ),
  ]),
];
