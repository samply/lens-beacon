import { Criteria } from '@samply/lens-core';

export const Lokalisation: Criteria = new Criteria(
  'urn:oid:2.16.840.1.113883.6.43.1',
  {
    de: 'Lokalisation (ICD-O-3 Klassifizierung)',
    en: 'Localization (ICD-O-3 classification)',
  },
  'string',
  'http://fhir.de/CodeSystem/bfarm/icd-10-gm',
  ['EQUALS'],
  [
    {
      key: 'C00.0',
      de: 'Bösartige Neubildung: Äußere Oberlippe',
      en: '',
    },
    {
      key: 'C00.1',
      de: 'Bösartige Neubildung: Äußere Unterlippe',
      en: '',
    },
    {
      key: 'C00.3',
      de: 'Bösartige Neubildung: Oberlippe, Innenseite',
      en: '',
    },
    {
      key: 'C00.4',
      de: 'Bösartige Neubildung: Unterlippe, Innenseite',
      en: '',
    },
    {
      key: 'C00.6',
      de: 'Bösartige Neubildung: Lippenkommissur',
      en: '',
    },
    {
      key: 'C00.8',
      de: 'Bösartige Neubildung: Lippe, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C01.9',
      de: '',
      en: '',
    },
    {
      key: 'C02.0',
      de: 'Bösartige Neubildung: Zungenrücken',
      en: '',
    },
    {
      key: 'C02.1',
      de: 'Bösartige Neubildung: Zungenrand',
      en: '',
    },
    {
      key: 'C02.2',
      de: 'Bösartige Neubildung: Zungenunterfläche',
      en: '',
    },
    {
      key: 'C02.3',
      de: 'Bösartige Neubildung: Vordere zwei Drittel der Zunge, Bereich nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C02.4',
      de: 'Bösartige Neubildung: Zungentonsille',
      en: '',
    },
    {
      key: 'C02.8',
      de: 'Bösartige Neubildung: Zunge, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C02.9',
      de: 'Bösartige Neubildung: Zunge, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C03.0',
      de: 'Bösartige Neubildung: Oberkieferzahnfleisch',
      en: '',
    },
    {
      key: 'C03.01',
      de: '',
      en: '',
    },
    {
      key: 'C03.02',
      de: '',
      en: '',
    },
    {
      key: 'C03.1',
      de: 'Bösartige Neubildung: Unterkieferzahnfleisch',
      en: '',
    },
    {
      key: 'C03.11',
      de: '',
      en: '',
    },
    {
      key: 'C03.12',
      de: '',
      en: '',
    },
    {
      key: 'C03.13',
      de: '',
      en: '',
    },
    {
      key: 'C03.8',
      de: '',
      en: '',
    },
    {
      key: 'C03.9',
      de: 'Bösartige Neubildung: Zahnfleisch, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C04.0',
      de: 'Bösartige Neubildung: Vorderer Teil des Mundbodens',
      en: '',
    },
    {
      key: 'C04.1',
      de: 'Bösartige Neubildung: Seitlicher Teil des Mundbodens',
      en: '',
    },
    {
      key: 'C04.8',
      de: 'Bösartige Neubildung: Mundboden, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C04.9',
      de: 'Bösartige Neubildung: Mundboden, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C05.0',
      de: 'Bösartige Neubildung: Harter Gaumen',
      en: '',
    },
    {
      key: 'C05.1',
      de: 'Bösartige Neubildung: Weicher Gaumen',
      en: '',
    },
    {
      key: 'C05.2',
      de: 'Bösartige Neubildung: Uvula',
      en: '',
    },
    {
      key: 'C05.8',
      de: 'Bösartige Neubildung: Gaumen, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C05.9',
      de: 'Bösartige Neubildung: Gaumen, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C06.0',
      de: 'Bösartige Neubildung: Wangenschleimhaut',
      en: '',
    },
    {
      key: 'C06.1',
      de: 'Bösartige Neubildung: Vestibulum oris',
      en: '',
    },
    {
      key: 'C06.2',
      de: 'Bösartige Neubildung: Retromolarregion',
      en: '',
    },
    {
      key: 'C06.8',
      de: 'Bösartige Neubildung: Sonstige und nicht näher bezeichnete Teile des Mundes, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C06.9',
      de: 'Bösartige Neubildung: Mund, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C07.9',
      de: '',
      en: '',
    },
    {
      key: 'C08.0',
      de: 'Bösartige Neubildung: Glandula submandibularis',
      en: '',
    },
    {
      key: 'C08.1',
      de: 'Bösartige Neubildung: Glandula sublingualis',
      en: '',
    },
    {
      key: 'C08.8',
      de: 'Bösartige Neubildung: Große Speicheldrüsen, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C08.9',
      de: 'Bösartige Neubildung: Große Speicheldrüse, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C09.0',
      de: 'Bösartige Neubildung: Fossa tonsillaris',
      en: '',
    },
    {
      key: 'C09.1',
      de: 'Bösartige Neubildung: Gaumenbogen (vorderer) (hinterer)',
      en: '',
    },
    {
      key: 'C09.8',
      de: 'Bösartige Neubildung: Tonsille, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C09.9',
      de: 'Bösartige Neubildung: Tonsille, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C10.0',
      de: 'Bösartige Neubildung: Vallecula epiglottica',
      en: '',
    },
    {
      key: 'C10.1',
      de: 'Bösartige Neubildung: Vorderfläche der Epiglottis',
      en: '',
    },
    {
      key: 'C10.2',
      de: 'Bösartige Neubildung: Seitenwand des Oropharynx',
      en: '',
    },
    {
      key: 'C10.3',
      de: 'Bösartige Neubildung: Hinterwand des Oropharynx',
      en: '',
    },
    {
      key: 'C10.8',
      de: 'Bösartige Neubildung: Oropharynx, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C10.9',
      de: 'Bösartige Neubildung: Oropharynx, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C11.0',
      de: 'Bösartige Neubildung: Obere Wand des Nasopharynx',
      en: '',
    },
    {
      key: 'C11.1',
      de: 'Bösartige Neubildung: Hinterwand des Nasopharynx',
      en: '',
    },
    {
      key: 'C11.2',
      de: 'Bösartige Neubildung: Seitenwand des Nasopharynx',
      en: '',
    },
    {
      key: 'C11.3',
      de: 'Bösartige Neubildung: Vorderwand des Nasopharynx',
      en: '',
    },
    {
      key: 'C11.8',
      de: 'Bösartige Neubildung: Nasopharynx, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C11.9',
      de: 'Bösartige Neubildung: Nasopharynx, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C12.9',
      de: '',
      en: '',
    },
    {
      key: 'C13.0',
      de: 'Bösartige Neubildung: Regio postcricoidea',
      en: '',
    },
    {
      key: 'C13.1',
      de: 'Bösartige Neubildung: Aryepiglottische Falte, hypopharyngeale Seite',
      en: '',
    },
    {
      key: 'C13.2',
      de: 'Bösartige Neubildung: Hinterwand des Hypopharynx',
      en: '',
    },
    {
      key: 'C13.8',
      de: 'Bösartige Neubildung: Hypopharynx, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C13.9',
      de: 'Bösartige Neubildung: Hypopharynx, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C14.0',
      de: 'Bösartige Neubildung: Pharynx, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C14.2',
      de: 'Bösartige Neubildung: Lymphatischer Rachenring [Waldeyer]',
      en: '',
    },
    {
      key: 'C14.8',
      de: 'Bösartige Neubildung: Lippe, Mundhöhle und Pharynx, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C15.0',
      de: 'Bösartige Neubildung: Zervikaler Ösophagus',
      en: '',
    },
    {
      key: 'C15.1',
      de: 'Bösartige Neubildung: Thorakaler Ösophagus',
      en: '',
    },
    {
      key: 'C15.2',
      de: 'Bösartige Neubildung: Abdominaler Ösophagus',
      en: '',
    },
    {
      key: 'C15.3',
      de: 'Bösartige Neubildung: Ösophagus, oberes Drittel',
      en: '',
    },
    {
      key: 'C15.4',
      de: 'Bösartige Neubildung: Ösophagus, mittleres Drittel',
      en: '',
    },
    {
      key: 'C15.5',
      de: 'Bösartige Neubildung: Ösophagus, unteres Drittel',
      en: '',
    },
    {
      key: 'C15.8',
      de: 'Bösartige Neubildung: Ösophagus, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C15.9',
      de: 'Bösartige Neubildung: Ösophagus, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C16.0',
      de: 'Bösartige Neubildung: Kardia',
      en: '',
    },
    {
      key: 'C16.1',
      de: 'Bösartige Neubildung: Fundus ventriculi',
      en: '',
    },
    {
      key: 'C16.11',
      de: '',
      en: '',
    },
    {
      key: 'C16.13',
      de: '',
      en: '',
    },
    {
      key: 'C16.14',
      de: '',
      en: '',
    },
    {
      key: 'C16.2',
      de: 'Bösartige Neubildung: Corpus ventriculi',
      en: '',
    },
    {
      key: 'C16.21',
      de: '',
      en: '',
    },
    {
      key: 'C16.22',
      de: '',
      en: '',
    },
    {
      key: 'C16.23',
      de: '',
      en: '',
    },
    {
      key: 'C16.24',
      de: '',
      en: '',
    },
    {
      key: 'C16.3',
      de: 'Bösartige Neubildung: Antrum pyloricum',
      en: '',
    },
    {
      key: 'C16.31',
      de: '',
      en: '',
    },
    {
      key: 'C16.33',
      de: '',
      en: '',
    },
    {
      key: 'C16.34',
      de: '',
      en: '',
    },
    {
      key: 'C16.4',
      de: 'Bösartige Neubildung: Pylorus',
      en: '',
    },
    {
      key: 'C16.5',
      de: 'Bösartige Neubildung: Kleine Kurvatur des Magens, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C16.6',
      de: 'Bösartige Neubildung: Große Kurvatur des Magens, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C16.8',
      de: 'Bösartige Neubildung: Magen, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C16.9',
      de: 'Bösartige Neubildung: Magen, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C17.0',
      de: 'Bösartige Neubildung: Duodenum',
      en: '',
    },
    {
      key: 'C17.01',
      de: '',
      en: '',
    },
    {
      key: 'C17.03',
      de: '',
      en: '',
    },
    {
      key: 'C17.1',
      de: 'Bösartige Neubildung: Jejunum',
      en: '',
    },
    {
      key: 'C17.2',
      de: 'Bösartige Neubildung: Ileum',
      en: '',
    },
    {
      key: 'C17.3',
      de: 'Bösartige Neubildung: Meckel-Divertikel',
      en: '',
    },
    {
      key: 'C17.8',
      de: 'Bösartige Neubildung: Dünndarm, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C17.9',
      de: 'Bösartige Neubildung: Dünndarm, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C18.0',
      de: 'Bösartige Neubildung: Zäkum',
      en: '',
    },
    {
      key: 'C18.1',
      de: 'Bösartige Neubildung: Appendix vermiformis',
      en: '',
    },
    {
      key: 'C18.2',
      de: 'Bösartige Neubildung: Colon ascendens',
      en: '',
    },
    {
      key: 'C18.3',
      de: 'Bösartige Neubildung: Flexura coli dextra [hepatica]',
      en: '',
    },
    {
      key: 'C18.4',
      de: 'Bösartige Neubildung: Colon transversum',
      en: '',
    },
    {
      key: 'C18.41',
      de: '',
      en: '',
    },
    {
      key: 'C18.42',
      de: '',
      en: '',
    },
    {
      key: 'C18.43',
      de: '',
      en: '',
    },
    {
      key: 'C18.5',
      de: 'Bösartige Neubildung: Flexura coli sinistra [lienalis]',
      en: '',
    },
    {
      key: 'C18.6',
      de: 'Bösartige Neubildung: Colon descendens',
      en: '',
    },
    {
      key: 'C18.7',
      de: 'Bösartige Neubildung: Colon sigmoideum',
      en: '',
    },
    {
      key: 'C18.8',
      de: 'Bösartige Neubildung: Kolon, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C18.9',
      de: 'Bösartige Neubildung: Kolon, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C19.9',
      de: '',
      en: '',
    },
    {
      key: 'C20.9',
      de: '',
      en: '',
    },
    {
      key: 'C20.91',
      de: '',
      en: '',
    },
    {
      key: 'C20.92',
      de: '',
      en: '',
    },
    {
      key: 'C20.93',
      de: '',
      en: '',
    },
    {
      key: 'C20.94',
      de: '',
      en: '',
    },
    {
      key: 'C20.95',
      de: '',
      en: '',
    },
    {
      key: 'C20.96',
      de: '',
      en: '',
    },
    {
      key: 'C21.0',
      de: 'Bösartige Neubildung: Anus, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C21.1',
      de: 'Bösartige Neubildung: Analkanal',
      en: '',
    },
    {
      key: 'C21.2',
      de: 'Bösartige Neubildung: Kloakenregion',
      en: '',
    },
    {
      key: 'C21.8',
      de: 'Bösartige Neubildung: Rektum, Anus und Analkanal, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C22.0',
      de: 'Leberzellkarzinom',
      en: '',
    },
    {
      key: 'C22.01',
      de: '',
      en: '',
    },
    {
      key: 'C22.02',
      de: '',
      en: '',
    },
    {
      key: 'C22.1',
      de: 'Intrahepatisches Gallengangskarzinom',
      en: '',
    },
    {
      key: 'C22.3',
      de: 'Angiosarkom der Leber',
      en: '',
    },
    {
      key: 'C22.7',
      de: 'Sonstige näher bezeichnete Karzinome der Leber',
      en: '',
    },
    {
      key: 'C23.9',
      de: '',
      en: '',
    },
    {
      key: 'C23.92',
      de: '',
      en: '',
    },
    {
      key: 'C24.0',
      de: 'Bösartige Neubildung: Extrahepatischer Gallengang',
      en: '',
    },
    {
      key: 'C24.01',
      de: '',
      en: '',
    },
    {
      key: 'C24.02',
      de: '',
      en: '',
    },
    {
      key: 'C24.03',
      de: '',
      en: '',
    },
    {
      key: 'C24.04',
      de: '',
      en: '',
    },
    {
      key: 'C24.05',
      de: '',
      en: '',
    },
    {
      key: 'C24.1',
      de: 'Bösartige Neubildung: Ampulla hepatopancreatica [Ampulla Vateri]',
      en: '',
    },
    {
      key: 'C24.8',
      de: 'Bösartige Neubildung: Gallenwege, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C25.0',
      de: 'Bösartige Neubildung: Pankreaskopf',
      en: '',
    },
    {
      key: 'C25.1',
      de: 'Bösartige Neubildung: Pankreaskörper',
      en: '',
    },
    {
      key: 'C25.2',
      de: 'Bösartige Neubildung: Pankreasschwanz',
      en: '',
    },
    {
      key: 'C25.4',
      de: 'Bösartige Neubildung: Endokriner Drüsenanteil des Pankreas',
      en: '',
    },
    {
      key: 'C25.7',
      de: 'Bösartige Neubildung: Sonstige Teile des Pankreas',
      en: '',
    },
    {
      key: 'C25.8',
      de: 'Bösartige Neubildung: Pankreas, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C25.9',
      de: 'Bösartige Neubildung: Pankreas, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C26.0',
      de: 'Bösartige Neubildung: Intestinaltrakt, Teil nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C26.8',
      de: 'Bösartige Neubildung: Verdauungssystem, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C26.9',
      de: 'Bösartige Neubildung: Ungenau bezeichnete Lokalisationen des Verdauungssystems',
      en: '',
    },
    {
      key: 'C30.0',
      de: 'Bösartige Neubildung: Nasenhöhle',
      en: '',
    },
    {
      key: 'C30.1',
      de: 'Bösartige Neubildung: Mittelohr',
      en: '',
    },
    {
      key: 'C31.0',
      de: 'Bösartige Neubildung: Sinus maxillaris [Kieferhöhle]',
      en: '',
    },
    {
      key: 'C31.1',
      de: 'Bösartige Neubildung: Sinus ethmoidalis [Siebbeinzellen]',
      en: '',
    },
    {
      key: 'C31.2',
      de: 'Bösartige Neubildung: Sinus frontalis [Stirnhöhle]',
      en: '',
    },
    {
      key: 'C31.3',
      de: 'Bösartige Neubildung: Sinus sphenoidalis [Keilbeinhöhle]',
      en: '',
    },
    {
      key: 'C31.8',
      de: 'Bösartige Neubildung: Nasennebenhöhlen, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C31.9',
      de: 'Bösartige Neubildung: Nasennebenhöhle, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C32.0',
      de: 'Bösartige Neubildung: Glottis',
      en: '',
    },
    {
      key: 'C32.1',
      de: 'Bösartige Neubildung: Supraglottis',
      en: '',
    },
    {
      key: 'C32.2',
      de: 'Bösartige Neubildung: Subglottis',
      en: '',
    },
    {
      key: 'C32.8',
      de: 'Bösartige Neubildung: Larynx, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C32.9',
      de: 'Bösartige Neubildung: Larynx, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C33.9',
      de: '',
      en: '',
    },
    {
      key: 'C34.0',
      de: 'Bösartige Neubildung: Hauptbronchus',
      en: '',
    },
    {
      key: 'C34.01',
      de: '',
      en: '',
    },
    {
      key: 'C34.02',
      de: '',
      en: '',
    },
    {
      key: 'C34.1',
      de: 'Bösartige Neubildung: Oberlappen (-Bronchus)',
      en: '',
    },
    {
      key: 'C34.2',
      de: 'Bösartige Neubildung: Mittellappen (-Bronchus)',
      en: '',
    },
    {
      key: 'C34.3',
      de: 'Bösartige Neubildung: Unterlappen (-Bronchus)',
      en: '',
    },
    {
      key: 'C34.4',
      de: '',
      en: '',
    },
    {
      key: 'C34.8',
      de: 'Bösartige Neubildung: Bronchus und Lunge, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C34.9',
      de: 'Bösartige Neubildung: Bronchus oder Lunge, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C37.9',
      de: '',
      en: '',
    },
    {
      key: 'C38.0',
      de: 'Bösartige Neubildung: Herz',
      en: '',
    },
    {
      key: 'C38.1',
      de: 'Bösartige Neubildung: Vorderes Mediastinum',
      en: '',
    },
    {
      key: 'C38.2',
      de: 'Bösartige Neubildung: Hinteres Mediastinum',
      en: '',
    },
    {
      key: 'C38.3',
      de: 'Bösartige Neubildung: Mediastinum, Teil nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C38.4',
      de: 'Bösartige Neubildung: Pleura',
      en: '',
    },
    {
      key: 'C38.41',
      de: '',
      en: '',
    },
    {
      key: 'C38.42',
      de: '',
      en: '',
    },
    {
      key: 'C38.8',
      de: 'Bösartige Neubildung: Herz, Mediastinum und Pleura, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C39.8',
      de: 'Bösartige Neubildung: Atmungsorgane und sonstige intrathorakale Organe, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C39.9',
      de: 'Bösartige Neubildung: Ungenau bezeichnete Lokalisationen des Atmungssystems',
      en: '',
    },
    {
      key: 'C40.0',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Skapula und lange Knochen der oberen Extremität',
      en: '',
    },
    {
      key: 'C40.01',
      de: '',
      en: '',
    },
    {
      key: 'C40.02',
      de: '',
      en: '',
    },
    {
      key: 'C40.05',
      de: '',
      en: '',
    },
    {
      key: 'C40.1',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Kurze Knochen der oberen Extremität',
      en: '',
    },
    {
      key: 'C40.13',
      de: '',
      en: '',
    },
    {
      key: 'C40.14',
      de: '',
      en: '',
    },
    {
      key: 'C40.2',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Lange Knochen der unteren Extremität',
      en: '',
    },
    {
      key: 'C40.21',
      de: '',
      en: '',
    },
    {
      key: 'C40.22',
      de: '',
      en: '',
    },
    {
      key: 'C40.25',
      de: '',
      en: '',
    },
    {
      key: 'C40.3',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Kurze Knochen der unteren Extremität',
      en: '',
    },
    {
      key: 'C40.31',
      de: '',
      en: '',
    },
    {
      key: 'C40.33',
      de: '',
      en: '',
    },
    {
      key: 'C40.8',
      de: 'Bösartige Neubildung: Knochen und Gelenkknorpel der Extremitäten, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C41.0',
      de: '',
      en: '',
    },
    {
      key: 'C41.01',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Kraniofazial',
      en: '',
    },
    {
      key: 'C41.02',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Maxillofazial',
      en: '',
    },
    {
      key: 'C41.03',
      de: '',
      en: '',
    },
    {
      key: 'C41.05',
      de: '',
      en: '',
    },
    {
      key: 'C41.07',
      de: '',
      en: '',
    },
    {
      key: 'C41.1',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Unterkieferknochen',
      en: '',
    },
    {
      key: 'C41.2',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Wirbelsäule',
      en: '',
    },
    {
      key: 'C41.21',
      de: '',
      en: '',
    },
    {
      key: 'C41.22',
      de: '',
      en: '',
    },
    {
      key: 'C41.23',
      de: '',
      en: '',
    },
    {
      key: 'C41.25',
      de: '',
      en: '',
    },
    {
      key: 'C41.26',
      de: '',
      en: '',
    },
    {
      key: 'C41.3',
      de: '',
      en: '',
    },
    {
      key: 'C41.30',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Rippen',
      en: '',
    },
    {
      key: 'C41.31',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Sternum',
      en: '',
    },
    {
      key: 'C41.33',
      de: '',
      en: '',
    },
    {
      key: 'C41.34',
      de: '',
      en: '',
    },
    {
      key: 'C41.4',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Beckenknochen',
      en: '',
    },
    {
      key: 'C41.41',
      de: '',
      en: '',
    },
    {
      key: 'C41.42',
      de: '',
      en: '',
    },
    {
      key: 'C41.43',
      de: '',
      en: '',
    },
    {
      key: 'C41.44',
      de: '',
      en: '',
    },
    {
      key: 'C41.45',
      de: '',
      en: '',
    },
    {
      key: 'C41.46',
      de: '',
      en: '',
    },
    {
      key: 'C41.47',
      de: '',
      en: '',
    },
    {
      key: 'C41.8',
      de: 'Bösartige Neubildung: Knochen und Gelenkknorpel, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C41.9',
      de: 'Bösartige Neubildung: Knochen und Gelenkknorpel, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C42.0',
      de: '',
      en: '',
    },
    {
      key: 'C42.1',
      de: '',
      en: '',
    },
    {
      key: 'C42.2',
      de: '',
      en: '',
    },
    {
      key: 'C43.0',
      de: 'Bösartiges Melanom der Lippe',
      en: '',
    },
    {
      key: 'C43.1',
      de: 'Bösartiges Melanom des Augenlides, einschließlich Kanthus',
      en: '',
    },
    {
      key: 'C43.2',
      de: 'Bösartiges Melanom des Ohres und des äußeren Gehörganges',
      en: '',
    },
    {
      key: 'C43.3',
      de: 'Bösartiges Melanom sonstiger und nicht näher bezeichneter Teile des Gesichtes',
      en: '',
    },
    {
      key: 'C43.4',
      de: 'Bösartiges Melanom der behaarten Kopfhaut und des Halses',
      en: '',
    },
    {
      key: 'C43.5',
      de: 'Bösartiges Melanom des Rumpfes',
      en: '',
    },
    {
      key: 'C43.6',
      de: 'Bösartiges Melanom der oberen Extremität, einschließlich Schulter',
      en: '',
    },
    {
      key: 'C43.7',
      de: 'Bösartiges Melanom der unteren Extremität, einschließlich Hüfte',
      en: '',
    },
    {
      key: 'C43.8',
      de: 'Bösartiges Melanom der Haut, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C43.9',
      de: 'Bösartiges Melanom der Haut, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C44.0',
      de: 'Sonstige bösartige Neubildungen: Lippenhaut',
      en: '',
    },
    {
      key: 'C44.01',
      de: '',
      en: '',
    },
    {
      key: 'C44.02',
      de: '',
      en: '',
    },
    {
      key: 'C44.03',
      de: '',
      en: '',
    },
    {
      key: 'C44.1',
      de: 'Sonstige bösartige Neubildungen: Haut des Augenlides, einschließlich Kanthus',
      en: '',
    },
    {
      key: 'C44.11',
      de: '',
      en: '',
    },
    {
      key: 'C44.12',
      de: '',
      en: '',
    },
    {
      key: 'C44.13',
      de: '',
      en: '',
    },
    {
      key: 'C44.14',
      de: '',
      en: '',
    },
    {
      key: 'C44.2',
      de: 'Sonstige bösartige Neubildungen: Haut des Ohres und des äußeren Gehörganges',
      en: '',
    },
    {
      key: 'C44.21',
      de: '',
      en: '',
    },
    {
      key: 'C44.22',
      de: '',
      en: '',
    },
    {
      key: 'C44.3',
      de: 'Sonstige bösartige Neubildungen: Haut sonstiger und nicht näher bezeichneter Teile des Gesichtes',
      en: '',
    },
    {
      key: 'C44.31',
      de: '',
      en: '',
    },
    {
      key: 'C44.32',
      de: '',
      en: '',
    },
    {
      key: 'C44.33',
      de: '',
      en: '',
    },
    {
      key: 'C44.34',
      de: '',
      en: '',
    },
    {
      key: 'C44.35',
      de: '',
      en: '',
    },
    {
      key: 'C44.36',
      de: '',
      en: '',
    },
    {
      key: 'C44.4',
      de: 'Sonstige bösartige Neubildungen: Behaarte Kopfhaut und Haut des Halses',
      en: '',
    },
    {
      key: 'C44.41',
      de: '',
      en: '',
    },
    {
      key: 'C44.42',
      de: '',
      en: '',
    },
    {
      key: 'C44.43',
      de: '',
      en: '',
    },
    {
      key: 'C44.44',
      de: '',
      en: '',
    },
    {
      key: 'C44.5',
      de: 'Sonstige bösartige Neubildungen: Haut des Rumpfes',
      en: '',
    },
    {
      key: 'C44.51',
      de: '',
      en: '',
    },
    {
      key: 'C44.52',
      de: '',
      en: '',
    },
    {
      key: 'C44.53',
      de: '',
      en: '',
    },
    {
      key: 'C44.54',
      de: '',
      en: '',
    },
    {
      key: 'C44.55',
      de: '',
      en: '',
    },
    {
      key: 'C44.56',
      de: '',
      en: '',
    },
    {
      key: 'C44.57',
      de: '',
      en: '',
    },
    {
      key: 'C44.6',
      de: 'Sonstige bösartige Neubildungen: Haut der oberen Extremität, einschließlich Schulter',
      en: '',
    },
    {
      key: 'C44.61',
      de: '',
      en: '',
    },
    {
      key: 'C44.62',
      de: '',
      en: '',
    },
    {
      key: 'C44.63',
      de: '',
      en: '',
    },
    {
      key: 'C44.64',
      de: '',
      en: '',
    },
    {
      key: 'C44.65',
      de: '',
      en: '',
    },
    {
      key: 'C44.66',
      de: '',
      en: '',
    },
    {
      key: 'C44.67',
      de: '',
      en: '',
    },
    {
      key: 'C44.68',
      de: '',
      en: '',
    },
    {
      key: 'C44.69',
      de: '',
      en: '',
    },
    {
      key: 'C44.7',
      de: 'Sonstige bösartige Neubildungen: Haut der unteren Extremität, einschließlich Hüfte',
      en: '',
    },
    {
      key: 'C44.71',
      de: '',
      en: '',
    },
    {
      key: 'C44.72',
      de: '',
      en: '',
    },
    {
      key: 'C44.73',
      de: '',
      en: '',
    },
    {
      key: 'C44.74',
      de: '',
      en: '',
    },
    {
      key: 'C44.75',
      de: '',
      en: '',
    },
    {
      key: 'C44.76',
      de: '',
      en: '',
    },
    {
      key: 'C44.77',
      de: '',
      en: '',
    },
    {
      key: 'C44.78',
      de: '',
      en: '',
    },
    {
      key: 'C44.79',
      de: '',
      en: '',
    },
    {
      key: 'C44.8',
      de: 'Sonstige bösartige Neubildungen: Haut, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C44.9',
      de: 'Bösartige Neubildung der Haut, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C45.0',
      de: 'Mesotheliom der Pleura',
      en: '',
    },
    {
      key: 'C45.1',
      de: 'Mesotheliom des Peritoneums',
      en: '',
    },
    {
      key: 'C45.9',
      de: 'Mesotheliom, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C46.0',
      de: 'Kaposi-Sarkom der Haut',
      en: '',
    },
    {
      key: 'C46.9',
      de: 'Kaposi-Sarkom, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C47.0',
      de: 'Bösartige Neubildung: Periphere Nerven des Kopfes, des Gesichtes und des Halses',
      en: '',
    },
    {
      key: 'C47.1',
      de: 'Bösartige Neubildung: Periphere Nerven der oberen Extremität, einschließlich Schulter',
      en: '',
    },
    {
      key: 'C47.2',
      de: 'Bösartige Neubildung: Periphere Nerven der unteren Extremität, einschließlich Hüfte',
      en: '',
    },
    {
      key: 'C47.3',
      de: 'Bösartige Neubildung: Periphere Nerven des Thorax',
      en: '',
    },
    {
      key: 'C47.4',
      de: 'Bösartige Neubildung: Periphere Nerven des Abdomens',
      en: '',
    },
    {
      key: 'C47.5',
      de: 'Bösartige Neubildung: Periphere Nerven des Beckens',
      en: '',
    },
    {
      key: 'C47.6',
      de: 'Bösartige Neubildung: Periphere Nerven des Rumpfes, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C47.8',
      de: 'Bösartige Neubildung: Periphere Nerven und autonomes Nervensystem, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C47.9',
      de: 'Bösartige Neubildung: Periphere Nerven und autonomes Nervensystem, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C48.0',
      de: 'Bösartige Neubildung: Retroperitoneum',
      en: '',
    },
    {
      key: 'C48.1',
      de: 'Bösartige Neubildung: Näher bezeichnete Teile des Peritoneums',
      en: '',
    },
    {
      key: 'C48.11',
      de: '',
      en: '',
    },
    {
      key: 'C48.13',
      de: '',
      en: '',
    },
    {
      key: 'C48.2',
      de: 'Bösartige Neubildung: Peritoneum, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C48.8',
      de: 'Bösartige Neubildung: Retroperitoneum und Peritoneum, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C49.0',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe des Kopfes, des Gesichtes und des Halses',
      en: '',
    },
    {
      key: 'C49.01',
      de: '',
      en: '',
    },
    {
      key: 'C49.02',
      de: '',
      en: '',
    },
    {
      key: 'C49.03',
      de: '',
      en: '',
    },
    {
      key: 'C49.04',
      de: '',
      en: '',
    },
    {
      key: 'C49.06',
      de: '',
      en: '',
    },
    {
      key: 'C49.07',
      de: '',
      en: '',
    },
    {
      key: 'C49.1',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe der oberen Extremität, einschließlich Schulter',
      en: '',
    },
    {
      key: 'C49.11',
      de: '',
      en: '',
    },
    {
      key: 'C49.12',
      de: '',
      en: '',
    },
    {
      key: 'C49.13',
      de: '',
      en: '',
    },
    {
      key: 'C49.15',
      de: '',
      en: '',
    },
    {
      key: 'C49.16',
      de: '',
      en: '',
    },
    {
      key: 'C49.17',
      de: '',
      en: '',
    },
    {
      key: 'C49.18',
      de: '',
      en: '',
    },
    {
      key: 'C49.2',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe der unteren Extremität, einschließlich Hüfte',
      en: '',
    },
    {
      key: 'C49.21',
      de: '',
      en: '',
    },
    {
      key: 'C49.22',
      de: '',
      en: '',
    },
    {
      key: 'C49.23',
      de: '',
      en: '',
    },
    {
      key: 'C49.24',
      de: '',
      en: '',
    },
    {
      key: 'C49.25',
      de: '',
      en: '',
    },
    {
      key: 'C49.26',
      de: '',
      en: '',
    },
    {
      key: 'C49.27',
      de: '',
      en: '',
    },
    {
      key: 'C49.28',
      de: '',
      en: '',
    },
    {
      key: 'C49.3',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe des Thorax',
      en: '',
    },
    {
      key: 'C49.32',
      de: '',
      en: '',
    },
    {
      key: 'C49.33',
      de: '',
      en: '',
    },
    {
      key: 'C49.34',
      de: '',
      en: '',
    },
    {
      key: 'C49.36',
      de: '',
      en: '',
    },
    {
      key: 'C49.37',
      de: '',
      en: '',
    },
    {
      key: 'C49.4',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe des Abdomens',
      en: '',
    },
    {
      key: 'C49.42',
      de: '',
      en: '',
    },
    {
      key: 'C49.46',
      de: '',
      en: '',
    },
    {
      key: 'C49.5',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe des Beckens',
      en: '',
    },
    {
      key: 'C49.54',
      de: '',
      en: '',
    },
    {
      key: 'C49.57',
      de: '',
      en: '',
    },
    {
      key: 'C49.6',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe des Rumpfes, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C49.61',
      de: '',
      en: '',
    },
    {
      key: 'C49.62',
      de: '',
      en: '',
    },
    {
      key: 'C49.63',
      de: '',
      en: '',
    },
    {
      key: 'C49.8',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C49.9',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C49.98',
      de: '',
      en: '',
    },
    {
      key: 'C50.0',
      de: 'Bösartige Neubildung: Brustwarze und Warzenhof',
      en: '',
    },
    {
      key: 'C50.1',
      de: 'Bösartige Neubildung: Zentraler Drüsenkörper der Brustdrüse',
      en: '',
    },
    {
      key: 'C50.2',
      de: 'Bösartige Neubildung: Oberer innerer Quadrant der Brustdrüse',
      en: '',
    },
    {
      key: 'C50.3',
      de: 'Bösartige Neubildung: Unterer innerer Quadrant der Brustdrüse',
      en: '',
    },
    {
      key: 'C50.4',
      de: 'Bösartige Neubildung: Oberer äußerer Quadrant der Brustdrüse',
      en: '',
    },
    {
      key: 'C50.5',
      de: 'Bösartige Neubildung: Unterer äußerer Quadrant der Brustdrüse',
      en: '',
    },
    {
      key: 'C50.6',
      de: 'Bösartige Neubildung: Recessus axillaris der Brustdrüse',
      en: '',
    },
    {
      key: 'C50.8',
      de: 'Bösartige Neubildung: Brustdrüse, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C50.9',
      de: 'Bösartige Neubildung: Brustdrüse, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C51.0',
      de: 'Bösartige Neubildung der Vulva: Labium majus',
      en: '',
    },
    {
      key: 'C51.1',
      de: 'Bösartige Neubildung der Vulva: Labium minus',
      en: '',
    },
    {
      key: 'C51.2',
      de: 'Bösartige Neubildung der Vulva: Klitoris',
      en: '',
    },
    {
      key: 'C51.8',
      de: 'Bösartige Neubildung: Vulva, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C51.9',
      de: 'Bösartige Neubildung: Vulva, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C52.9',
      de: '',
      en: '',
    },
    {
      key: 'C52.91',
      de: '',
      en: '',
    },
    {
      key: 'C52.93',
      de: '',
      en: '',
    },
    {
      key: 'C52.94',
      de: '',
      en: '',
    },
    {
      key: 'C52.95',
      de: '',
      en: '',
    },
    {
      key: 'C53.0',
      de: 'Bösartige Neubildung: Endozervix',
      en: '',
    },
    {
      key: 'C53.01',
      de: '',
      en: '',
    },
    {
      key: 'C53.1',
      de: 'Bösartige Neubildung: Ektozervix',
      en: '',
    },
    {
      key: 'C53.11',
      de: '',
      en: '',
    },
    {
      key: 'C53.12',
      de: '',
      en: '',
    },
    {
      key: 'C53.8',
      de: 'Bösartige Neubildung: Cervix uteri, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C53.9',
      de: 'Bösartige Neubildung: Cervix uteri, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C54.0',
      de: 'Bösartige Neubildung: Isthmus uteri',
      en: '',
    },
    {
      key: 'C54.1',
      de: 'Bösartige Neubildung: Endometrium',
      en: '',
    },
    {
      key: 'C54.2',
      de: 'Bösartige Neubildung: Myometrium',
      en: '',
    },
    {
      key: 'C54.3',
      de: 'Bösartige Neubildung: Fundus uteri',
      en: '',
    },
    {
      key: 'C54.8',
      de: 'Bösartige Neubildung: Corpus uteri, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C54.9',
      de: 'Bösartige Neubildung: Corpus uteri, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C55.9',
      de: '',
      en: '',
    },
    {
      key: 'C56.9',
      de: '',
      en: '',
    },
    {
      key: 'C57.0',
      de: 'Bösartige Neubildung: Tuba uterina [Falloppio]',
      en: '',
    },
    {
      key: 'C57.1',
      de: 'Bösartige Neubildung: Lig. latum uteri',
      en: '',
    },
    {
      key: 'C57.4',
      de: 'Bösartige Neubildung: Uterine Adnexe, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C57.9',
      de: 'Bösartige Neubildung: Weibliches Genitalorgan, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C60.0',
      de: 'Bösartige Neubildung: Praeputium penis',
      en: '',
    },
    {
      key: 'C60.1',
      de: 'Bösartige Neubildung: Glans penis',
      en: '',
    },
    {
      key: 'C60.2',
      de: 'Bösartige Neubildung: Penisschaft',
      en: '',
    },
    {
      key: 'C60.8',
      de: 'Bösartige Neubildung: Penis, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C60.9',
      de: 'Bösartige Neubildung: Penis, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C61.0',
      de: '',
      en: '',
    },
    {
      key: 'C61.9',
      de: '',
      en: '',
    },
    {
      key: 'C61.91',
      de: '',
      en: '',
    },
    {
      key: 'C61.92',
      de: '',
      en: '',
    },
    {
      key: 'C61.94',
      de: '',
      en: '',
    },
    {
      key: 'C62.1',
      de: 'Bösartige Neubildung: Deszendierter Hoden',
      en: '',
    },
    {
      key: 'C62.9',
      de: 'Bösartige Neubildung: Hoden, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C63.0',
      de: 'Bösartige Neubildung: Nebenhoden [Epididymis]',
      en: '',
    },
    {
      key: 'C63.1',
      de: 'Bösartige Neubildung: Samenstrang',
      en: '',
    },
    {
      key: 'C63.2',
      de: 'Bösartige Neubildung: Skrotum',
      en: '',
    },
    {
      key: 'C64.9',
      de: '',
      en: '',
    },
    {
      key: 'C64.91',
      de: '',
      en: '',
    },
    {
      key: 'C64.92',
      de: '',
      en: '',
    },
    {
      key: 'C64.93',
      de: '',
      en: '',
    },
    {
      key: 'C65.9',
      de: '',
      en: '',
    },
    {
      key: 'C65.91',
      de: '',
      en: '',
    },
    {
      key: 'C66.9',
      de: '',
      en: '',
    },
    {
      key: 'C67.0',
      de: 'Bösartige Neubildung: Trigonum vesicae',
      en: '',
    },
    {
      key: 'C67.1',
      de: 'Bösartige Neubildung: Apex vesicae',
      en: '',
    },
    {
      key: 'C67.2',
      de: 'Bösartige Neubildung: Laterale Harnblasenwand',
      en: '',
    },
    {
      key: 'C67.3',
      de: 'Bösartige Neubildung: Vordere Harnblasenwand',
      en: '',
    },
    {
      key: 'C67.4',
      de: 'Bösartige Neubildung: Hintere Harnblasenwand',
      en: '',
    },
    {
      key: 'C67.5',
      de: 'Bösartige Neubildung: Harnblasenhals',
      en: '',
    },
    {
      key: 'C67.6',
      de: 'Bösartige Neubildung: Ostium ureteris',
      en: '',
    },
    {
      key: 'C67.7',
      de: 'Bösartige Neubildung: Urachus',
      en: '',
    },
    {
      key: 'C67.8',
      de: 'Bösartige Neubildung: Harnblase, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C67.9',
      de: 'Bösartige Neubildung: Harnblase, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C68.0',
      de: 'Bösartige Neubildung: Urethra',
      en: '',
    },
    {
      key: 'C68.8',
      de: 'Bösartige Neubildung: Harnorgane, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C68.9',
      de: 'Bösartige Neubildung: Harnorgan, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C69.0',
      de: 'Bösartige Neubildung: Konjunktiva',
      en: '',
    },
    {
      key: 'C69.01',
      de: '',
      en: '',
    },
    {
      key: 'C69.2',
      de: 'Bösartige Neubildung: Retina',
      en: '',
    },
    {
      key: 'C69.3',
      de: 'Bösartige Neubildung: Chorioidea',
      en: '',
    },
    {
      key: 'C69.4',
      de: 'Bösartige Neubildung: Ziliarkörper',
      en: '',
    },
    {
      key: 'C69.41',
      de: '',
      en: '',
    },
    {
      key: 'C69.43',
      de: '',
      en: '',
    },
    {
      key: 'C69.5',
      de: 'Bösartige Neubildung: Tränendrüse und Tränenwege',
      en: '',
    },
    {
      key: 'C69.53',
      de: '',
      en: '',
    },
    {
      key: 'C69.6',
      de: 'Bösartige Neubildung: Orbita',
      en: '',
    },
    {
      key: 'C69.61',
      de: '',
      en: '',
    },
    {
      key: 'C69.8',
      de: 'Bösartige Neubildung: Auge und Augenanhangsgebilde, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C69.9',
      de: 'Bösartige Neubildung: Auge, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C70.0',
      de: 'Bösartige Neubildung: Hirnhäute',
      en: '',
    },
    {
      key: 'C70.01',
      de: '',
      en: '',
    },
    {
      key: 'C70.02',
      de: '',
      en: '',
    },
    {
      key: 'C70.04',
      de: '',
      en: '',
    },
    {
      key: 'C70.06',
      de: '',
      en: '',
    },
    {
      key: 'C70.1',
      de: 'Bösartige Neubildung: Rückenmarkhäute',
      en: '',
    },
    {
      key: 'C70.11',
      de: '',
      en: '',
    },
    {
      key: 'C70.12',
      de: '',
      en: '',
    },
    {
      key: 'C70.13',
      de: '',
      en: '',
    },
    {
      key: 'C70.9',
      de: 'Bösartige Neubildung: Meningen, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C71.0',
      de: 'Bösartige Neubildung: Zerebrum, ausgenommen Hirnlappen und Ventrikel',
      en: '',
    },
    {
      key: 'C71.01',
      de: '',
      en: '',
    },
    {
      key: 'C71.03',
      de: '',
      en: '',
    },
    {
      key: 'C71.04',
      de: '',
      en: '',
    },
    {
      key: 'C71.05',
      de: '',
      en: '',
    },
    {
      key: 'C71.06',
      de: '',
      en: '',
    },
    {
      key: 'C71.07',
      de: '',
      en: '',
    },
    {
      key: 'C71.1',
      de: 'Bösartige Neubildung: Frontallappen',
      en: '',
    },
    {
      key: 'C71.2',
      de: 'Bösartige Neubildung: Temporallappen',
      en: '',
    },
    {
      key: 'C71.21',
      de: '',
      en: '',
    },
    {
      key: 'C71.3',
      de: 'Bösartige Neubildung: Parietallappen',
      en: '',
    },
    {
      key: 'C71.4',
      de: 'Bösartige Neubildung: Okzipitallappen',
      en: '',
    },
    {
      key: 'C71.5',
      de: 'Bösartige Neubildung: Hirnventrikel',
      en: '',
    },
    {
      key: 'C71.51',
      de: '',
      en: '',
    },
    {
      key: 'C71.53',
      de: '',
      en: '',
    },
    {
      key: 'C71.56',
      de: '',
      en: '',
    },
    {
      key: 'C71.6',
      de: 'Bösartige Neubildung: Zerebellum',
      en: '',
    },
    {
      key: 'C71.61',
      de: '',
      en: '',
    },
    {
      key: 'C71.63',
      de: '',
      en: '',
    },
    {
      key: 'C71.64',
      de: '',
      en: '',
    },
    {
      key: 'C71.65',
      de: '',
      en: '',
    },
    {
      key: 'C71.7',
      de: 'Bösartige Neubildung: Hirnstamm',
      en: '',
    },
    {
      key: 'C71.71',
      de: '',
      en: '',
    },
    {
      key: 'C71.72',
      de: '',
      en: '',
    },
    {
      key: 'C71.73',
      de: '',
      en: '',
    },
    {
      key: 'C71.76',
      de: '',
      en: '',
    },
    {
      key: 'C71.77',
      de: '',
      en: '',
    },
    {
      key: 'C71.8',
      de: 'Bösartige Neubildung: Gehirn, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C71.9',
      de: 'Bösartige Neubildung: Gehirn, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C72.0',
      de: 'Bösartige Neubildung: Rückenmark',
      en: '',
    },
    {
      key: 'C72.01',
      de: '',
      en: '',
    },
    {
      key: 'C72.02',
      de: '',
      en: '',
    },
    {
      key: 'C72.03',
      de: '',
      en: '',
    },
    {
      key: 'C72.04',
      de: '',
      en: '',
    },
    {
      key: 'C72.05',
      de: '',
      en: '',
    },
    {
      key: 'C72.1',
      de: 'Bösartige Neubildung: Cauda equina',
      en: '',
    },
    {
      key: 'C72.2',
      de: 'Bösartige Neubildung: Nn. olfactorii [I. Hirnnerv]',
      en: '',
    },
    {
      key: 'C72.3',
      de: 'Bösartige Neubildung: N. opticus [II. Hirnnerv]',
      en: '',
    },
    {
      key: 'C72.4',
      de: 'Bösartige Neubildung: N. vestibulocochlearis [VIII. Hirnnerv]',
      en: '',
    },
    {
      key: 'C72.5',
      de: 'Bösartige Neubildung: Sonstige und nicht näher bezeichnete Hirnnerven',
      en: '',
    },
    {
      key: 'C72.51',
      de: '',
      en: '',
    },
    {
      key: 'C72.52',
      de: '',
      en: '',
    },
    {
      key: 'C72.53',
      de: '',
      en: '',
    },
    {
      key: 'C72.54',
      de: '',
      en: '',
    },
    {
      key: 'C72.56',
      de: '',
      en: '',
    },
    {
      key: 'C72.57',
      de: '',
      en: '',
    },
    {
      key: 'C72.8',
      de: 'Bösartige Neubildung: Gehirn und andere Teile des Zentralnervensystems, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C72.9',
      de: 'Bösartige Neubildung: Zentralnervensystem, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C73.9',
      de: '',
      en: '',
    },
    {
      key: 'C73.91',
      de: '',
      en: '',
    },
    {
      key: 'C73.92',
      de: '',
      en: '',
    },
    {
      key: 'C73.93',
      de: '',
      en: '',
    },
    {
      key: 'C74.0',
      de: 'Bösartige Neubildung: Nebennierenrinde',
      en: '',
    },
    {
      key: 'C74.1',
      de: 'Bösartige Neubildung: Nebennierenmark',
      en: '',
    },
    {
      key: 'C74.9',
      de: 'Bösartige Neubildung: Nebenniere, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C75.1',
      de: 'Bösartige Neubildung: Hypophyse',
      en: '',
    },
    {
      key: 'C75.11',
      de: '',
      en: '',
    },
    {
      key: 'C75.13',
      de: '',
      en: '',
    },
    {
      key: 'C75.2',
      de: 'Bösartige Neubildung: Ductus craniopharyngealis',
      en: '',
    },
    {
      key: 'C75.3',
      de: 'Bösartige Neubildung: Epiphyse [Glandula pinealis] [Zirbeldrüse]',
      en: '',
    },
    {
      key: 'C75.4',
      de: 'Bösartige Neubildung: Glomus caroticum',
      en: '',
    },
    {
      key: 'C75.5',
      de: 'Bösartige Neubildung: Glomus aorticum und sonstige Paraganglien',
      en: '',
    },
    {
      key: 'C75.51',
      de: '',
      en: '',
    },
    {
      key: 'C75.53',
      de: '',
      en: '',
    },
    {
      key: 'C76.0',
      de: 'Bösartige Neubildung ungenau bezeichneter Lokalisationen: Kopf, Gesicht und Hals',
      en: '',
    },
    {
      key: 'C76.1',
      de: 'Bösartige Neubildung ungenau bezeichneter Lokalisationen: Thorax',
      en: '',
    },
    {
      key: 'C76.2',
      de: 'Bösartige Neubildung ungenau bezeichneter Lokalisationen: Abdomen',
      en: '',
    },
    {
      key: 'C76.3',
      de: 'Bösartige Neubildung ungenau bezeichneter Lokalisationen: Becken',
      en: '',
    },
    {
      key: 'C76.4',
      de: 'Bösartige Neubildung ungenau bezeichneter Lokalisationen: Obere Extremität',
      en: '',
    },
    {
      key: 'C76.5',
      de: 'Bösartige Neubildung ungenau bezeichneter Lokalisationen: Untere Extremität',
      en: '',
    },
    {
      key: 'C76.7',
      de: 'Bösartige Neubildung: Sonstige ungenau bezeichnete Lokalisationen',
      en: '',
    },
    {
      key: 'C76.8',
      de: 'Bösartige Neubildung: Sonstige und ungenau bezeichnete Lokalisationen, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C77.0',
      de: 'Sekundäre und nicht näher bezeichnete bösartige Neubildung: Lymphknoten des Kopfes, des Gesichtes und des Halses',
      en: '',
    },
    {
      key: 'C77.02',
      de: '',
      en: '',
    },
    {
      key: 'C77.03',
      de: '',
      en: '',
    },
    {
      key: 'C77.04',
      de: '',
      en: '',
    },
    {
      key: 'C77.07',
      de: '',
      en: '',
    },
    {
      key: 'C77.09',
      de: '',
      en: '',
    },
    {
      key: 'C77.1',
      de: 'Sekundäre und nicht näher bezeichnete bösartige Neubildung: Intrathorakale Lymphknoten',
      en: '',
    },
    {
      key: 'C77.12',
      de: '',
      en: '',
    },
    {
      key: 'C77.14',
      de: '',
      en: '',
    },
    {
      key: 'C77.15',
      de: '',
      en: '',
    },
    {
      key: 'C77.19',
      de: '',
      en: '',
    },
    {
      key: 'C77.2',
      de: 'Sekundäre und nicht näher bezeichnete bösartige Neubildung: Intraabdominale Lymphknoten',
      en: '',
    },
    {
      key: 'C77.21',
      de: '',
      en: '',
    },
    {
      key: 'C77.24',
      de: '',
      en: '',
    },
    {
      key: 'C77.25',
      de: '',
      en: '',
    },
    {
      key: 'C77.26',
      de: '',
      en: '',
    },
    {
      key: 'C77.28',
      de: '',
      en: '',
    },
    {
      key: 'C77.29',
      de: '',
      en: '',
    },
    {
      key: 'C77.3',
      de: 'Sekundäre und nicht näher bezeichnete bösartige Neubildung: Axilläre Lymphknoten und Lymphknoten der oberen Extremität',
      en: '',
    },
    {
      key: 'C77.35',
      de: '',
      en: '',
    },
    {
      key: 'C77.4',
      de: 'Sekundäre und nicht näher bezeichnete bösartige Neubildung: Inguinale Lymphknoten und Lymphknoten der unteren Extremität',
      en: '',
    },
    {
      key: 'C77.41',
      de: '',
      en: '',
    },
    {
      key: 'C77.48',
      de: '',
      en: '',
    },
    {
      key: 'C77.5',
      de: 'Sekundäre und nicht näher bezeichnete bösartige Neubildung: Intrapelvine Lymphknoten',
      en: '',
    },
    {
      key: 'C77.53',
      de: '',
      en: '',
    },
    {
      key: 'C77.58',
      de: '',
      en: '',
    },
    {
      key: 'C77.8',
      de: 'Sekundäre und nicht näher bezeichnete bösartige Neubildung: Lymphknoten mehrerer Regionen',
      en: '',
    },
    {
      key: 'C77.9',
      de: 'Sekundäre und nicht näher bezeichnete bösartige Neubildung: Lymphknoten, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C79.3',
      de: 'Sekundäre bösartige Neubildung des Gehirns und der Hirnhäute',
      en: '',
    },
    {
      key: 'C80.0',
      de: 'Bösartige Neubildung, primäre Lokalisation unbekannt, so bezeichnet',
      en: '',
    },
    {
      key: 'C80.9',
      de: 'Bösartige Neubildung, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C81.0',
      de: 'Noduläres lymphozytenprädominantes Hodgkin-Lymphom',
      en: '',
    },
    {
      key: 'C81.1',
      de: 'Nodulär-sklerosierendes (klassisches) Hodgkin-Lymphom',
      en: '',
    },
    {
      key: 'C81.2',
      de: 'Gemischtzelliges (klassisches) Hodgkin-Lymphom',
      en: '',
    },
    {
      key: 'C81.4',
      de: 'Lymphozytenreiches (klassisches) Hodgkin-Lymphom',
      en: '',
    },
    {
      key: 'C81.7',
      de: 'Sonstige Typen des (klassischen) Hodgkin-Lymphoms',
      en: '',
    },
    {
      key: 'C81.9',
      de: 'Hodgkin-Lymphom, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C82.0',
      de: 'Follikuläres Lymphom Grad I',
      en: '',
    },
    {
      key: 'C82.1',
      de: 'Follikuläres Lymphom Grad II',
      en: '',
    },
    {
      key: 'C82.2',
      de: 'Follikuläres Lymphom Grad III, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C82.3',
      de: 'Follikuläres Lymphom Grad IIIa',
      en: '',
    },
    {
      key: 'C82.4',
      de: 'Follikuläres Lymphom Grad IIIb',
      en: '',
    },
    {
      key: 'C82.6',
      de: 'Kutanes Follikelzentrumslymphom',
      en: '',
    },
    {
      key: 'C82.7',
      de: 'Sonstige Typen des follikulären Lymphoms',
      en: '',
    },
    {
      key: 'C82.9',
      de: 'Follikuläres Lymphom, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C83.0',
      de: 'Kleinzelliges B-Zell-Lymphom',
      en: '',
    },
    {
      key: 'C83.1',
      de: 'Mantelzell-Lymphom',
      en: '',
    },
    {
      key: 'C83.3',
      de: 'Diffuses großzelliges B-Zell-Lymphom',
      en: '',
    },
    {
      key: 'C83.4',
      de: '',
      en: '',
    },
    {
      key: 'C83.5',
      de: 'Lymphoblastisches Lymphom',
      en: '',
    },
    {
      key: 'C83.7',
      de: 'Burkitt-Lymphom',
      en: '',
    },
    {
      key: 'C83.8',
      de: 'Sonstige nicht follikuläre Lymphome',
      en: '',
    },
    {
      key: 'C83.9',
      de: 'Nicht follikuläres Lymphom, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C84.0',
      de: 'Mycosis fungoides',
      en: '',
    },
    {
      key: 'C84.2',
      de: '',
      en: '',
    },
    {
      key: 'C84.4',
      de: 'Peripheres T-Zell-Lymphom, nicht spezifiziert',
      en: '',
    },
    {
      key: 'C84.5',
      de: 'Sonstige reifzellige T/NK-Zell-Lymphome',
      en: '',
    },
    {
      key: 'C84.6',
      de: 'Anaplastisches großzelliges Lymphom, ALK-positiv',
      en: '',
    },
    {
      key: 'C84.8',
      de: 'Kutanes T-Zell-Lymphom, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C85.1',
      de: 'B-Zell-Lymphom, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C85.2',
      de: 'Mediastinales (thymisches) großzelliges B-Zell-Lymphom',
      en: '',
    },
    {
      key: 'C85.7',
      de: 'Sonstige näher bezeichnete Typen des Non-Hodgkin-Lymphoms',
      en: '',
    },
    {
      key: 'C85.9',
      de: 'Non-Hodgkin-Lymphom, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C86.0',
      de: 'Extranodales NK/T-Zell-Lymphom, nasaler Typ',
      en: '',
    },
    {
      key: 'C86.3',
      de: 'Subkutanes pannikulitisches T-Zell-Lymphom',
      en: '',
    },
    {
      key: 'C86.4',
      de: 'Blastisches NK-Zell-Lymphom',
      en: '',
    },
    {
      key: 'C86.5',
      de: 'Angioimmunoblastisches T-Zell-Lymphom',
      en: '',
    },
    {
      key: 'C86.6',
      de: 'Primäre kutane CD30-positive T-Zell-Proliferationen',
      en: '',
    },
    {
      key: 'C88.00',
      de: 'Makroglobulinämie Waldenström: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C88.3',
      de: '',
      en: '',
    },
    {
      key: 'C88.4',
      de: '',
      en: '',
    },
    {
      key: 'C88.40',
      de: 'Extranodales Marginalzonen-B-Zell-Lymphom des Mukosa-assoziierten lymphatischen Gewebes [MALT-Lymphom]: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C88.41',
      de: 'Extranodales Marginalzonen-B-Zell-Lymphom des Mukosa-assoziierten lymphatischen Gewebes [MALT-Lymphom]: In kompletter Remission',
      en: '',
    },
    {
      key: 'C88.9',
      de: '',
      en: '',
    },
    {
      key: 'C90.0',
      de: '',
      en: '',
    },
    {
      key: 'C90.00',
      de: 'Multiples Myelom: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C90.1',
      de: '',
      en: '',
    },
    {
      key: 'C90.10',
      de: 'Plasmazellenleukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C90.2',
      de: '',
      en: '',
    },
    {
      key: 'C90.20',
      de: 'Extramedulläres Plasmozytom: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C90.30',
      de: 'Solitäres Plasmozytom: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C91.0',
      de: '',
      en: '',
    },
    {
      key: 'C91.00',
      de: 'Akute lymphatische Leukämie [ALL]: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C91.01',
      de: 'Akute lymphatische Leukämie [ALL]: In kompletter Remission',
      en: '',
    },
    {
      key: 'C91.1',
      de: '',
      en: '',
    },
    {
      key: 'C91.10',
      de: 'Chronische lymphatische Leukämie vom B-Zell-Typ [CLL]: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C91.11',
      de: 'Chronische lymphatische Leukämie vom B-Zell-Typ [CLL]: In kompletter Remission',
      en: '',
    },
    {
      key: 'C91.30',
      de: 'Prolymphozytäre Leukämie vom B-Zell-Typ: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C91.5',
      de: '',
      en: '',
    },
    {
      key: 'C91.50',
      de: 'Adulte(s) T-Zell-Lymphom/Leukämie (HTLV-1-assoziiert): Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C91.70',
      de: 'Sonstige lymphatische Leukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.0',
      de: '',
      en: '',
    },
    {
      key: 'C92.00',
      de: 'Akute myeloblastische Leukämie [AML]: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.01',
      de: 'Akute myeloblastische Leukämie [AML]: In kompletter Remission',
      en: '',
    },
    {
      key: 'C92.1',
      de: '',
      en: '',
    },
    {
      key: 'C92.10',
      de: 'Chronische myeloische Leukämie [CML], BCR/ABL-positiv: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.50',
      de: 'Akute myelomonozytäre Leukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.60',
      de: 'Akute myeloische Leukämie mit 11q23-Abnormität: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.80',
      de: 'Akute myeloische Leukämie mit multilineärer Dysplasie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.90',
      de: 'Myeloische Leukämie, nicht näher bezeichnet: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C93.00',
      de: 'Akute Monoblasten-/Monozytenleukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C93.10',
      de: 'Chronische myelomonozytäre Leukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C94.00',
      de: 'Akute Erythroleukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C94.20',
      de: 'Akute Megakaryoblastenleukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C94.40',
      de: 'Akute Panmyelose mit Myelofibrose: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C95.0',
      de: '',
      en: '',
    },
    {
      key: 'C95.00',
      de: 'Akute Leukämie nicht näher bezeichneten Zelltyps: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C95.70',
      de: 'Sonstige Leukämie nicht näher bezeichneten Zelltyps: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C95.90',
      de: 'Leukämie, nicht näher bezeichnet: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C96.1',
      de: '',
      en: '',
    },
    {
      key: 'C96.4',
      de: 'Sarkom der dendritischen Zellen (akzessorische Zellen)',
      en: '',
    },
    {
      key: 'C96.6',
      de: 'Unifokale Langerhans-Zell-Histiozytose',
      en: '',
    },
    {
      key: 'C96.7',
      de: 'Sonstige näher bezeichnete bösartige Neubildungen des lymphatischen, blutbildenden und verwandten Gewebes',
      en: '',
    },
    {
      key: 'C96.9',
      de: 'Bösartige Neubildung des lymphatischen, blutbildenden und verwandten Gewebes, nicht näher bezeichnet',
      en: '',
    },
  ]
);
