import { Category, Criteria } from '@samply/lens-core';
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
    )
    ]
  ),
  new Category('biosamples', 'Bioproben', [
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
        }
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
