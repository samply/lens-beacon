import { Category, Criteria, Operation, Condition } from '@samply/lens-core';

export const Entities: Category[] = [
  new Category('urn:dktk:code:2:2', 'Neuroonkologie', [
    new Criteria(
      'gliom_all_groups',
      { de: 'Gliome, alle Gruppen', en: 'Gliom, all groups' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D43.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9383/1'),
                new Condition('59847-4', 'EQUALS', '', '9384/1'),
                new Condition('59847-4', 'EQUALS', '', '9394/1'),
                new Condition('59847-4', 'EQUALS', '', '9421/1'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:3:2',
          'Gliom - Grad I',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C71.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C72.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9382/3'),
                new Condition('59847-4', 'EQUALS', '', '9391/3'),
                new Condition('59847-4', 'EQUALS', '', '9400/3'),
                new Condition('59847-4', 'EQUALS', '', '9424/3'),
                new Condition('59847-4', 'EQUALS', '', '9425/3'),
                new Condition('59847-4', 'EQUALS', '', '9450/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:4:2',
          'Gliom - Grad II',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C71.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C72.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9381/3'),
                new Condition('59847-4', 'EQUALS', '', '9382/3'),
                new Condition('59847-4', 'EQUALS', '', '9401/3'),
                new Condition('59847-4', 'EQUALS', '', '9451/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:5:2',
          'Gliom - Grad III',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C71.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C72.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9440/3'),
                new Condition('59847-4', 'EQUALS', '', '9441/3'),
                new Condition('59847-4', 'EQUALS', '', '9442/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:6:2',
          'Gliom - Grad IV',
          ''
        ),
      ]
    ),
    new Criteria(
      'neuro_neoplasien',
      { de: 'Neoplasien', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D43.%'),
            new Condition('59847-4', 'EQUALS', '', '9390/1'),
          ],
          'urn:dktk:code:7:2',
          'Neoplasie des Plexus chorioideus - Grad II',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C71.%'),
            new Condition('59847-4', 'EQUALS', '', '9390/3'),
          ],
          'urn:dktk:code:8:2',
          'Neoplasie des Plexus chorioideus - Grad III',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D43.%'),
            new Condition('59847-4', 'EQUALS', '', '9506/1'),
          ],
          'urn:dktk:code:10:2',
          'Neuroepitheliomatöse Neoplasie - Grad II',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D43.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8680/1'),
                new Condition('59847-4', 'EQUALS', '', '9412/1'),
                new Condition('59847-4', 'EQUALS', '', '9505/1'),
                new Condition('59847-4', 'EQUALS', '', '9509/1'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:9:2',
          'Neuroepitheliomatöse Neoplasie - Grad I',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C71.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C72.%'),
              ],
              '',
              '',
              ''
            ),
            new Condition('59847-4', 'EQUALS', '', '9505/3'),
          ],
          'urn:dktk:code:11:2',
          'Neuroepitheliomatöse Neoplasie - Grad III',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C72.%'),
            new Condition('59847-4', 'EQUALS', '', '9571/3'),
          ],
          'urn:dktk:code:12:2',
          'Tumor der kranialen und spinalen Nerven - Grad III',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C72.%'),
            new Condition('59847-4', 'EQUALS', '', '9540/3'),
          ],
          'urn:dktk:code:13:2',
          'Tumor der kranialen und spinalen Nerven - Grade II-IV',
          ''
        ),
      ]
    ),
    new Criteria(
      'neuro_tumorgruppen',
      { de: 'Weitere neuroonkologische Tumorgruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C70.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9150/3'),
                new Condition('59847-4', 'EQUALS', '', '9530/3'),
                new Condition('59847-4', 'EQUALS', '', '9538/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:14:2',
          'Neoplasie der Meningen - Grad III',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C71.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C72.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9470/3'),
                new Condition('59847-4', 'EQUALS', '', '9471/3'),
                new Condition('59847-4', 'EQUALS', '', '9474/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:15:2',
          'Medulloblastom - Grad IV',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C71.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C72.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9392/3'),
                new Condition('59847-4', 'EQUALS', '', '9473/3'),
                new Condition('59847-4', 'EQUALS', '', '9490/3'),
                new Condition('59847-4', 'EQUALS', '', '9500/3'),
                new Condition('59847-4', 'EQUALS', '', '9501/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:16:2',
          'Neuroektodermaler Tumor - Grad IV',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C71.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C72.%'),
              ],
              '',
              '',
              ''
            ),
            new Condition('59847-4', 'EQUALS', '', '9508/3'),
          ],
          'urn:dktk:code:17:2',
          'Atypischer teratoider/rhabdoider Tumor - Grad IV',
          ''
        ),
      ]
    ),
    new Criteria(
      'gliosarkom',
      { de: 'Gliosarkom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C40.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C41.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C70.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C71.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C72.%'),
              ],
              '',
              '',
              ''
            ),
            new Condition('59847-4', 'EQUALS', '', '9442/3'),
          ],
          'urn:dktk:code:18:2',
          'Gliosarkom',
          ''
        ),
      ]
    ),
    new Criteria(
      'zns_lymphom',
      { de: 'ZNS_Lymphom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C83.3'),
            new Condition('59847-4', 'EQUALS', '', '9680/3'),
          ],
          'urn:dktk:code:19:2',
          'ZNS-Lymphom (diffuses großzelliges B-Zell-Lymphom)',
          ''
        ),
      ]
    ),
  ]),
  new Category('urn:dktk:code:20:2', 'Kopf-Hals-Tumore', [
    new Criteria(
      'kopf_hals_ca',
      { de: 'Kopf-Hals-Ca, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C00.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C01'),
                new Condition('diagnosis', 'CONTAINS', '', 'C02.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C03.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C04.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C05.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C06.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C07'),
                new Condition('diagnosis', 'CONTAINS', '', 'C08.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:21:2',
          'Mundhöhle: Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C13.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:25:2',
          'Hypopharynx: Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C07'),
                new Condition('diagnosis', 'CONTAINS', '', 'C08.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8200/3'),
                new Condition('59847-4', 'EQUALS', '', '8260/3'),
                new Condition('59847-4', 'EQUALS', '', '8290/3'),
                new Condition('59847-4', 'EQUALS', '', '8330/3'),
                new Condition('59847-4', 'EQUALS', '', '8340/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:22:2',
          'Speicheldrüse: Adeno-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C30.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C31.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:27:2',
          'Nasenhöhle, Nasennebenhöhle und Mittelohr: Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C11.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
                new Condition('59847-4', 'EQUALS', '', '8082/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:24:2',
          'Nasopharynx: Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C09.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C10.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C12.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:23:2',
          'Oropharynx: Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C14.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:26:2',
          'Allgemein Mundhöhle/Rachen: Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C32.2'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:30:2',
          'Larynx - Subglottis: Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C32.0'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:28:2',
          'Larynx - Glottis: Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C32.1'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:29:2',
          'Larynx - Supraglottis: Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C32.3'),
                new Condition('diagnosis', 'CONTAINS', '', 'C32.8'),
                new Condition('diagnosis', 'CONTAINS', '', 'C32.9'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:31:2',
          'Larynx - Andere: Plattenepithel-Ca',
          ''
        ),
      ]
    ),
    new Criteria(
      'cup',
      { de: 'Cancer of unknown primary (CUP)', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C77.0'),
                new Condition('diagnosis', 'CONTAINS', '', 'C77.9'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:32:2',
          'Cancer of unknown primary (CUP): Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C80.9'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:33:2',
          'Cancer of unknown primary (CUP)-extranodal: Plattenepithel-Ca',
          ''
        ),
      ]
    ),
  ]),
  new Category('urn:dktk:code:34:2', 'Thoraxonkologie', [
    new Criteria(
      'nsclc',
      { de: 'NSCLC, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C34.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8141/3'),
                new Condition('59847-4', 'EQUALS', '', '8143/3'),
                new Condition('59847-4', 'EQUALS', '', '8147/3'),
                new Condition('59847-4', 'EQUALS', '', '8250/3'),
                new Condition('59847-4', 'EQUALS', '', '8251/3'),
                new Condition('59847-4', 'EQUALS', '', '8252/3'),
                new Condition('59847-4', 'EQUALS', '', '8253/3'),
                new Condition('59847-4', 'EQUALS', '', '8255/3'),
                new Condition('59847-4', 'EQUALS', '', '8260/3'),
                new Condition('59847-4', 'EQUALS', '', '8310/3'),
                new Condition('59847-4', 'EQUALS', '', '8333/3'),
                new Condition('59847-4', 'EQUALS', '', '8470/3'),
                new Condition('59847-4', 'EQUALS', '', '8480/3'),
                new Condition('59847-4', 'EQUALS', '', '8490/3'),
                new Condition('59847-4', 'EQUALS', '', '8550/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:35:2',
          'NSCLC: Adeno-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C34.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8010/3'),
                new Condition('59847-4', 'EQUALS', '', '8082/3'),
                new Condition('59847-4', 'EQUALS', '', '8123/3'),
                new Condition('59847-4', 'EQUALS', '', '8230/3'),
                new Condition('59847-4', 'EQUALS', '', '8310/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:41:2',
          'NSCLC, anderes: NOS',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C34.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8244/3'),
                new Condition('59847-4', 'EQUALS', '', '8254/3'),
                new Condition('59847-4', 'EQUALS', '', '8323/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:42:2',
          'NSCLC, anderes: NOS kombiniert',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C34.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
                new Condition('59847-4', 'EQUALS', '', '8073/3'),
                new Condition('59847-4', 'EQUALS', '', '8083/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:36:2',
          'NSCLC: Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C34.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8012/3'),
                new Condition('59847-4', 'EQUALS', '', '8014/3'),
                new Condition('59847-4', 'EQUALS', '', '8046/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:38:2',
          'NSCLC, anderes: großzelliges Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C34.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8200/3'),
                new Condition('59847-4', 'EQUALS', '', '8430/3'),
                new Condition('59847-4', 'EQUALS', '', '8550/3'),
                new Condition('59847-4', 'EQUALS', '', '8562/3'),
                new Condition('59847-4', 'EQUALS', '', '8940/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:40:2',
          'NSCLC, anderes: Speicheldrüsen-ähnliches Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C34.%'),
            new Condition('59847-4', 'EQUALS', '', '8560/3'),
          ],
          'urn:dktk:code:37:2',
          'NSCLC, anderes: adenosquamöses Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C34.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8022/3'),
                new Condition('59847-4', 'EQUALS', '', '8030/3'),
                new Condition('59847-4', 'EQUALS', '', '8031/3'),
                new Condition('59847-4', 'EQUALS', '', '8032/3'),
                new Condition('59847-4', 'EQUALS', '', '8972/3'),
                new Condition('59847-4', 'EQUALS', '', '8973/3'),
                new Condition('59847-4', 'EQUALS', '', '8980/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:39:2',
          'NSCLC, anderes: sarkomatoides Ca',
          ''
        ),
      ]
    ),
    new Criteria(
      'sclc',
      { de: 'SCLC (ohne neuroendokrines Ca', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C34.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8041/3'),
                new Condition('59847-4', 'EQUALS', '', '8043/3'),
                new Condition('59847-4', 'EQUALS', '', '8044/3'),
                new Condition('59847-4', 'EQUALS', '', '8045/3'),
                new Condition('59847-4', 'EQUALS', '', '8073/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:43:2',
          'SCLC (ohne neuroendokrines Ca)',
          ''
        ),
      ]
    ),
    new Criteria(
      'neuro_ca',
      { de: 'Neuroendokrines Ca (ohne SCLC', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C34.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8013/3'),
                new Condition('59847-4', 'EQUALS', '', '8240/3'),
                new Condition('59847-4', 'EQUALS', '', '8244/3'),
                new Condition('59847-4', 'EQUALS', '', '8246/3'),
                new Condition('59847-4', 'EQUALS', '', '8249/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:44:2',
          'Neuroendocrines Ca (ohne SCLC)',
          ''
        ),
      ]
    ),
    new Criteria(
      'lungensarkom',
      { de: 'Lungensarkom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C34.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C49.3'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8800/3'),
                new Condition('59847-4', 'EQUALS', '', '8802/3'),
                new Condition('59847-4', 'EQUALS', '', '8810/3'),
                new Condition('59847-4', 'EQUALS', '', '8830/3'),
                new Condition('59847-4', 'EQUALS', '', '8890/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:45:2',
          'Lungensarkom',
          ''
        ),
      ]
    ),
    new Criteria(
      'thymom',
      { de: 'Thymom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C37'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8580/3'),
                new Condition('59847-4', 'EQUALS', '', '8581/3'),
                new Condition('59847-4', 'EQUALS', '', '8582/3'),
                new Condition('59847-4', 'EQUALS', '', '8583/3'),
                new Condition('59847-4', 'EQUALS', '', '8584/3'),
                new Condition('59847-4', 'EQUALS', '', '8585/3'),
                new Condition('59847-4', 'EQUALS', '', '8586/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:46:2',
          'Thymom',
          ''
        ),
      ]
    ),
    new Criteria(
      'mesotheliom',
      { de: 'Malignes Mesotheliom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C45.0'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9050/3'),
                new Condition('59847-4', 'EQUALS', '', '9051/3'),
                new Condition('59847-4', 'EQUALS', '', '9052/3'),
                new Condition('59847-4', 'EQUALS', '', '9053/3 '),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:47:2',
          'Malignes Mesotheliom',
          ''
        ),
      ]
    ),
  ]),
  new Category('urn:dktk:code:34:2', 'Gastrointestinale Onkologie', [
    new Criteria(
      'ösophagus',
      { de: 'Osophagus/Magenübergang-Ca, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C15.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8200/3'),
                new Condition('59847-4', 'EQUALS', '', '8211/3'),
                new Condition('59847-4', 'EQUALS', '', '8260/3'),
                new Condition('59847-4', 'EQUALS', '', '8430/3'),
                new Condition('59847-4', 'EQUALS', '', '8480/3'),
                new Condition('59847-4', 'EQUALS', '', '8560/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:49:2',
          'Ösophagus: Adeno-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C15.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:50:2',
          'Ösophagus: Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C15.5'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8144/3'),
                new Condition('59847-4', 'EQUALS', '', '8145/3'),
                new Condition('59847-4', 'EQUALS', '', '8211/3'),
                new Condition('59847-4', 'EQUALS', '', '8260/3'),
                new Condition('59847-4', 'EQUALS', '', '8480/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:51:2',
          'Ösophagus: Barrett-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C16.0 '),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8144/3'),
                new Condition('59847-4', 'EQUALS', '', '8145/3'),
                new Condition('59847-4', 'EQUALS', '', '8200/3'),
                new Condition('59847-4', 'EQUALS', '', '8211/3'),
                new Condition('59847-4', 'EQUALS', '', '8260/3'),
                new Condition('59847-4', 'EQUALS', '', '8430/3'),
                new Condition('59847-4', 'EQUALS', '', '8480/3'),
                new Condition('59847-4', 'EQUALS', '', '8560/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:52:2',
          'Magenübergang: Adeno-Ca',
          ''
        ),
      ]
    ),
    new Criteria(
      'magen_tumore',
      { de: 'Magen Tumore, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C16.1'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.2'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.3'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.4'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.5'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.6'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.8'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.9'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8144/3'),
                new Condition('59847-4', 'EQUALS', '', '8145/3'),
                new Condition('59847-4', 'EQUALS', '', '8211/3'),
                new Condition('59847-4', 'EQUALS', '', '8260/3'),
                new Condition('59847-4', 'EQUALS', '', '8480/3'),
                new Condition('59847-4', 'EQUALS', '', '8490/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:53:2',
          'Magen: Adeno-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C16.1'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.2'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.3'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.4'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.5'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.6'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.8'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.9'),
              ],
              '',
              '',
              ''
            ),
            new Condition('59847-4', 'EQUALS', '', '8142/3'),
          ],
          'urn:dktk:code:54:2',
          'Magen: Linitis plastica',
          ''
        ),
      ]
    ),
    new Criteria(
      'gastro_tumore',
      { de: 'Gastrointestinale Tumore, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C16.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C17.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C18.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C19'),
                new Condition('diagnosis', 'CONTAINS', '', 'C20'),
                new Condition('diagnosis', 'CONTAINS', '', 'C21.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C22.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C23'),
                new Condition('diagnosis', 'CONTAINS', '', 'C24.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C25.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:55:2',
          'Gastrointestinal: Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C17.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8211/3'),
                new Condition('59847-4', 'EQUALS', '', '8215/3'),
                new Condition('59847-4', 'EQUALS', '', '8221/3'),
                new Condition('59847-4', 'EQUALS', '', '8245/3'),
                new Condition('59847-4', 'EQUALS', '', '8260/3'),
                new Condition('59847-4', 'EQUALS', '', '8261/3'),
                new Condition('59847-4', 'EQUALS', '', '8262/3'),
                new Condition('59847-4', 'EQUALS', '', '8263/3'),
                new Condition('59847-4', 'EQUALS', '', '8480/3'),
                new Condition('59847-4', 'EQUALS', '', '8490/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:56:2',
          'Dünndarm: Adeno-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C18.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C19'),
                new Condition('diagnosis', 'CONTAINS', '', 'C20'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8211/3'),
                new Condition('59847-4', 'EQUALS', '', '8215/3'),
                new Condition('59847-4', 'EQUALS', '', '8221/3'),
                new Condition('59847-4', 'EQUALS', '', '8245/3'),
                new Condition('59847-4', 'EQUALS', '', '8260/3'),
                new Condition('59847-4', 'EQUALS', '', '8261/3'),
                new Condition('59847-4', 'EQUALS', '', '8262/3'),
                new Condition('59847-4', 'EQUALS', '', '8263/3'),
                new Condition('59847-4', 'EQUALS', '', '8480/3'),
                new Condition('59847-4', 'EQUALS', '', '8490/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:57:2',
          'Kolorektal: Adeno-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C21.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8145/3'),
                new Condition('59847-4', 'EQUALS', '', '8211/3'),
                new Condition('59847-4', 'EQUALS', '', '8260/3'),
                new Condition('59847-4', 'EQUALS', '', '8480/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:58:2',
          'Anal: Adeno-Ca',
          ''
        ),
      ]
    ),
    new Criteria(
      'leber_ca',
      { de: 'Leber-Ca, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C22.0'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8170/3'),
                new Condition('59847-4', 'EQUALS', '', '8172/3'),
                new Condition('59847-4', 'EQUALS', '', '8173/3'),
                new Condition('59847-4', 'EQUALS', '', '8174/3'),
                new Condition('59847-4', 'EQUALS', '', '8175/3'),
                new Condition('59847-4', 'EQUALS', '', '8180/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:59:2',
          'Leber: HCC',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C22.1'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8160/3'),
                new Condition('59847-4', 'EQUALS', '', '8161/3'),
                new Condition('59847-4', 'EQUALS', '', '8162/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:61:2',
          'Leber: CCC',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C22.0'),
            new Condition('59847-4', 'EQUALS', '', '8171/3'),
          ],
          'urn:dktk:code:60:2',
          'Leber: fibrolamelläres Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C22.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C23'),
                new Condition('diagnosis', 'CONTAINS', '', 'C24.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8453/3'),
                new Condition('59847-4', 'EQUALS', '', '8470/3'),
                new Condition('59847-4', 'EQUALS', '', '8480/3'),
                new Condition('59847-4', 'EQUALS', '', '8490/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:62:2',
          'Leber/Galle, anderes',
          ''
        ),
      ]
    ),
    new Criteria(
      'pankreas_ca',
      { de: 'Pankreas-Ca, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C25.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8453/3'),
                new Condition('59847-4', 'EQUALS', '', '8470/3'),
                new Condition('59847-4', 'EQUALS', '', '8480/3'),
                new Condition('59847-4', 'EQUALS', '', '8490/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:63:2',
          'Pankreas: muzinöses Adeno-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C25.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8150/3'),
                new Condition('59847-4', 'EQUALS', '', '8151/3'),
                new Condition('59847-4', 'EQUALS', '', '8152/3'),
                new Condition('59847-4', 'EQUALS', '', '8153/3'),
                new Condition('59847-4', 'EQUALS', '', '8154/3'),
                new Condition('59847-4', 'EQUALS', '', '8155/3'),
                new Condition('59847-4', 'EQUALS', '', '8156/3'),
                new Condition('59847-4', 'EQUALS', '', '8163/3'),
                new Condition('59847-4', 'EQUALS', '', '8241/3'),
                new Condition('59847-4', 'EQUALS', '', '8243/3'),
                new Condition('59847-4', 'EQUALS', '', '8441/3'),
                new Condition('59847-4', 'EQUALS', '', '8452/3'),
                new Condition('59847-4', 'EQUALS', '', '8500/3'),
                new Condition('59847-4', 'EQUALS', '', '8550/3'),
                new Condition('59847-4', 'EQUALS', '', '8551/3'),
                new Condition('59847-4', 'EQUALS', '', '8971/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:64:2',
          'Pankreas, anderes',
          ''
        ),
      ]
    ),
    new Criteria(
      'neuroendokrine_tumore_1_4',
      { de: 'Neuroendokrine Tumore, Grad I bis IV', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [new Condition('59847-4', 'EQUALS', '', '8249/3')],
          'urn:dktk:code:66:2',
          'Neuroendokriner Tumor (NET) - Grad II',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8013/3'),
                new Condition('59847-4', 'EQUALS', '', '8041/3'),
                new Condition('59847-4', 'EQUALS', '', '8246/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:67:2',
          'Neuroendokriner Tumor (NET) - Grad III-IV',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Condition('59847-4', 'EQUALS', '', '8240/3'),
          ],
          'urn:dktk:code:65:2',
          'Neuroendokriner Tumor (NET) - Grad I',
          ''
        ),
      ]
    ),
    new Criteria(
      'neuroendokrine_tumorgruppen',
      { de: 'Weitere Neuroendokrine Tumorgruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [new Condition('59847-4', 'EQUALS', '', '8244/3')],
          'urn:dktk:code:68:2',
          'Neuroendokriner Tumor (NET): Gemischtes adeno-neuroendokrines Karzinom',
          ''
        ),
      ]
    ),
    new Criteria(
      'gist',
      { de: 'Gastrointestinales Stromasarkom (GIST)', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C15.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C17.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C18.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C19'),
                new Condition('diagnosis', 'CONTAINS', '', 'C20'),
                new Condition('diagnosis', 'CONTAINS', '', 'C21.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C22.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C23'),
                new Condition('diagnosis', 'CONTAINS', '', 'C24.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C25.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8935/3'),
                new Condition('59847-4', 'EQUALS', '', '8936/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:69:2',
          'Gastrointestinales Stromasarkom (GIST)',
          ''
        ),
      ]
    ),
    new Criteria(
      'malt_lymphom',
      { de: 'MALT-Lymphom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C88.4'),
            new Condition('59847-4', 'EQUALS', '', '9699/3'),
          ],
          'urn:dktk:code:70:2',
          'MALT-Lymphom',
          ''
        ),
      ]
    ),
  ]),
  new Category('urn:dktk:code:48:2', 'Gynäkologische Onkologie', [
    new Criteria(
      'mamma-ca',
      { de: 'Mamma-Ca', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C50.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8500/3'),
                new Condition('59847-4', 'EQUALS', '', '8501/3'),
                new Condition('59847-4', 'EQUALS', '', '8502/3'),
                new Condition('59847-4', 'EQUALS', '', '8503/3'),
                new Condition('59847-4', 'EQUALS', '', '8504/3'),
                new Condition('59847-4', 'EQUALS', '', '8508/3'),
                new Condition('59847-4', 'EQUALS', '', '8510/3'),
                new Condition('59847-4', 'EQUALS', '', '8512/3'),
                new Condition('59847-4', 'EQUALS', '', '8513/3'),
                new Condition('59847-4', 'EQUALS', '', '8514/3'),
                new Condition('59847-4', 'EQUALS', '', '8520/3'),
                new Condition('59847-4', 'EQUALS', '', '8521/3'),
                new Condition('59847-4', 'EQUALS', '', '8522/3'),
                new Condition('59847-4', 'EQUALS', '', '8523/3'),
                new Condition('59847-4', 'EQUALS', '', '8524/3'),
                new Condition('59847-4', 'EQUALS', '', '8525/3'),
                new Condition('59847-4', 'EQUALS', '', '8530/3'),
                new Condition('59847-4', 'EQUALS', '', '8540/3'),
                new Condition('59847-4', 'EQUALS', '', '8541/3'),
                new Condition('59847-4', 'EQUALS', '', '8542/3'),
                new Condition('59847-4', 'EQUALS', '', '8543/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:72:2',
          'Mamma-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D05.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8500/2'),
                new Condition('59847-4', 'EQUALS', '', '8501/2'),
                new Condition('59847-4', 'EQUALS', '', '8503/2'),
                new Condition('59847-4', 'EQUALS', '', '8504/2'),
                new Condition('59847-4', 'EQUALS', '', '8507/2'),
                new Condition('59847-4', 'EQUALS', '', '8520/2'),
                new Condition('59847-4', 'EQUALS', '', '8522/2'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:73:2',
          'Mamma-Ca (in situ)',
          ''
        ),
      ]
    ),
    new Criteria(
      'gyn_tumore',
      { de: 'Gynäkologische Tumore (außer Ovarial)', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C53.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8051/3    '),
                new Condition('59847-4', 'EQUALS', '', '8052/3   '),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8076/3     '),
                new Condition('59847-4', 'EQUALS', '', '8082/3  '),
                new Condition('59847-4', 'EQUALS', '', '8098/3'),
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8200/3'),
                new Condition('59847-4', 'EQUALS', '', '8310/3'),
                new Condition('59847-4', 'EQUALS', '', '8380/3'),
                new Condition('59847-4', 'EQUALS', '', '8384/3'),
                new Condition('59847-4', 'EQUALS', '', '8430/3'),
                new Condition('59847-4', 'EQUALS', '', '8441/3'),
                new Condition('59847-4', 'EQUALS', '', '8480/3'),
                new Condition('59847-4', 'EQUALS', '', '8490/3   '),
                new Condition('59847-4', 'EQUALS', '', '8560/3'),
                new Condition('59847-4', 'EQUALS', '', '8570/3'),
                new Condition('59847-4', 'EQUALS', '', '9110/3       '),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:76:2',
          'Zervix-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C54.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8310/3'),
                new Condition('59847-4', 'EQUALS', '', '8380/3'),
                new Condition('59847-4', 'EQUALS', '', '8382/3     '),
                new Condition('59847-4', 'EQUALS', '', '8383/3     '),
                new Condition('59847-4', 'EQUALS', '', '8430/3'),
                new Condition('59847-4', 'EQUALS', '', '8441/3'),
                new Condition('59847-4', 'EQUALS', '', '8480/3'),
                new Condition('59847-4', 'EQUALS', '', '8560/3'),
                new Condition('59847-4', 'EQUALS', '', '8570/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:77:2',
          'Endometrium-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C51.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
                new Condition('59847-4', 'EQUALS', '', '8073/3'),
                new Condition('59847-4', 'EQUALS', '', '8074/3'),
                new Condition('59847-4', 'EQUALS', '', '8075/3'),
                new Condition('59847-4', 'EQUALS', '', '8076/3'),
                new Condition('59847-4', 'EQUALS', '', '8083/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:74:2',
          'Vulva-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C52'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
                new Condition('59847-4', 'EQUALS', '', '8073/3'),
                new Condition('59847-4', 'EQUALS', '', '8074/3'),
                new Condition('59847-4', 'EQUALS', '', '8075/3'),
                new Condition('59847-4', 'EQUALS', '', '8076/3'),
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8310/3  '),
                new Condition('59847-4', 'EQUALS', '', '8380/3  '),
                new Condition('59847-4', 'EQUALS', '', '8384/3  '),
                new Condition('59847-4', 'EQUALS', '', '8950/3'),
                new Condition('59847-4', 'EQUALS', '', '9071/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:75:2',
          'Vaginaltumor',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C54.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C55'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8805/3 '),
                new Condition('59847-4', 'EQUALS', '', '8890/3   '),
                new Condition('59847-4', 'EQUALS', '', '8930/3'),
                new Condition('59847-4', 'EQUALS', '', '8931/3  '),
                new Condition('59847-4', 'EQUALS', '', '8933/3'),
                new Condition('59847-4', 'EQUALS', '', '8934/3 '),
                new Condition('59847-4', 'EQUALS', '', '8950/3'),
                new Condition('59847-4', 'EQUALS', '', '8980/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:80:2',
          'Uterussarkom',
          ''
        ),
      ]
    ),
    new Criteria(
      'ovarial_ca',
      { de: 'Ovarial-Ca', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C56'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8120/3'),
                new Condition('59847-4', 'EQUALS', '', '8310/3'),
                new Condition('59847-4', 'EQUALS', '', '8380/3'),
                new Condition('59847-4', 'EQUALS', '', '8441/3'),
                new Condition('59847-4', 'EQUALS', '', '8450/3'),
                new Condition('59847-4', 'EQUALS', '', '8460/3'),
                new Condition('59847-4', 'EQUALS', '', '8461/3'),
                new Condition('59847-4', 'EQUALS', '', '8470/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:78:2',
          'Ovarial-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C56'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8471/3'),
                new Condition('59847-4', 'EQUALS', '', '8600/3'),
                new Condition('59847-4', 'EQUALS', '', '8620/3'),
                new Condition('59847-4', 'EQUALS', '', '8950/3'),
                new Condition('59847-4', 'EQUALS', '', '8951/3'),
                new Condition('59847-4', 'EQUALS', '', '9000/3'),
                new Condition('59847-4', 'EQUALS', '', '9090/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:79:2',
          'Weiterer Ovarialtumor',
          ''
        ),
      ]
    ),
  ]),
  new Category('urn:dktk:code:71:2', 'Urologische Onkologie', [
    new Criteria(
      'penis_ca',
      { de: 'Penis-Ca, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C60.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
                new Condition('59847-4', 'EQUALS', '', '8073/3'),
                new Condition('59847-4', 'EQUALS', '', '8074/3'),
                new Condition('59847-4', 'EQUALS', '', '8076/3'),
                new Condition('59847-4', 'EQUALS', '', '8078/3'),
                new Condition('59847-4', 'EQUALS', '', '8083/3'),
                new Condition('59847-4', 'EQUALS', '', '8084/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:82:2',
          'Penis: Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C60.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8041/3'),
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8051/3'),
                new Condition('59847-4', 'EQUALS', '', '8075/3'),
                new Condition('59847-4', 'EQUALS', '', '8082/3'),
                new Condition('59847-4', 'EQUALS', '', '8090/3'),
                new Condition('59847-4', 'EQUALS', '', '8247/3'),
                new Condition('59847-4', 'EQUALS', '', '8310/3'),
                new Condition('59847-4', 'EQUALS', '', '8410/3'),
                new Condition('59847-4', 'EQUALS', '', '8542/3'),
                new Condition('59847-4', 'EQUALS', '', '8560/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:83:2',
          'Penis-Ca, anderes',
          ''
        ),
      ]
    ),
    new Criteria(
      'prostata_ca',
      { de: 'Prostata-Ca, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C61'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8147/3'),
                new Condition('59847-4', 'EQUALS', '', '8480/3'),
                new Condition('59847-4', 'EQUALS', '', '8500/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:84:2',
          'Prostata: Adeno-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C61'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8020/3'),
                new Condition('59847-4', 'EQUALS', '', '8041/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:85:2',
          'Prostata-Ca, anderes',
          ''
        ),
      ]
    ),
    new Criteria(
      'net_prostata',
      { de: 'NET (Prostata)', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C61'),
            new Condition('59847-4', 'EQUALS', '', '8246/3'),
          ],
          'urn:dktk:code:86:2',
          'Neuroendokriner Tumor',
          ''
        ),
      ]
    ),
    new Criteria(
      'hoden_ca',
      { de: 'Hoden-Ca, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C62.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9065/3'),
                new Condition('59847-4', 'EQUALS', '', '9070/3'),
                new Condition('59847-4', 'EQUALS', '', '9071/3'),
                new Condition('59847-4', 'EQUALS', '', '9080/3'),
                new Condition('59847-4', 'EQUALS', '', '9083/3'),
                new Condition('59847-4', 'EQUALS', '', '9100/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:88:2',
          'Hoden-Ca: Nicht-Seminom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C62.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9061/3'),
                new Condition('59847-4', 'EQUALS', '', '9062/3'),
                new Condition('59847-4', 'EQUALS', '', '9063/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:87:2',
          'Hoden-Ca: Seminom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C62.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8640/3'),
                new Condition('59847-4', 'EQUALS', '', '8650/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:89:2',
          'Hoden-Ca: Nicht-germinaler Hodentumor',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C62.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9064/3'),
                new Condition('59847-4', 'EQUALS', '', '9085/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:90:2',
          'Hoden-Ca, anderes',
          ''
        ),
      ]
    ),
    new Criteria(
      'nierenzell-ca',
      { de: 'Nierenzell-Ca, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C64'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8310/3'),
                new Condition('59847-4', 'EQUALS', '', '8964/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:91:2',
          'Nierenzell-Ca: klarzellig',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C64'),
            new Condition('59847-4', 'EQUALS', '', '8260/3'),
          ],
          'urn:dktk:code:92:2',
          'Nierenzell-Ca: papillär',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C64'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8270/3'),
                new Condition('59847-4', 'EQUALS', '', '8317/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:93:2',
          'Nierenzell-Ca: chromophob',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C64'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8255/3'),
                new Condition('59847-4', 'EQUALS', '', '8290/3'),
                new Condition('59847-4', 'EQUALS', '', '8312/3'),
                new Condition('59847-4', 'EQUALS', '', '8316/3'),
                new Condition('59847-4', 'EQUALS', '', '8318/3'),
                new Condition('59847-4', 'EQUALS', '', '8319/3'),
                new Condition('59847-4', 'EQUALS', '', '8320/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:94:2',
          'Nierenzell-Ca, anderes',
          ''
        ),
      ]
    ),
    new Criteria(
      'urothel_ca',
      { de: 'Urothel-Ca', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C65'),
                new Condition('diagnosis', 'CONTAINS', '', 'C66'),
                new Condition('diagnosis', 'CONTAINS', '', 'C67.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C68.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8120/3'),
                new Condition('59847-4', 'EQUALS', '', '8130/3'),
                new Condition('59847-4', 'EQUALS', '', '8131/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:95:2',
          'Urothel-Ca',
          ''
        ),
      ]
    ),
    new Criteria(
      'harnblasen_tumore',
      { de: 'Harnblasen Tumore, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C67.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
                new Condition('59847-4', 'EQUALS', '', '8073/3'),
                new Condition('59847-4', 'EQUALS', '', '8074/3'),
                new Condition('59847-4', 'EQUALS', '', '8076/3'),
                new Condition('59847-4', 'EQUALS', '', '8078/3'),
                new Condition('59847-4', 'EQUALS', '', '8083/3'),
                new Condition('59847-4', 'EQUALS', '', '8084/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:96:2',
          'Harnblase: Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C67.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8147/3'),
                new Condition('59847-4', 'EQUALS', '', '8480/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:97:2',
          'Harnblase: Adeno-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C67.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8041/3'),
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8051/3'),
                new Condition('59847-4', 'EQUALS', '', '8075/3'),
                new Condition('59847-4', 'EQUALS', '', '8082/3'),
                new Condition('59847-4', 'EQUALS', '', '8090/3'),
                new Condition('59847-4', 'EQUALS', '', '8310/3'),
                new Condition('59847-4', 'EQUALS', '', '8560/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:98:2',
          'Harnblasen-Ca, anderes',
          ''
        ),
      ]
    ),
  ]),
  new Category('urn:dktk:code:81:2', 'Dermatologische Onkologie', [
    new Criteria(
      'malignes_melanom',
      { de: 'Malignes Melanom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C00.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C01'),
                new Condition('diagnosis', 'CONTAINS', '', 'C02.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C03.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C04.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C05.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C06.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C10.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C11.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C14.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C30.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C31.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C43.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C51.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C52'),
                new Condition('diagnosis', 'CONTAINS', '', 'C57.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C60.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C63.2'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8720/3'),
                new Condition('59847-4', 'EQUALS', '', '8721/3'),
                new Condition('59847-4', 'EQUALS', '', '8722/3'),
                new Condition('59847-4', 'EQUALS', '', '8723/3'),
                new Condition('59847-4', 'EQUALS', '', '8730/3'),
                new Condition('59847-4', 'EQUALS', '', '8740/3'),
                new Condition('59847-4', 'EQUALS', '', '8741/3'),
                new Condition('59847-4', 'EQUALS', '', '8742/3'),
                new Condition('59847-4', 'EQUALS', '', '8743/3'),
                new Condition('59847-4', 'EQUALS', '', '8744/3'),
                new Condition('59847-4', 'EQUALS', '', '8745/3'),
                new Condition('59847-4', 'EQUALS', '', '8761/3'),
                new Condition('59847-4', 'EQUALS', '', '8770/3'),
                new Condition('59847-4', 'EQUALS', '', '8771/3'),
                new Condition('59847-4', 'EQUALS', '', '8772/3 '),
                new Condition('59847-4', 'EQUALS', '', '8773/3'),
                new Condition('59847-4', 'EQUALS', '', '8774/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:100:2',
          'Malignes Melanom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'D03.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C69.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8720/2 '),
                new Condition('59847-4', 'EQUALS', '', '8741/2'),
                new Condition('59847-4', 'EQUALS', '', '8742/2'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:101:2',
          'Malignes Melanom (in situ)',
          ''
        ),
      ]
    ),
    new Criteria(
      'mukosales_melanom',
      { de: 'Mukosales Melanom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C00.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C01'),
                new Condition('diagnosis', 'CONTAINS', '', 'C02.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C03.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C04.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C05.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C06.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C10.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C11.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C14.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C30.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C31.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C43.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C51.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C52'),
                new Condition('diagnosis', 'CONTAINS', '', 'C57.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C60.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C63.2'),
                new Condition('diagnosis', 'CONTAINS', '', 'C69.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8720/3'),
                new Condition('59847-4', 'EQUALS', '', '8746/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:102:2',
          'Mukosales Melanom',
          ''
        ),
      ]
    ),
    new Criteria(
      'basalzell_ca',
      { de: 'Basalzell-Ca', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C44.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8090/3'),
                new Condition('59847-4', 'EQUALS', '', '8091/3'),
                new Condition('59847-4', 'EQUALS', '', '8092/3'),
                new Condition('59847-4', 'EQUALS', '', '8093/3'),
                new Condition('59847-4', 'EQUALS', '', '8094/3'),
                new Condition('59847-4', 'EQUALS', '', '8095/3'),
                new Condition('59847-4', 'EQUALS', '', '8097/3'),
                new Condition('59847-4', 'EQUALS', '', '8098/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:103:2',
          'Basalzell-Ca',
          ''
        ),
      ]
    ),
    new Criteria(
      'plattenepithel_ca',
      { de: 'Plattenepithel-Ca', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C44.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/3'),
                new Condition('59847-4', 'EQUALS', '', '8051/3'),
                new Condition('59847-4', 'EQUALS', '', '8052/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/3'),
                new Condition('59847-4', 'EQUALS', '', '8070/6'),
                new Condition('59847-4', 'EQUALS', '', '8071/3'),
                new Condition('59847-4', 'EQUALS', '', '8072/3'),
                new Condition('59847-4', 'EQUALS', '', '8073/3'),
                new Condition('59847-4', 'EQUALS', '', '8074/3'),
                new Condition('59847-4', 'EQUALS', '', '8075/3'),
                new Condition('59847-4', 'EQUALS', '', '8076/3'),
                new Condition('59847-4', 'EQUALS', '', '8078/3'),
                new Condition('59847-4', 'EQUALS', '', '8082/3'),
                new Condition('59847-4', 'EQUALS', '', '8083/3'),
                new Condition('59847-4', 'EQUALS', '', '8084/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:104:2',
          'Plattenepithel-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D04.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8050/2'),
                new Condition('59847-4', 'EQUALS', '', '8052/2'),
                new Condition('59847-4', 'EQUALS', '', '8070/2'),
                new Condition('59847-4', 'EQUALS', '', '8076/2'),
                new Condition('59847-4', 'EQUALS', '', '8077/2'),
                new Condition('59847-4', 'EQUALS', '', '8080/2'),
                new Condition('59847-4', 'EQUALS', '', '8081/2'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:105:2',
          'Plattenepithel-Ca (in situ)',
          ''
        ),
      ]
    ),
    new Criteria(
      'sonstiger_hauttumor',
      { de: 'Sonstiger Hauttumor', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C44.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8013/3'),
                new Condition('59847-4', 'EQUALS', '', '8140/3'),
                new Condition('59847-4', 'EQUALS', '', '8041/3'),
                new Condition('59847-4', 'EQUALS', '', '8102/3'),
                new Condition('59847-4', 'EQUALS', '', '8110/3'),
                new Condition('59847-4', 'EQUALS', '', '8240/3'),
                new Condition('59847-4', 'EQUALS', '', '8244/3'),
                new Condition('59847-4', 'EQUALS', '', '8246/3'),
                new Condition('59847-4', 'EQUALS', '', '8247/3'),
                new Condition('59847-4', 'EQUALS', '', '8249/3'),
                new Condition('59847-4', 'EQUALS', '', '8390/3'),
                new Condition('59847-4', 'EQUALS', '', '8400/3'),
                new Condition('59847-4', 'EQUALS', '', '8401/3'),
                new Condition('59847-4', 'EQUALS', '', '8402/3'),
                new Condition('59847-4', 'EQUALS', '', '8403/3'),
                new Condition('59847-4', 'EQUALS', '', '8407/3'),
                new Condition('59847-4', 'EQUALS', '', '8408/3'),
                new Condition('59847-4', 'EQUALS', '', '8409/3'),
                new Condition('59847-4', 'EQUALS', '', '8410/3'),
                new Condition('59847-4', 'EQUALS', '', '8413/3'),
                new Condition('59847-4', 'EQUALS', '', '8420/3'),
                new Condition('59847-4', 'EQUALS', '', '8430/3'),
                new Condition('59847-4', 'EQUALS', '', '8574/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:106:2',
          'Sonstiger Hauttumor',
          ''
        ),
      ]
    ),
    new Criteria(
      'sarkom',
      { de: 'Sarkom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C44.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C46'),
                new Condition('diagnosis', 'CONTAINS', '', 'C51.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C60.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C63.2'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8711/3'),
                new Condition('59847-4', 'EQUALS', '', '8810/3'),
                new Condition('59847-4', 'EQUALS', '', '8811/3'),
                new Condition('59847-4', 'EQUALS', '', '8830/3'),
                new Condition('59847-4', 'EQUALS', '', '8832/3'),
                new Condition('59847-4', 'EQUALS', '', '8833/3'),
                new Condition('59847-4', 'EQUALS', '', '8850/3'),
                new Condition('59847-4', 'EQUALS', '', '8851/3'),
                new Condition('59847-4', 'EQUALS', '', '8852/3'),
                new Condition('59847-4', 'EQUALS', '', '8853/3'),
                new Condition('59847-4', 'EQUALS', '', '8854/3'),
                new Condition('59847-4', 'EQUALS', '', '8855/3'),
                new Condition('59847-4', 'EQUALS', '', '8857/3'),
                new Condition('59847-4', 'EQUALS', '', '8858/3'),
                new Condition('59847-4', 'EQUALS', '', '8890/3'),
                new Condition('59847-4', 'EQUALS', '', '8891/3'),
                new Condition('59847-4', 'EQUALS', '', '8894/3'),
                new Condition('59847-4', 'EQUALS', '', '8895/3'),
                new Condition('59847-4', 'EQUALS', '', '8896/3'),
                new Condition('59847-4', 'EQUALS', '', '9120/3'),
                new Condition('59847-4', 'EQUALS', '', '9130/3'),
                new Condition('59847-4', 'EQUALS', '', '9170/3'),
                new Condition('59847-4', 'EQUALS', '', '9140/3'),
                new Condition('59847-4', 'EQUALS', '', '9540/3'),
                new Condition('59847-4', 'EQUALS', '', '9560/3'),
                new Condition('59847-4', 'EQUALS', '', '9561/3'),
                new Condition('59847-4', 'EQUALS', '', '9571/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:107:2',
          'Kutanes Sarkom',
          ''
        ),
      ]
    ),
    new Criteria(
      'lymphom',
      { de: 'Lymphom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C82.6'),
                new Condition('diagnosis', 'CONTAINS', '', 'C83.3'),
                new Condition('diagnosis', 'CONTAINS', '', 'C84.0'),
                new Condition('diagnosis', 'CONTAINS', '', 'C84.8'),
                new Condition('diagnosis', 'CONTAINS', '', 'C86.3'),
                new Condition('diagnosis', 'CONTAINS', '', 'C86.6'),
                new Condition('diagnosis', 'CONTAINS', '', 'C88.4'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9597/3'),
                new Condition('59847-4', 'EQUALS', '', '9680/3'),
                new Condition('59847-4', 'EQUALS', '', '9699/3'),
                new Condition('59847-4', 'EQUALS', '', '9700/3'),
                new Condition('59847-4', 'EQUALS', '', '9708/3'),
                new Condition('59847-4', 'EQUALS', '', '9709/3'),
                new Condition('59847-4', 'EQUALS', '', '9718/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:108:2',
          'Kutanes Lymphom',
          ''
        ),
      ]
    ),
  ]),
  new Category('urn:dktk:code:109:2', 'Hämatologische Neoplasien', [
    new Criteria(
      'lymph_leukämie',
      { de: 'Lymphatische Leukämie', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C91.0'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9811/3'),
                new Condition('59847-4', 'EQUALS', '', '9812/3'),
                new Condition('59847-4', 'EQUALS', '', '9813/3'),
                new Condition('59847-4', 'EQUALS', '', '9814/3 '),
                new Condition('59847-4', 'EQUALS', '', '9815/3 '),
                new Condition('59847-4', 'EQUALS', '', '9816/3 '),
                new Condition('59847-4', 'EQUALS', '', '9817/3 '),
                new Condition('59847-4', 'EQUALS', '', '9818/3'),
                new Condition('59847-4', 'EQUALS', '', '9835/3'),
                new Condition('59847-4', 'EQUALS', '', '9836/3 '),
                new Condition('59847-4', 'EQUALS', '', '9837/3 '),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:110:2',
          'Lymphatische Leukämie: Akute lymphatische Leukämie',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C91.8'),
            new Condition('59847-4', 'EQUALS', '', '9826/3 '),
          ],
          'urn:dktk:code:113:2',
          'Lymphatische Leukämie: Burkitt-Leukämie',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C91.1'),
            new Condition('59847-4', 'EQUALS', '', '9823/3'),
          ],
          'urn:dktk:code:112:2',
          'Lymphatische Leukämie: Chronische lymphatische Leukämie',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C91.3'),
                new Condition('diagnosis', 'CONTAINS', '', 'C91.6'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9832/3'),
                new Condition('59847-4', 'EQUALS', '', '9833/3'),
                new Condition('59847-4', 'EQUALS', '', '9834/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:114:2',
          'Lymphatische Leukämie: Prolymphozytenleukämie',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C91.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9820/3'),
                new Condition('59847-4', 'EQUALS', '', '9827/3'),
                new Condition('59847-4', 'EQUALS', '', '9831/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:115:2',
          'Lymphatische Leukämie: Sonstige',
          ''
        ),
      ]
    ),
    new Criteria(
      'akute_leukämie',
      { de: 'akute Leukämie - gemischter Phänotyp', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C95.0'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9805/3'),
                new Condition('59847-4', 'EQUALS', '', '9806/3'),
                new Condition('59847-4', 'EQUALS', '', '9807/3'),
                new Condition('59847-4', 'EQUALS', '', '9808/3'),
                new Condition('59847-4', 'EQUALS', '', '9809/3 '),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:111:2',
          'Akute Leukämie - gemischter Phänotyp',
          ''
        ),
      ]
    ),
    new Criteria(
      'myeloische_leukämie',
      { de: 'Myeloische Leukämie, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C92.0'),
                new Condition('diagnosis', 'CONTAINS', '', 'C92.5'),
                new Condition('diagnosis', 'CONTAINS', '', 'C92.6'),
                new Condition('diagnosis', 'CONTAINS', '', 'C92.8'),
                new Condition('diagnosis', 'CONTAINS', '', 'C92.9'),
                new Condition('diagnosis', 'CONTAINS', '', 'C93.0'),
                new Condition('diagnosis', 'CONTAINS', '', 'C94.0'),
                new Condition('diagnosis', 'CONTAINS', '', 'C94.2'),
                new Condition('diagnosis', 'CONTAINS', '', 'C94.7'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9840/3'),
                new Condition('59847-4', 'EQUALS', '', '9861/3'),
                new Condition('59847-4', 'EQUALS', '', '9865/3 '),
                new Condition('59847-4', 'EQUALS', '', '9867/3 '),
                new Condition('59847-4', 'EQUALS', '', '9869/3 '),
                new Condition('59847-4', 'EQUALS', '', '9870/3 '),
                new Condition('59847-4', 'EQUALS', '', '9871/3 '),
                new Condition('59847-4', 'EQUALS', '', '9872/3'),
                new Condition('59847-4', 'EQUALS', '', '9873/3 '),
                new Condition('59847-4', 'EQUALS', '', '9874/3 '),
                new Condition('59847-4', 'EQUALS', '', '9891/3 '),
                new Condition('59847-4', 'EQUALS', '', '9895/3 '),
                new Condition('59847-4', 'EQUALS', '', '9896/3 '),
                new Condition('59847-4', 'EQUALS', '', '9897/3 '),
                new Condition('59847-4', 'EQUALS', '', '9910/3 '),
                new Condition('59847-4', 'EQUALS', '', '9911/3 '),
                new Condition('59847-4', 'EQUALS', '', '9920/3 '),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:116:2',
          'Myeloische Leukämie: Akute myeloische Leukämie',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C92.4'),
            new Condition('59847-4', 'EQUALS', '', '9866/3 '),
          ],
          'urn:dktk:code:117:2',
          'Myeloische Leukämie: Akute Promyelozytenleukämie',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C92.1'),
                new Condition('diagnosis', 'CONTAINS', '', 'C92.2'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9863/3'),
                new Condition('59847-4', 'EQUALS', '', '9875/3'),
                new Condition('59847-4', 'EQUALS', '', '9876/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:118:2',
          'Myeloische Leukämie: Chronische myeloische Leukämie',
          ''
        ),
      ]
    ),
    new Criteria(
      'myeloproliferative_erkrankung',
      { de: 'Chronische myeloproliferative Erkrankung, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D45'),
            new Condition('59847-4', 'EQUALS', '', '9950/3'),
          ],
          'urn:dktk:code:119:2',
          'Chronische myeloproliferative Erkrankung: Polycythaemia vera',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D47.3'),
            new Condition('59847-4', 'EQUALS', '', '9962/3'),
          ],
          'urn:dktk:code:121:2',
          'Chronische myeloproliferative Erkrankung: Essentielle Thrombozytämie',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D47.4'),
            new Condition('59847-4', 'EQUALS', '', '9961/3'),
          ],
          'urn:dktk:code:120:2',
          'Chronische myeloproliferative Erkrankung: Primäre Myelofibrose',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'D47.1'),
                new Condition('diagnosis', 'CONTAINS', '', 'D47.5'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9960/3'),
                new Condition('59847-4', 'EQUALS', '', '9963/3'),
                new Condition('59847-4', 'EQUALS', '', '9964/3'),
                new Condition('59847-4', 'EQUALS', '', '9965/3'),
                new Condition('59847-4', 'EQUALS', '', '9966/3'),
                new Condition('59847-4', 'EQUALS', '', '9967/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:122:2',
          'Chronische myeloproliferative Erkrankung, andere',
          ''
        ),
      ]
    ),
    new Criteria(
      'myelodysplastisches_syndrom',
      { de: 'Myelodysplastisches Syndrom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'D46.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C92.0'),
                new Condition('diagnosis', 'CONTAINS', '', 'C93.1'),
                new Condition('diagnosis', 'CONTAINS', '', 'C93.3'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9980/3'),
                new Condition('59847-4', 'EQUALS', '', '9982/3 '),
                new Condition('59847-4', 'EQUALS', '', '9983/3'),
                new Condition('59847-4', 'EQUALS', '', '9984/3'),
                new Condition('59847-4', 'EQUALS', '', '9985/3 '),
                new Condition('59847-4', 'EQUALS', '', '9986/3 '),
                new Condition('59847-4', 'EQUALS', '', '9987/3'),
                new Condition('59847-4', 'EQUALS', '', '9989/3 '),
                new Condition('59847-4', 'EQUALS', '', '9991/3 '),
                new Condition('59847-4', 'EQUALS', '', '9992/3'),
                new Condition('59847-4', 'EQUALS', '', '9945/3'),
                new Condition('59847-4', 'EQUALS', '', '9946/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:123:2',
          'Myelodysplastisches Syndrom',
          ''
        ),
      ]
    ),
    new Criteria(
      'multiples_myelom',
      { de: 'Multiples Myelom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C90.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9731/3'),
                new Condition('59847-4', 'EQUALS', '', '9732/3'),
                new Condition('59847-4', 'EQUALS', '', '9733/3'),
                new Condition('59847-4', 'EQUALS', '', '9734/3'),
                new Condition('59847-4', 'EQUALS', '', '9735/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:124:2',
          'Multiples Myelom',
          ''
        ),
      ]
    ),
    new Criteria(
      'nk_zell_leukämie',
      { de: 'NK-Zell-Leukämie, aggressiv', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C94.7'),
            new Condition('59847-4', 'EQUALS', '', '9948/3'),
          ],
          'urn:dktk:code:125:2',
          'NK-Zell-Leukämie, aggressiv',
          ''
        ),
      ]
    ),
    new Criteria(
      'hodgkin_lymphom',
      { de: 'Hodgkin-Lymphom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C81.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9650/3'),
                new Condition('59847-4', 'EQUALS', '', '9651/3'),
                new Condition('59847-4', 'EQUALS', '', '9652/3'),
                new Condition('59847-4', 'EQUALS', '', '9653/3'),
                new Condition('59847-4', 'EQUALS', '', '9654/3'),
                new Condition('59847-4', 'EQUALS', '', '9655/3'),
                new Condition('59847-4', 'EQUALS', '', '9659/3'),
                new Condition('59847-4', 'EQUALS', '', '9661/3'),
                new Condition('59847-4', 'EQUALS', '', '9662/3'),
                new Condition('59847-4', 'EQUALS', '', '9663/3'),
                new Condition('59847-4', 'EQUALS', '', '9664/3'),
                new Condition('59847-4', 'EQUALS', '', '9665/3'),
                new Condition('59847-4', 'EQUALS', '', '9667/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:126:2',
          'Hodgkin-Lymphom',
          ''
        ),
      ]
    ),
    new Criteria(
      'burkitt_lymphom',
      { de: 'Burkitt-Lymphom, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C83.7'),
            new Condition('59847-4', 'EQUALS', '', '9687/3'),
          ],
          'urn:dktk:code:134:2',
          'Non-Hodgkin-Lymphom: Burkitt-Lymphom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C91.8'),
            new Condition('59847-4', 'EQUALS', '', '9826/3 '),
          ],
          'urn:dktk:code:113:2',
          'Lymphatische Leukämie: Burkitt-Leukämie',
          ''
        ),
      ]
    ),
    new Criteria(
      'non_hodgkin_lymphome',
      { de: 'Non-Hodgkin-Lymphome, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C83.0'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9689/3'),
                new Condition('59847-4', 'EQUALS', '', '9699/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:129:2',
          'Non-Hodgkin-Lymphom: Marginalzonen-B-Zell-Lymphom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C83.0'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9670/3'),
                new Condition('59847-4', 'EQUALS', '', '9671/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:128:2',
          'Non-Hodgkin-Lymphom: Anderes kleinzelliges Lymphom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C82.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9690/3'),
                new Condition('59847-4', 'EQUALS', '', '9691/3'),
                new Condition('59847-4', 'EQUALS', '', '9695/3'),
                new Condition('59847-4', 'EQUALS', '', '9698/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:127:2',
          'Non-Hodgkin-Lymphom: Follikuläres Lymphom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C84.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C86.0'),
                new Condition('diagnosis', 'CONTAINS', '', 'C86.1'),
                new Condition('diagnosis', 'CONTAINS', '', 'C86.2'),
                new Condition('diagnosis', 'CONTAINS', '', 'C86.3'),
                new Condition('diagnosis', 'CONTAINS', '', 'C86.5'),
                new Condition('diagnosis', 'CONTAINS', '', 'C86.6'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9700/3'),
                new Condition('59847-4', 'EQUALS', '', '9701/3'),
                new Condition('59847-4', 'EQUALS', '', '9702/3'),
                new Condition('59847-4', 'EQUALS', '', '9705/3'),
                new Condition('59847-4', 'EQUALS', '', '9708/3'),
                new Condition('59847-4', 'EQUALS', '', '9709/3'),
                new Condition('59847-4', 'EQUALS', '', '9716/3'),
                new Condition('59847-4', 'EQUALS', '', '9717/3'),
                new Condition('59847-4', 'EQUALS', '', '9718/3'),
                new Condition('59847-4', 'EQUALS', '', '9719/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:131:2',
          'Non-Hodgkin-Lymphom: Reifzelliges T-Zell-Lymphom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C91.4'),
            new Condition('59847-4', 'EQUALS', '', '9940/3'),
          ],
          'urn:dktk:code:130:2',
          'Non-Hodgkin-Lymphom: Haarzell-Leukämie',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C84.6'),
                new Condition('diagnosis', 'CONTAINS', '', 'C84.7'),
              ],
              '',
              '',
              ''
            ),
            new Condition('59847-4', 'EQUALS', '', '9714/3'),
          ],
          'urn:dktk:code:132:2',
          'Non-Hodgkin-Lymphom: Großzelliges anaplastisches Lymphom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C83.3'),
                new Condition('diagnosis', 'CONTAINS', '', 'C83.8'),
                new Condition('diagnosis', 'CONTAINS', '', 'C83.9'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9678/3'),
                new Condition('59847-4', 'EQUALS', '', '9679/3'),
                new Condition('59847-4', 'EQUALS', '', '9680/3'),
                new Condition('59847-4', 'EQUALS', '', '9684/3'),
                new Condition('59847-4', 'EQUALS', '', '9688/3'),
                new Condition('59847-4', 'EQUALS', '', '9737/3'),
                new Condition('59847-4', 'EQUALS', '', '9712/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:135:2',
          'Non-Hodgkin-Lymphom: Diffus großzelliges Lymphom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C83.1'),
            new Condition('59847-4', 'EQUALS', '', '9673/3'),
          ],
          'urn:dktk:code:133:2',
          'Non-Hodgkin-Lymphom: Mantelzell-Lymphom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C83.7'),
            new Condition('59847-4', 'EQUALS', '', '9687/3'),
          ],
          'urn:dktk:code:134:2',
          'Non-Hodgkin-Lymphom: Burkitt-Lymphom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C83.5'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9727/3'),
                new Condition('59847-4', 'EQUALS', '', '9728/3 '),
                new Condition('59847-4', 'EQUALS', '', '9729/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:136:2',
          'Non-Hodgkin-Lymphom: Lymphoblastisches Lymphom',
          ''
        ),
      ]
    ),
    new Criteria(
      'hämathologische_gruppen',
      { de: 'weitere Hämathologische Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'D47.0'),
                new Condition('diagnosis', 'CONTAINS', '', 'C96.2'),
                new Condition('diagnosis', 'CONTAINS', '', 'C94.3'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9740/1'),
                new Condition('59847-4', 'EQUALS', '', '9740/3'),
                new Condition('59847-4', 'EQUALS', '', '9741/1'),
                new Condition('59847-4', 'EQUALS', '', '9741/3'),
                new Condition('59847-4', 'EQUALS', '', '9742/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:137:2',
          'Mastzelllymphom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C96.0'),
                new Condition('diagnosis', 'CONTAINS', '', 'C96.4'),
                new Condition('diagnosis', 'CONTAINS', '', 'C96.5'),
                new Condition('diagnosis', 'CONTAINS', '', 'C96.6'),
                new Condition('diagnosis', 'CONTAINS', '', 'C96.7'),
                new Condition('diagnosis', 'CONTAINS', '', 'C96.8'),
                new Condition('diagnosis', 'CONTAINS', '', 'C96.9'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9750/3'),
                new Condition('59847-4', 'EQUALS', '', '9751/3'),
                new Condition('59847-4', 'EQUALS', '', '9755/3'),
                new Condition('59847-4', 'EQUALS', '', '9756/3'),
                new Condition('59847-4', 'EQUALS', '', '9757/3'),
                new Condition('59847-4', 'EQUALS', '', '9758/3'),
                new Condition('59847-4', 'EQUALS', '', '9759/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:138:2',
          'Neoplasie der Histiozyten und akzessorischer lymphoider Zellen',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C88.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'D47.2'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9760/3'),
                new Condition('59847-4', 'EQUALS', '', '9761/3'),
                new Condition('59847-4', 'EQUALS', '', '9762/2'),
                new Condition('59847-4', 'EQUALS', '', '9764/3'),
                new Condition('59847-4', 'EQUALS', '', '9765/1'),
                new Condition('59847-4', 'EQUALS', '', '9766/1'),
                new Condition('59847-4', 'EQUALS', '', '9767/1'),
                new Condition('59847-4', 'EQUALS', '', '9768/1'),
                new Condition('59847-4', 'EQUALS', '', '9769/1'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:139:2',
          'Immunoproliferative Krankheit',
          ''
        ),
      ]
    ),
  ]),
  new Category('urn:dktk:code:140:2', 'Sarkome', [
    new Criteria(
      'ewing_sarkom',
      { de: 'Ewing-Sarkom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C40.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C41.%'),
              ],
              '',
              '',
              ''
            ),
            new Condition('59847-4', 'EQUALS', '', '9260/3'),
          ],
          'urn:dktk:code:141:2',
          'Ewing-Sarkom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C25.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C30.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C31.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C49.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C51.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C52'),
                new Condition('diagnosis', 'CONTAINS', '', 'C71.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C72.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9260/3'),
                new Condition('59847-4', 'EQUALS', '', '9473/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:142:2',
          'Ewing-Sarkom: Soft Tissue Ewing Sarkom',
          ''
        ),
      ]
    ),
    new Criteria(
      'osteosarkom',
      { de: 'Osteosarkom/Chondrsarkom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C40.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C41.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9180/3'),
                new Condition('59847-4', 'EQUALS', '', '9240/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:143:2',
          'Osteosarkom/Chondrosarkom',
          ''
        ),
      ]
    ),
    new Criteria(
      'kaposi_sarkom',
      { de: 'Kaposi-Sarkom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C44.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C46.%'),
              ],
              '',
              '',
              ''
            ),
            new Condition('59847-4', 'EQUALS', '', '9140/3'),
          ],
          'urn:dktk:code:144:2',
          'Kaposi-Sarkom',
          ''
        ),
      ]
    ),
    new Criteria(
      'weichteilsarkome',
      { de: 'Weichteilsarkome', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8850/3'),
                new Condition('59847-4', 'EQUALS', '', '8852/3'),
                new Condition('59847-4', 'EQUALS', '', '8854/3'),
                new Condition('59847-4', 'EQUALS', '', '8858/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:145:2',
          'Adipozytäres Weichteilsarkom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D%'),
            new Condition('59847-4', 'EQUALS', '', '8850/1'),
          ],
          'urn:dktk:code:146:2',
          'Adipoz. Weichteilsarkom - unsicheren Verhaltens',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8810/3'),
                new Condition('59847-4', 'EQUALS', '', '8811/3'),
                new Condition('59847-4', 'EQUALS', '', '8814/3'),
                new Condition('59847-4', 'EQUALS', '', '8815/3'),
                new Condition('59847-4', 'EQUALS', '', '8825/3'),
                new Condition('59847-4', 'EQUALS', '', '8832/3'),
                new Condition('59847-4', 'EQUALS', '', '8840/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:147:2',
          'Fibroblastisches Weichteilsarkom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8813/1'),
                new Condition('59847-4', 'EQUALS', '', '8815/1'),
                new Condition('59847-4', 'EQUALS', '', '8821/1'),
                new Condition('59847-4', 'EQUALS', '', '8822/1'),
                new Condition('59847-4', 'EQUALS', '', '8825/1'),
                new Condition('59847-4', 'EQUALS', '', '8832/1'),
                new Condition('59847-4', 'EQUALS', '', '8833/1'),
                new Condition('59847-4', 'EQUALS', '', '8834/1'),
                new Condition('59847-4', 'EQUALS', '', '8851/1'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:148:2',
          'Fibrobl. Weichteilsarkom - unsicheren Verhaltens',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Condition('59847-4', 'EQUALS', '', '9252/3'),
          ],
          'urn:dktk:code:149:2',
          'Fibrohistiozytäres Weichteilsarkom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8835/1'),
                new Condition('59847-4', 'EQUALS', '', '9251/1'),
                new Condition('59847-4', 'EQUALS', '', '9252/1'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:150:2',
          'Fibrohistioz. Weichteilsarkom - unsicheren Verhaltens',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Condition('59847-4', 'EQUALS', '', '8890/3'),
          ],
          'urn:dktk:code:153:2',
          'Glattmuskuläres Weichteilsarkom/Leiomyosarkom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Condition('59847-4', 'EQUALS', '', '8711/3'),
          ],
          'urn:dktk:code:154:2',
          'Perizytisches Weichteilsarkom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8711/1'),
                new Condition('59847-4', 'EQUALS', '', '8824/1'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:155:2',
          'Perizyt. Weichteilsarkom - unsicheren Verhaltens',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8900/3'),
                new Condition('59847-4', 'EQUALS', '', '8901/3'),
                new Condition('59847-4', 'EQUALS', '', '8902/3'),
                new Condition('59847-4', 'EQUALS', '', '8910/3'),
                new Condition('59847-4', 'EQUALS', '', '8912/3'),
                new Condition('59847-4', 'EQUALS', '', '8920/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:156:2',
          'Skelettmuskuläres Weichteilsarkom/Rhabdomyosarkom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9040/3'),
                new Condition('59847-4', 'EQUALS', '', '9041/3'),
                new Condition('59847-4', 'EQUALS', '', '9043/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:157:2',
          'Synovialsarkom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9120/3'),
                new Condition('59847-4', 'EQUALS', '', '9133/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:158:2',
          'Vaskuläres Weichteilsarkom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C47.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C49.%'),
              ],
              '',
              '',
              ''
            ),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8921/3'),
                new Condition('59847-4', 'EQUALS', '', '9540/3'),
                new Condition('59847-4', 'EQUALS', '', '9542/3'),
                new Condition('59847-4', 'EQUALS', '', '9561/3'),
                new Condition('59847-4', 'EQUALS', '', '9580/3'),
                new Condition('59847-4', 'EQUALS', '', '9571/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:160:2',
          'Weichteilsarkom der Nervenscheiden',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9130/1'),
                new Condition('59847-4', 'EQUALS', '', '9135/1'),
                new Condition('59847-4', 'EQUALS', '', '9136/1'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:159:2',
          'Vask. Weichteilsarkom - unsicheren Verhaltens',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D%'),
            new Condition('59847-4', 'EQUALS', '', '9560/1'),
          ],
          'urn:dktk:code:161:2',
          'Weichteilsark. d. Nervenscheiden - unsicheren Verhaltens',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8714/3'),
                new Condition('59847-4', 'EQUALS', '', '8804/3'),
                new Condition('59847-4', 'EQUALS', '', '8806/3'),
                new Condition('59847-4', 'EQUALS', '', '8842/3'),
                new Condition('59847-4', 'EQUALS', '', '8940/3'),
                new Condition('59847-4', 'EQUALS', '', '8963/3'),
                new Condition('59847-4', 'EQUALS', '', '8982/3'),
                new Condition('59847-4', 'EQUALS', '', '8990/3'),
                new Condition('59847-4', 'EQUALS', '', '9044/3'),
                new Condition('59847-4', 'EQUALS', '', '9137/3'),
                new Condition('59847-4', 'EQUALS', '', '9231/3'),
                new Condition('59847-4', 'EQUALS', '', '9364/3'),
                new Condition('59847-4', 'EQUALS', '', '9581/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:163:2',
          'Sonstiges Weichteilsarkom (unklare Differenzierung)',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'D%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8802/1'),
                new Condition('59847-4', 'EQUALS', '', '8811/1'),
                new Condition('59847-4', 'EQUALS', '', '8830/1'),
                new Condition('59847-4', 'EQUALS', '', '8836/1'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:165:2',
          'Sonstiges Weichteilsark. (unklare Diff.) - unsicheren Verhaltens',
          ''
        ),
      ]
    ),
    new Criteria(
      'undifferentierter_tumor',
      { de: 'Undifferentierter/unklassifizierter Tumor', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8801/3'),
                new Condition('59847-4', 'EQUALS', '', '8802/3'),
                new Condition('59847-4', 'EQUALS', '', '8803/3'),
                new Condition('59847-4', 'EQUALS', '', '8804/3'),
                new Condition('59847-4', 'EQUALS', '', '8805/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:162:2',
          'Undifferenzierter/unklassifizierter Tumor',
          ''
        ),
      ]
    ),
    new Criteria(
      'gastrointestinales_stromasarkom',
      { de: 'Gastrointestinales Stromasarkom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C15.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C16.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C17.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C18.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C19'),
                new Condition('diagnosis', 'CONTAINS', '', 'C20'),
                new Condition('diagnosis', 'CONTAINS', '', 'C22.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C25.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C49.%'),
              ],
              '',
              '',
              ''
            ),
            new Condition('59847-4', 'EQUALS', '', '8936/3'),
          ],
          'urn:dktk:code:151:2',
          'Gastrointestinales Stromasarkom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'D12.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'D13.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'D21.%'),
              ],
              '',
              '',
              ''
            ),
            new Condition('59847-4', 'EQUALS', '', '8936/1'),
          ],
          'urn:dktk:code:152:2',
          'Gastrointest. Stromatumor - unsicheren Verhaltens',
          ''
        ),
      ]
    ),
    new Criteria(
      'gliosarkom',
      { de: 'Gliosarkom', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C40.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C41.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C70.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C71.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C72.%'),
              ],
              '',
              '',
              ''
            ),
            new Condition('59847-4', 'EQUALS', '', '9442/3'),
          ],
          'urn:dktk:code:164:2',
          'Gliosarkom',
          ''
        ),
      ]
    ),
  ]),
  new Category('urn:dktk:code:166:2', 'Blastome', [
    new Criteria(
      'blastome_alle_gruppen',
      { de: 'Blastome, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C22.2'),
            new Condition('59847-4', 'EQUALS', '', '8970/3'),
          ],
          'urn:dktk:code:167:2',
          'Hepatoblastom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C25.%'),
            new Condition('59847-4', 'EQUALS', '', '8971/3'),
          ],
          'urn:dktk:code:168:2',
          'Pankreatoblastom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C34.%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '8972/3'),
                new Condition('59847-4', 'EQUALS', '', '8973/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:169:2',
          'Pleuro-pulmonales Blastom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C40.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C41.%'),
              ],
              '',
              '',
              ''
            ),
            new Condition('59847-4', 'EQUALS', '', '9230/3'),
          ],
          'urn:dktk:code:170:2',
          'Chondroblastom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C64'),
            new Condition('59847-4', 'EQUALS', '', '8960/3'),
          ],
          'urn:dktk:code:171:2',
          'Nephroblastom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C69.2'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9510/3'),
                new Condition('59847-4', 'EQUALS', '', '9511/3'),
                new Condition('59847-4', 'EQUALS', '', '9512/3'),
                new Condition('59847-4', 'EQUALS', '', '9513/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:172:2',
          'Retinoblastom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Operation(
              'OR',
              [
                new Condition('diagnosis', 'CONTAINS', '', 'C71.%'),
                new Condition('diagnosis', 'CONTAINS', '', 'C72.%'),
              ],
              '',
              '',
              ''
            ),
            new Condition('59847-4', 'EQUALS', '', '9500/3'),
          ],
          'urn:dktk:code:173:2',
          'Neuroblastom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C71.6'),
            new Condition('59847-4', 'EQUALS', '', '9470/3'),
          ],
          'urn:dktk:code:174:2',
          'Medulloblastom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C75.3'),
            new Condition('59847-4', 'EQUALS', '', '9362/3'),
          ],
          'urn:dktk:code:175:2',
          'Pineoblastom',
          ''
        ),
      ]
    ),
  ]),
  new Category('urn:dktk:code:176:2', 'Keimzellentumore', [
    new Criteria(
      'keimzellentumore_alle_gruppen',
      { de: 'Keimzellentumore, alle Gruppen', en: '' },
      'predefined',
      '',
      [],
      [
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Condition('59847-4', 'EQUALS', '', '9100/3'),
          ],
          'urn:dktk:code:177:2',
          'Chorion-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9060/3'),
                new Condition('59847-4', 'EQUALS', '', '9061/3'),
                new Condition('59847-4', 'EQUALS', '', '9062/3'),
                new Condition('59847-4', 'EQUALS', '', '9063/3'),
                new Condition('59847-4', 'EQUALS', '', '9064/3'),
                new Condition('59847-4', 'EQUALS', '', '9065/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:180:2',
          'Germinom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9070/3'),
                new Condition('59847-4', 'EQUALS', '', '9072/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:179:2',
          'Embryonal-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Condition('59847-4', 'EQUALS', '', '9071/3'),
          ],
          'urn:dktk:code:178:2',
          'Dottersack-Ca',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9080/3'),
                new Condition('59847-4', 'EQUALS', '', '9081/3'),
                new Condition('59847-4', 'EQUALS', '', '9082/3'),
                new Condition('59847-4', 'EQUALS', '', '9083/3'),
                new Condition('59847-4', 'EQUALS', '', '9084/3'),
                new Condition('59847-4', 'EQUALS', '', '9090/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:181:2',
          'Teratom',
          ''
        ),
        new Operation(
          'AND',
          [
            new Condition('diagnosis', 'CONTAINS', '', 'C%'),
            new Operation(
              'OR',
              [
                new Condition('59847-4', 'EQUALS', '', '9085/3'),
                new Condition('59847-4', 'EQUALS', '', '9101/3'),
                new Condition('59847-4', 'EQUALS', '', '9102/3'),
                new Condition('59847-4', 'EQUALS', '', '9105/3'),
              ],
              '',
              '',
              ''
            ),
          ],
          'urn:dktk:code:182:2',
          'Weiterer Keimzelltumor',
          ''
        ),
      ]
    ),
  ]),
];
