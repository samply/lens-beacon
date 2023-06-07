import { Criteria } from '@samply/lens-core';

export const Diagnosen: Criteria = new Criteria(
  'diagnosis',
  {
    de: 'Diagnose ICD-10',
    en: 'Diagnosis ICD-10',
  },
  'string',
  'http://fhir.de/CodeSystem/dimdi/icd-10-gm',
  ['EQUALS', 'CONTAINS'],
  [
    {
      key: 'C97',
      de: 'Bösartige Neubildungen als Primärtumoren an mehreren Lokalisationen',
      en: '',
    },
    {
      key: 'C34.9',
      de: 'Bösartige Neubildung: Bronchus oder Lunge, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C34.8',
      de: 'Bösartige Neubildung: Bronchus und Lunge, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C34.0',
      de: 'Bösartige Neubildung: Hauptbronchus',
      en: '',
    },
    {
      key: 'C34.2',
      de: 'Bösartige Neubildung: Mittellappen (-Bronchus)',
      en: '',
    },
    {
      key: 'C34.1',
      de: 'Bösartige Neubildung: Oberlappen (-Bronchus)',
      en: '',
    },
    {
      key: 'C34.3',
      de: 'Bösartige Neubildung: Unterlappen (-Bronchus)',
      en: '',
    },
    {
      key: 'C30.1',
      de: 'Bösartige Neubildung: Mittelohr',
      en: '',
    },
    {
      key: 'C30.0',
      de: 'Bösartige Neubildung: Nasenhöhle',
      en: '',
    },
    {
      key: 'C31.9',
      de: 'Bösartige Neubildung: Nasennebenhöhle, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C31.8',
      de: 'Bösartige Neubildung: Nasennebenhöhlen, mehrere Teilbereiche überlappend',
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
      key: 'C31.0',
      de: 'Bösartige Neubildung: Sinus maxillaris [Kieferhöhle]',
      en: '',
    },
    {
      key: 'C31.3',
      de: 'Bösartige Neubildung: Sinus sphenoidalis [Keilbeinhöhle]',
      en: '',
    },
    {
      key: 'C33',
      de: 'Bösartige Neubildung der Trachea',
      en: '',
    },
    {
      key: 'C38.0',
      de: 'Bösartige Neubildung: Herz',
      en: '',
    },
    {
      key: 'C38.8',
      de: 'Bösartige Neubildung: Herz, Mediastinum und Pleura, mehrere Teilbereiche überlappend',
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
      key: 'C38.1',
      de: 'Bösartige Neubildung: Vorderes Mediastinum',
      en: '',
    },
    {
      key: 'C32.0',
      de: 'Bösartige Neubildung: Glottis',
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
      key: 'C32.3',
      de: 'Bösartige Neubildung: Larynxknorpel',
      en: '',
    },
    {
      key: 'C32.2',
      de: 'Bösartige Neubildung: Subglottis',
      en: '',
    },
    {
      key: 'C32.1',
      de: 'Bösartige Neubildung: Supraglottis',
      en: '',
    },
    {
      key: 'C37',
      de: 'Bösartige Neubildung des Thymus',
      en: '',
    },
    {
      key: 'C39.8',
      de: 'Bösartige Neubildung: Atmungsorgane und sonstige intrathorakale Organe, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C39.0',
      de: 'Bösartige Neubildung: Obere Atemwege, Teil nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C39.9',
      de: 'Bösartige Neubildung: Ungenau bezeichnete Lokalisationen des Atmungssystems',
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
      key: 'C50.0',
      de: 'Bösartige Neubildung: Brustwarze und Warzenhof',
      en: '',
    },
    {
      key: 'C50.2',
      de: 'Bösartige Neubildung: Oberer innerer Quadrant der Brustdrüse',
      en: '',
    },
    {
      key: 'C50.4',
      de: 'Bösartige Neubildung: Oberer äußerer Quadrant der Brustdrüse',
      en: '',
    },
    {
      key: 'C50.6',
      de: 'Bösartige Neubildung: Recessus axillaris der Brustdrüse',
      en: '',
    },
    {
      key: 'C50.3',
      de: 'Bösartige Neubildung: Unterer innerer Quadrant der Brustdrüse',
      en: '',
    },
    {
      key: 'C50.5',
      de: 'Bösartige Neubildung: Unterer äußerer Quadrant der Brustdrüse',
      en: '',
    },
    {
      key: 'C50.1',
      de: 'Bösartige Neubildung: Zentraler Drüsenkörper der Brustdrüse',
      en: '',
    },
    {
      key: 'C67.1',
      de: 'Bösartige Neubildung: Apex vesicae',
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
      key: 'C67.5',
      de: 'Bösartige Neubildung: Harnblasenhals',
      en: '',
    },
    {
      key: 'C67.4',
      de: 'Bösartige Neubildung: Hintere Harnblasenwand',
      en: '',
    },
    {
      key: 'C67.2',
      de: 'Bösartige Neubildung: Laterale Harnblasenwand',
      en: '',
    },
    {
      key: 'C67.6',
      de: 'Bösartige Neubildung: Ostium ureteris',
      en: '',
    },
    {
      key: 'C67.0',
      de: 'Bösartige Neubildung: Trigonum vesicae',
      en: '',
    },
    {
      key: 'C67.7',
      de: 'Bösartige Neubildung: Urachus',
      en: '',
    },
    {
      key: 'C67.3',
      de: 'Bösartige Neubildung: Vordere Harnblasenwand',
      en: '',
    },
    {
      key: 'C64',
      de: 'Bösartige Neubildung der Niere, ausgenommen Nierenbecken',
      en: '',
    },
    {
      key: 'C65',
      de: 'Bösartige Neubildung des Nierenbeckens',
      en: '',
    },
    {
      key: 'C66',
      de: 'Bösartige Neubildung des Ureters',
      en: '',
    },
    {
      key: 'C68.9',
      de: 'Bösartige Neubildung: Harnorgan, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C68.8',
      de: 'Bösartige Neubildung: Harnorgane, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C68.1',
      de: 'Bösartige Neubildung: Paraurethrale Drüse',
      en: '',
    },
    {
      key: 'C68.0',
      de: 'Bösartige Neubildung: Urethra',
      en: '',
    },
    {
      key: 'C00.8',
      de: 'Bösartige Neubildung: Lippe, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C00.9',
      de: 'Bösartige Neubildung: Lippe, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C00.5',
      de: 'Bösartige Neubildung: Lippe, nicht näher bezeichnet, Innenseite',
      en: '',
    },
    {
      key: 'C00.6',
      de: 'Bösartige Neubildung: Lippenkommissur',
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
      key: 'C00.2',
      de: 'Bösartige Neubildung: Äußere Lippe, nicht näher bezeichnet',
      en: '',
    },
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
      key: 'C07',
      de: 'Bösartige Neubildung der Parotis',
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
      key: 'C05.0',
      de: 'Bösartige Neubildung: Harter Gaumen',
      en: '',
    },
    {
      key: 'C05.2',
      de: 'Bösartige Neubildung: Uvula',
      en: '',
    },
    {
      key: 'C05.1',
      de: 'Bösartige Neubildung: Weicher Gaumen',
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
      key: 'C13.0',
      de: 'Bösartige Neubildung: Regio postcricoidea',
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
      key: 'C04.1',
      de: 'Bösartige Neubildung: Seitlicher Teil des Mundbodens',
      en: '',
    },
    {
      key: 'C04.0',
      de: 'Bösartige Neubildung: Vorderer Teil des Mundbodens',
      en: '',
    },
    {
      key: 'C11.1',
      de: 'Bösartige Neubildung: Hinterwand des Nasopharynx',
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
      key: 'C11.0',
      de: 'Bösartige Neubildung: Obere Wand des Nasopharynx',
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
      key: 'C10.3',
      de: 'Bösartige Neubildung: Hinterwand des Oropharynx',
      en: '',
    },
    {
      key: 'C10.4',
      de: 'Bösartige Neubildung: Kiemengang',
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
      key: 'C10.2',
      de: 'Bösartige Neubildung: Seitenwand des Oropharynx',
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
      key: 'C12',
      de: 'Bösartige Neubildung des Recessus piriformis',
      en: '',
    },
    {
      key: 'C03.0',
      de: 'Bösartige Neubildung: Oberkieferzahnfleisch',
      en: '',
    },
    {
      key: 'C03.1',
      de: 'Bösartige Neubildung: Unterkieferzahnfleisch',
      en: '',
    },
    {
      key: 'C03.9',
      de: 'Bösartige Neubildung: Zahnfleisch, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C01',
      de: 'Bösartige Neubildung des Zungengrundes',
      en: '',
    },
    {
      key: 'C02.3',
      de: 'Bösartige Neubildung: Vordere zwei Drittel der Zunge, Bereich nicht näher bezeichnet',
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
      key: 'C02.1',
      de: 'Bösartige Neubildung: Zungenrand',
      en: '',
    },
    {
      key: 'C02.0',
      de: 'Bösartige Neubildung: Zungenrücken',
      en: '',
    },
    {
      key: 'C02.4',
      de: 'Bösartige Neubildung: Zungentonsille',
      en: '',
    },
    {
      key: 'C02.2',
      de: 'Bösartige Neubildung: Zungenunterfläche',
      en: '',
    },
    {
      key: 'C06.9',
      de: 'Bösartige Neubildung: Mund, nicht näher bezeichnet',
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
      key: 'C06.1',
      de: 'Bösartige Neubildung: Vestibulum oris',
      en: '',
    },
    {
      key: 'C06.0',
      de: 'Bösartige Neubildung: Wangenschleimhaut',
      en: '',
    },
    {
      key: 'C08.1',
      de: 'Bösartige Neubildung: Glandula sublingualis',
      en: '',
    },
    {
      key: 'C08.0',
      de: 'Bösartige Neubildung: Glandula submandibularis',
      en: '',
    },
    {
      key: 'C08.9',
      de: 'Bösartige Neubildung: Große Speicheldrüse, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C08.8',
      de: 'Bösartige Neubildung: Große Speicheldrüsen, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C14.8',
      de: 'Bösartige Neubildung: Lippe, Mundhöhle und Pharynx, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C14.2',
      de: 'Bösartige Neubildung: Lymphatischer Rachenring [Waldeyer]',
      en: '',
    },
    {
      key: 'C14.0',
      de: 'Bösartige Neubildung: Pharynx, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C74.9',
      de: 'Bösartige Neubildung: Nebenniere, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C74.1',
      de: 'Bösartige Neubildung: Nebennierenmark',
      en: '',
    },
    {
      key: 'C74.0',
      de: 'Bösartige Neubildung: Nebennierenrinde',
      en: '',
    },
    {
      key: 'C73',
      de: 'Bösartige Neubildung der Schilddrüse',
      en: '',
    },
    {
      key: 'C75.8',
      de: 'Bösartige Neubildung: Beteiligung mehrerer endokriner Drüsen, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C75.2',
      de: 'Bösartige Neubildung: Ductus craniopharyngealis',
      en: '',
    },
    {
      key: 'C75.9',
      de: 'Bösartige Neubildung: Endokrine Drüse, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C75.3',
      de: 'Bösartige Neubildung: Epiphyse [Glandula pinealis] [Zirbeldrüse]',
      en: '',
    },
    {
      key: 'C75.5',
      de: 'Bösartige Neubildung: Glomus aorticum und sonstige Paraganglien',
      en: '',
    },
    {
      key: 'C75.4',
      de: 'Bösartige Neubildung: Glomus caroticum',
      en: '',
    },
    {
      key: 'C75.1',
      de: 'Bösartige Neubildung: Hypophyse',
      en: '',
    },
    {
      key: 'C75.0',
      de: 'Bösartige Neubildung: Nebenschilddrüse',
      en: '',
    },
    {
      key: 'C19',
      de: 'Bösartige Neubildung am Rektosigmoid, Übergang',
      en: '',
    },
    {
      key: 'C23',
      de: 'Bösartige Neubildung der Gallenblase',
      en: '',
    },
    {
      key: 'C22.3',
      de: 'Angiosarkom der Leber',
      en: '',
    },
    {
      key: 'C22.9',
      de: 'Bösartige Neubildung: Leber, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C22.2',
      de: 'Hepatoblastom',
      en: '',
    },
    {
      key: 'C22.1',
      de: 'Intrahepatisches Gallengangskarzinom',
      en: '',
    },
    {
      key: 'C22.0',
      de: 'Leberzellkarzinom',
      en: '',
    },
    {
      key: 'C22.4',
      de: 'Sonstige Sarkome der Leber',
      en: '',
    },
    {
      key: 'C22.7',
      de: 'Sonstige näher bezeichnete Karzinome der Leber',
      en: '',
    },
    {
      key: 'C21.1',
      de: 'Bösartige Neubildung: Analkanal',
      en: '',
    },
    {
      key: 'C21.0',
      de: 'Bösartige Neubildung: Anus, nicht näher bezeichnet',
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
      key: 'C17.0',
      de: 'Bösartige Neubildung: Duodenum',
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
      key: 'C17.2',
      de: 'Bösartige Neubildung: Ileum',
      en: '',
    },
    {
      key: 'C17.1',
      de: 'Bösartige Neubildung: Jejunum',
      en: '',
    },
    {
      key: 'C17.3',
      de: 'Bösartige Neubildung: Meckel-Divertikel',
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
      key: 'C18.4',
      de: 'Bösartige Neubildung: Colon transversum',
      en: '',
    },
    {
      key: 'C18.3',
      de: 'Bösartige Neubildung: Flexura coli dextra [hepatica]',
      en: '',
    },
    {
      key: 'C18.5',
      de: 'Bösartige Neubildung: Flexura coli sinistra [lienalis]',
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
      key: 'C18.0',
      de: 'Bösartige Neubildung: Zäkum',
      en: '',
    },
    {
      key: 'C16.3',
      de: 'Bösartige Neubildung: Antrum pyloricum',
      en: '',
    },
    {
      key: 'C16.2',
      de: 'Bösartige Neubildung: Corpus ventriculi',
      en: '',
    },
    {
      key: 'C16.1',
      de: 'Bösartige Neubildung: Fundus ventriculi',
      en: '',
    },
    {
      key: 'C16.6',
      de: 'Bösartige Neubildung: Große Kurvatur des Magens, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C16.0',
      de: 'Bösartige Neubildung: Kardia',
      en: '',
    },
    {
      key: 'C16.5',
      de: 'Bösartige Neubildung: Kleine Kurvatur des Magens, nicht näher bezeichnet',
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
      key: 'C16.4',
      de: 'Bösartige Neubildung: Pylorus',
      en: '',
    },
    {
      key: 'C25.3',
      de: 'Bösartige Neubildung: Ductus pancreaticus',
      en: '',
    },
    {
      key: 'C25.4',
      de: 'Bösartige Neubildung: Endokriner Drüsenanteil des Pankreas',
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
      key: 'C25.7',
      de: 'Bösartige Neubildung: Sonstige Teile des Pankreas',
      en: '',
    },
    {
      key: 'C20',
      de: 'Bösartige Neubildung des Rektums',
      en: '',
    },
    {
      key: 'C15.2',
      de: 'Bösartige Neubildung: Abdominaler Ösophagus',
      en: '',
    },
    {
      key: 'C15.1',
      de: 'Bösartige Neubildung: Thorakaler Ösophagus',
      en: '',
    },
    {
      key: 'C15.0',
      de: 'Bösartige Neubildung: Zervikaler Ösophagus',
      en: '',
    },
    {
      key: 'C15.8',
      de: 'Bösartige Neubildung: Ösophagus, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C15.4',
      de: 'Bösartige Neubildung: Ösophagus, mittleres Drittel',
      en: '',
    },
    {
      key: 'C15.9',
      de: 'Bösartige Neubildung: Ösophagus, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C15.3',
      de: 'Bösartige Neubildung: Ösophagus, oberes Drittel',
      en: '',
    },
    {
      key: 'C15.5',
      de: 'Bösartige Neubildung: Ösophagus, unteres Drittel',
      en: '',
    },
    {
      key: 'C24.1',
      de: 'Bösartige Neubildung: Ampulla hepatopancreatica [Ampulla Vateri]',
      en: '',
    },
    {
      key: 'C24.0',
      de: 'Bösartige Neubildung: Extrahepatischer Gallengang',
      en: '',
    },
    {
      key: 'C24.8',
      de: 'Bösartige Neubildung: Gallenwege, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C24.9',
      de: 'Bösartige Neubildung: Gallenwege, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C26.0',
      de: 'Bösartige Neubildung: Intestinaltrakt, Teil nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C26.1',
      de: 'Bösartige Neubildung: Milz',
      en: '',
    },
    {
      key: 'C26.9',
      de: 'Bösartige Neubildung: Ungenau bezeichnete Lokalisationen des Verdauungssystems',
      en: '',
    },
    {
      key: 'C26.8',
      de: 'Bösartige Neubildung: Verdauungssystem, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C61',
      de: 'Bösartige Neubildung der Prostata',
      en: '',
    },
    {
      key: 'C62.1',
      de: 'Bösartige Neubildung: Deszendierter Hoden',
      en: '',
    },
    {
      key: 'C62.0',
      de: 'Bösartige Neubildung: Dystoper Hoden',
      en: '',
    },
    {
      key: 'C62.9',
      de: 'Bösartige Neubildung: Hoden, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C60.1',
      de: 'Bösartige Neubildung: Glans penis',
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
      key: 'C60.2',
      de: 'Bösartige Neubildung: Penisschaft',
      en: '',
    },
    {
      key: 'C60.0',
      de: 'Bösartige Neubildung: Praeputium penis',
      en: '',
    },
    {
      key: 'C63.8',
      de: 'Bösartige Neubildung: Männliche Genitalorgane, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C63.9',
      de: 'Bösartige Neubildung: Männliches Genitalorgan, nicht näher bezeichnet',
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
      key: 'C63.7',
      de: 'Bösartige Neubildung: Sonstige näher bezeichnete männliche Genitalorgane',
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
      key: 'C53.1',
      de: 'Bösartige Neubildung: Ektozervix',
      en: '',
    },
    {
      key: 'C53.0',
      de: 'Bösartige Neubildung: Endozervix',
      en: '',
    },
    {
      key: 'C58',
      de: 'Bösartige Neubildung der Plazenta',
      en: '',
    },
    {
      key: 'C52',
      de: 'Bösartige Neubildung der Vagina',
      en: '',
    },
    {
      key: 'C51.2',
      de: 'Bösartige Neubildung der Vulva: Klitoris',
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
      key: 'C54.1',
      de: 'Bösartige Neubildung: Endometrium',
      en: '',
    },
    {
      key: 'C54.3',
      de: 'Bösartige Neubildung: Fundus uteri',
      en: '',
    },
    {
      key: 'C54.0',
      de: 'Bösartige Neubildung: Isthmus uteri',
      en: '',
    },
    {
      key: 'C54.2',
      de: 'Bösartige Neubildung: Myometrium',
      en: '',
    },
    {
      key: 'C56',
      de: 'Bösartige Neubildung des Ovars',
      en: '',
    },
    {
      key: 'C55',
      de: 'Bösartige Neubildung des Uterus, Teil nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C57.1',
      de: 'Bösartige Neubildung: Lig. latum uteri',
      en: '',
    },
    {
      key: 'C57.2',
      de: 'Bösartige Neubildung: Lig. teres uteri',
      en: '',
    },
    {
      key: 'C57.3',
      de: 'Bösartige Neubildung: Parametrium',
      en: '',
    },
    {
      key: 'C57.7',
      de: 'Bösartige Neubildung: Sonstige näher bezeichnete weibliche Genitalorgane',
      en: '',
    },
    {
      key: 'C57.0',
      de: 'Bösartige Neubildung: Tuba uterina [Falloppio]',
      en: '',
    },
    {
      key: 'C57.4',
      de: 'Bösartige Neubildung: Uterine Adnexe, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C57.8',
      de: 'Bösartige Neubildung: Weibliche Genitalorgane, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C57.9',
      de: 'Bösartige Neubildung: Weibliches Genitalorgan, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C70.0',
      de: 'Bösartige Neubildung: Hirnhäute',
      en: '',
    },
    {
      key: 'C70.9',
      de: 'Bösartige Neubildung: Meningen, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C70.1',
      de: 'Bösartige Neubildung: Rückenmarkhäute',
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
      key: 'C69.3',
      de: 'Bösartige Neubildung: Chorioidea',
      en: '',
    },
    {
      key: 'C69.0',
      de: 'Bösartige Neubildung: Konjunktiva',
      en: '',
    },
    {
      key: 'C69.1',
      de: 'Bösartige Neubildung: Kornea',
      en: '',
    },
    {
      key: 'C69.6',
      de: 'Bösartige Neubildung: Orbita',
      en: '',
    },
    {
      key: 'C69.2',
      de: 'Bösartige Neubildung: Retina',
      en: '',
    },
    {
      key: 'C69.5',
      de: 'Bösartige Neubildung: Tränendrüse und Tränenwege',
      en: '',
    },
    {
      key: 'C69.4',
      de: 'Bösartige Neubildung: Ziliarkörper',
      en: '',
    },
    {
      key: 'C71.1',
      de: 'Bösartige Neubildung: Frontallappen',
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
      key: 'C71.7',
      de: 'Bösartige Neubildung: Hirnstamm',
      en: '',
    },
    {
      key: 'C71.5',
      de: 'Bösartige Neubildung: Hirnventrikel',
      en: '',
    },
    {
      key: 'C71.4',
      de: 'Bösartige Neubildung: Okzipitallappen',
      en: '',
    },
    {
      key: 'C71.3',
      de: 'Bösartige Neubildung: Parietallappen',
      en: '',
    },
    {
      key: 'C71.2',
      de: 'Bösartige Neubildung: Temporallappen',
      en: '',
    },
    {
      key: 'C71.6',
      de: 'Bösartige Neubildung: Zerebellum',
      en: '',
    },
    {
      key: 'C71.0',
      de: 'Bösartige Neubildung: Zerebrum, ausgenommen Hirnlappen und Ventrikel',
      en: '',
    },
    {
      key: 'C72.1',
      de: 'Bösartige Neubildung: Cauda equina',
      en: '',
    },
    {
      key: 'C72.8',
      de: 'Bösartige Neubildung: Gehirn und andere Teile des Zentralnervensystems, mehrere Teilbereiche überlappend',
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
      key: 'C72.2',
      de: 'Bösartige Neubildung: Nn. olfactorii [I. Hirnnerv]',
      en: '',
    },
    {
      key: 'C72.0',
      de: 'Bösartige Neubildung: Rückenmark',
      en: '',
    },
    {
      key: 'C72.5',
      de: 'Bösartige Neubildung: Sonstige und nicht näher bezeichnete Hirnnerven',
      en: '',
    },
    {
      key: 'C72.9',
      de: 'Bösartige Neubildung: Zentralnervensystem, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C40.1',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Kurze Knochen der oberen Extremität',
      en: '',
    },
    {
      key: 'C40.3',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Kurze Knochen der unteren Extremität',
      en: '',
    },
    {
      key: 'C40.2',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Lange Knochen der unteren Extremität',
      en: '',
    },
    {
      key: 'C40.0',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Skapula und lange Knochen der oberen Extremität',
      en: '',
    },
    {
      key: 'C40.8',
      de: 'Bösartige Neubildung: Knochen und Gelenkknorpel der Extremitäten, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C40.9',
      de: 'Bösartige Neubildung: Knochen und Gelenkknorpel einer Extremität, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C41.4',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Beckenknochen',
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
      key: 'C41.32',
      de: 'Bösartige Neubildung des Knochens und des Gelenkknorpels: Klavikula',
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
      key: 'C47.0',
      de: 'Bösartige Neubildung: Periphere Nerven des Kopfes, des Gesichtes und des Halses',
      en: '',
    },
    {
      key: 'C47.6',
      de: 'Bösartige Neubildung: Periphere Nerven des Rumpfes, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C47.3',
      de: 'Bösartige Neubildung: Periphere Nerven des Thorax',
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
      key: 'C48.1',
      de: 'Bösartige Neubildung: Näher bezeichnete Teile des Peritoneums',
      en: '',
    },
    {
      key: 'C48.2',
      de: 'Bösartige Neubildung: Peritoneum, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C48.0',
      de: 'Bösartige Neubildung: Retroperitoneum',
      en: '',
    },
    {
      key: 'C48.8',
      de: 'Bösartige Neubildung: Retroperitoneum und Peritoneum, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C49.1',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe der oberen Extremität, einschließlich Schulter',
      en: '',
    },
    {
      key: 'C49.2',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe der unteren Extremität, einschließlich Hüfte',
      en: '',
    },
    {
      key: 'C49.4',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe des Abdomens',
      en: '',
    },
    {
      key: 'C49.5',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe des Beckens',
      en: '',
    },
    {
      key: 'C49.0',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe des Kopfes, des Gesichtes und des Halses',
      en: '',
    },
    {
      key: 'C49.6',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe des Rumpfes, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C49.3',
      de: 'Bösartige Neubildung: Bindegewebe und andere Weichteilgewebe des Thorax',
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
      key: 'C46.0',
      de: 'Kaposi-Sarkom der Haut',
      en: '',
    },
    {
      key: 'C46.3',
      de: 'Kaposi-Sarkom der Lymphknoten',
      en: '',
    },
    {
      key: 'C46.2',
      de: 'Kaposi-Sarkom des Gaumens',
      en: '',
    },
    {
      key: 'C46.1',
      de: 'Kaposi-Sarkom des Weichteilgewebes',
      en: '',
    },
    {
      key: 'C46.8',
      de: 'Kaposi-Sarkom mehrerer Organe',
      en: '',
    },
    {
      key: 'C46.7',
      de: 'Kaposi-Sarkom sonstiger Lokalisationen',
      en: '',
    },
    {
      key: 'C46.9',
      de: 'Kaposi-Sarkom, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C45.0',
      de: 'Mesotheliom der Pleura',
      en: '',
    },
    {
      key: 'C45.2',
      de: 'Mesotheliom des Perikards',
      en: '',
    },
    {
      key: 'C45.1',
      de: 'Mesotheliom des Peritoneums',
      en: '',
    },
    {
      key: 'C45.7',
      de: 'Mesotheliom sonstiger Lokalisationen',
      en: '',
    },
    {
      key: 'C45.9',
      de: 'Mesotheliom, nicht näher bezeichnet',
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
      key: 'C43.0',
      de: 'Bösartiges Melanom der Lippe',
      en: '',
    },
    {
      key: 'C43.4',
      de: 'Bösartiges Melanom der behaarten Kopfhaut und des Halses',
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
      key: 'C43.5',
      de: 'Bösartiges Melanom des Rumpfes',
      en: '',
    },
    {
      key: 'C43.3',
      de: 'Bösartiges Melanom sonstiger und nicht näher bezeichneter Teile des Gesichtes',
      en: '',
    },
    {
      key: 'C44.9',
      de: 'Bösartige Neubildung der Haut, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C44.4',
      de: 'Sonstige bösartige Neubildungen: Behaarte Kopfhaut und Haut des Halses',
      en: '',
    },
    {
      key: 'C44.6',
      de: 'Sonstige bösartige Neubildungen: Haut der oberen Extremität, einschließlich Schulter',
      en: '',
    },
    {
      key: 'C44.7',
      de: 'Sonstige bösartige Neubildungen: Haut der unteren Extremität, einschließlich Hüfte',
      en: '',
    },
    {
      key: 'C44.1',
      de: 'Sonstige bösartige Neubildungen: Haut des Augenlides, einschließlich Kanthus',
      en: '',
    },
    {
      key: 'C44.2',
      de: 'Sonstige bösartige Neubildungen: Haut des Ohres und des äußeren Gehörganges',
      en: '',
    },
    {
      key: 'C44.5',
      de: 'Sonstige bösartige Neubildungen: Haut des Rumpfes',
      en: '',
    },
    {
      key: 'C44.3',
      de: 'Sonstige bösartige Neubildungen: Haut sonstiger und nicht näher bezeichneter Teile des Gesichtes',
      en: '',
    },
    {
      key: 'C44.8',
      de: 'Sonstige bösartige Neubildungen: Haut, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C44.0',
      de: 'Sonstige bösartige Neubildungen: Lippenhaut',
      en: '',
    },
    {
      key: 'C88.91',
      de: 'Bösartige immunproliferative Krankheit, nicht näher bezeichnet: In kompletter Remission',
      en: '',
    },
    {
      key: 'C88.90',
      de: 'Bösartige immunproliferative Krankheit, nicht näher bezeichnet: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C88.41',
      de: 'Extranodales Marginalzonen-B-Zell-Lymphom des Mukosa-assoziierten lymphatischen Gewebes [MALT-Lymphom]: In kompletter Remission',
      en: '',
    },
    {
      key: 'C88.40',
      de: 'Extranodales Marginalzonen-B-Zell-Lymphom des Mukosa-assoziierten lymphatischen Gewebes [MALT-Lymphom]: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C88.31',
      de: 'Immunproliferative Dünndarmkrankheit: In kompletter Remission',
      en: '',
    },
    {
      key: 'C88.30',
      de: 'Immunproliferative Dünndarmkrankheit: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C88.01',
      de: 'Makroglobulinämie Waldenström: In kompletter Remission',
      en: '',
    },
    {
      key: 'C88.00',
      de: 'Makroglobulinämie Waldenström: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C88.21',
      de: 'Sonstige Schwerkettenkrankheit: In kompletter Remission',
      en: '',
    },
    {
      key: 'C88.20',
      de: 'Sonstige Schwerkettenkrankheit: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C88.71',
      de: 'Sonstige bösartige immunproliferative Krankheiten: In kompletter Remission',
      en: '',
    },
    {
      key: 'C88.70',
      de: 'Sonstige bösartige immunproliferative Krankheiten: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C82.5',
      de: 'Diffuses Follikelzentrumslymphom',
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
      key: 'C82.9',
      de: 'Follikuläres Lymphom, nicht näher bezeichnet',
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
      key: 'C81.2',
      de: 'Gemischtzelliges (klassisches) Hodgkin-Lymphom',
      en: '',
    },
    {
      key: 'C81.9',
      de: 'Hodgkin-Lymphom, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C81.3',
      de: 'Lymphozytenarmes (klassisches) Hodgkin-Lymphom',
      en: '',
    },
    {
      key: 'C81.4',
      de: 'Lymphozytenreiches (klassisches) Hodgkin-Lymphom',
      en: '',
    },
    {
      key: 'C81.1',
      de: 'Nodulär-sklerosierendes (klassisches) Hodgkin-Lymphom',
      en: '',
    },
    {
      key: 'C81.0',
      de: 'Noduläres lymphozytenprädominantes Hodgkin-Lymphom',
      en: '',
    },
    {
      key: 'C81.7',
      de: 'Sonstige Typen des (klassischen) Hodgkin-Lymphoms',
      en: '',
    },
    {
      key: 'C95.01',
      de: 'Akute Leukämie nicht näher bezeichneten Zelltyps: In kompletter Remission',
      en: '',
    },
    {
      key: 'C95.00',
      de: 'Akute Leukämie nicht näher bezeichneten Zelltyps: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C95.11',
      de: 'Chronische Leukämie nicht näher bezeichneten Zelltyps: In kompletter Remission',
      en: '',
    },
    {
      key: 'C95.10',
      de: 'Chronische Leukämie nicht näher bezeichneten Zelltyps: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C95.91',
      de: 'Leukämie, nicht näher bezeichnet: In kompletter Remission',
      en: '',
    },
    {
      key: 'C95.90',
      de: 'Leukämie, nicht näher bezeichnet: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C95.8',
      de: 'Leukämie, refraktär auf Standard-Induktionstherapie',
      en: '',
    },
    {
      key: 'C95.71',
      de: 'Sonstige Leukämie nicht näher bezeichneten Zelltyps: In kompletter Remission',
      en: '',
    },
    {
      key: 'C95.70',
      de: 'Sonstige Leukämie nicht näher bezeichneten Zelltyps: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C91.51',
      de: 'Adulte(s) T-Zell-Lymphom/Leukämie (HTLV-1-assoziiert): In kompletter Remission',
      en: '',
    },
    {
      key: 'C91.50',
      de: 'Adulte(s) T-Zell-Lymphom/Leukämie (HTLV-1-assoziiert): Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C91.01',
      de: 'Akute lymphatische Leukämie [ALL]: In kompletter Remission',
      en: '',
    },
    {
      key: 'C91.00',
      de: 'Akute lymphatische Leukämie [ALL]: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C91.11',
      de: 'Chronische lymphatische Leukämie vom B-Zell-Typ [CLL]: In kompletter Remission',
      en: '',
    },
    {
      key: 'C91.10',
      de: 'Chronische lymphatische Leukämie vom B-Zell-Typ [CLL]: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C91.41',
      de: 'Haarzellenleukämie: In kompletter Remission',
      en: '',
    },
    {
      key: 'C91.40',
      de: 'Haarzellenleukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C91.91',
      de: 'Lymphatische Leukämie, nicht näher bezeichnet: In kompletter Remission',
      en: '',
    },
    {
      key: 'C91.90',
      de: 'Lymphatische Leukämie, nicht näher bezeichnet: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C91.61',
      de: 'Prolymphozyten-Leukämie vom T-Zell-Typ: In kompletter Remission',
      en: '',
    },
    {
      key: 'C91.60',
      de: 'Prolymphozyten-Leukämie vom T-Zell-Typ: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C91.31',
      de: 'Prolymphozytäre Leukämie vom B-Zell-Typ: In kompletter Remission',
      en: '',
    },
    {
      key: 'C91.30',
      de: 'Prolymphozytäre Leukämie vom B-Zell-Typ: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C91.81',
      de: 'Reifzellige B-ALL vom Burkitt-Typ: In kompletter Remission',
      en: '',
    },
    {
      key: 'C91.80',
      de: 'Reifzellige B-ALL vom Burkitt-Typ: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C91.71',
      de: 'Sonstige lymphatische Leukämie: In kompletter Remission',
      en: '',
    },
    {
      key: 'C91.70',
      de: 'Sonstige lymphatische Leukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C93.01',
      de: 'Akute Monoblasten-/Monozytenleukämie: In kompletter Remission',
      en: '',
    },
    {
      key: 'C93.00',
      de: 'Akute Monoblasten-/Monozytenleukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C93.11',
      de: 'Chronische myelomonozytäre Leukämie: In kompletter Remission',
      en: '',
    },
    {
      key: 'C93.10',
      de: 'Chronische myelomonozytäre Leukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C93.31',
      de: 'Juvenile myelomonozytäre Leukämie: In kompletter Remission',
      en: '',
    },
    {
      key: 'C93.30',
      de: 'Juvenile myelomonozytäre Leukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C93.91',
      de: 'Monozytenleukämie, nicht näher bezeichnet: In kompletter Remission',
      en: '',
    },
    {
      key: 'C93.90',
      de: 'Monozytenleukämie, nicht näher bezeichnet: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C93.71',
      de: 'Sonstige Monozytenleukämie: In kompletter Remission',
      en: '',
    },
    {
      key: 'C93.70',
      de: 'Sonstige Monozytenleukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.41',
      de: 'Akute Promyelozyten-Leukämie [PCL]: In kompletter Remission',
      en: '',
    },
    {
      key: 'C92.40',
      de: 'Akute Promyelozyten-Leukämie [PCL]: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.01',
      de: 'Akute myeloblastische Leukämie [AML]: In kompletter Remission',
      en: '',
    },
    {
      key: 'C92.00',
      de: 'Akute myeloblastische Leukämie [AML]: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.61',
      de: 'Akute myeloische Leukämie mit 11q23-Abnormität: In kompletter Remission',
      en: '',
    },
    {
      key: 'C92.60',
      de: 'Akute myeloische Leukämie mit 11q23-Abnormität: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.81',
      de: 'Akute myeloische Leukämie mit multilineärer Dysplasie: In kompletter Remission',
      en: '',
    },
    {
      key: 'C92.80',
      de: 'Akute myeloische Leukämie mit multilineärer Dysplasie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.51',
      de: 'Akute myelomonozytäre Leukämie: In kompletter Remission',
      en: '',
    },
    {
      key: 'C92.50',
      de: 'Akute myelomonozytäre Leukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.21',
      de: 'Atypische chronische myeloische Leukämie, BCR/ABL-negativ: In kompletter Remission',
      en: '',
    },
    {
      key: 'C92.20',
      de: 'Atypische chronische myeloische Leukämie, BCR/ABL-negativ: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.11',
      de: 'Chronische myeloische Leukämie [CML], BCR/ABL-positiv: In kompletter Remission',
      en: '',
    },
    {
      key: 'C92.10',
      de: 'Chronische myeloische Leukämie [CML], BCR/ABL-positiv: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.91',
      de: 'Myeloische Leukämie, nicht näher bezeichnet: In kompletter Remission',
      en: '',
    },
    {
      key: 'C92.90',
      de: 'Myeloische Leukämie, nicht näher bezeichnet: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.31',
      de: 'Myelosarkom: In kompletter Remission',
      en: '',
    },
    {
      key: 'C92.30',
      de: 'Myelosarkom: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C92.71',
      de: 'Sonstige myeloische Leukämie: In kompletter Remission',
      en: '',
    },
    {
      key: 'C92.70',
      de: 'Sonstige myeloische Leukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C83.7',
      de: 'Burkitt-Lymphom',
      en: '',
    },
    {
      key: 'C83.3',
      de: 'Diffuses großzelliges B-Zell-Lymphom',
      en: '',
    },
    {
      key: 'C83.0',
      de: 'Kleinzelliges B-Zell-Lymphom',
      en: '',
    },
    {
      key: 'C83.5',
      de: 'Lymphoblastisches Lymphom',
      en: '',
    },
    {
      key: 'C83.1',
      de: 'Mantelzell-Lymphom',
      en: '',
    },
    {
      key: 'C83.9',
      de: 'Nicht follikuläres Lymphom, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C83.8',
      de: 'Sonstige nicht follikuläre Lymphome',
      en: '',
    },
    {
      key: 'C90.21',
      de: 'Extramedulläres Plasmozytom: In kompletter Remission',
      en: '',
    },
    {
      key: 'C90.20',
      de: 'Extramedulläres Plasmozytom: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C90.01',
      de: 'Multiples Myelom: In kompletter Remission',
      en: '',
    },
    {
      key: 'C90.00',
      de: 'Multiples Myelom: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C90.11',
      de: 'Plasmazellenleukämie: In kompletter Remission',
      en: '',
    },
    {
      key: 'C90.10',
      de: 'Plasmazellenleukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C90.31',
      de: 'Solitäres Plasmozytom: In kompletter Remission',
      en: '',
    },
    {
      key: 'C90.30',
      de: 'Solitäres Plasmozytom: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C84.7',
      de: 'Anaplastisches großzelliges Lymphom, ALK-negativ',
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
      key: 'C84.0',
      de: 'Mycosis fungoides',
      en: '',
    },
    {
      key: 'C84.4',
      de: 'Peripheres T-Zell-Lymphom, nicht spezifiziert',
      en: '',
    },
    {
      key: 'C84.9',
      de: 'Reifzelliges T/NK-Zell-Lymphom, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C84.5',
      de: 'Sonstige reifzellige T/NK-Zell-Lymphome',
      en: '',
    },
    {
      key: 'C84.1',
      de: 'Sézary-Syndrom',
      en: '',
    },
    {
      key: 'C94.01',
      de: 'Akute Erythroleukämie: In kompletter Remission',
      en: '',
    },
    {
      key: 'C94.00',
      de: 'Akute Erythroleukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C94.21',
      de: 'Akute Megakaryoblastenleukämie: In kompletter Remission',
      en: '',
    },
    {
      key: 'C94.20',
      de: 'Akute Megakaryoblastenleukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C94.41',
      de: 'Akute Panmyelose mit Myelofibrose: In kompletter Remission',
      en: '',
    },
    {
      key: 'C94.40',
      de: 'Akute Panmyelose mit Myelofibrose: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C94.8',
      de: 'Blastenkrise bei chronischer myeloischer Leukämie [CML]',
      en: '',
    },
    {
      key: 'C94.31',
      de: 'Mastzellenleukämie: In kompletter Remission',
      en: '',
    },
    {
      key: 'C94.30',
      de: 'Mastzellenleukämie: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C94.61',
      de: 'Myelodysplastische und myeloproliferative Krankheit, nicht klassifizierbar: In kompletter Remission',
      en: '',
    },
    {
      key: 'C94.60',
      de: 'Myelodysplastische und myeloproliferative Krankheit, nicht klassifizierbar: Ohne Angabe einer kompletten Remission',
      en: '',
    },
    {
      key: 'C94.71',
      de: 'Sonstige näher bezeichnete Leukämien: In kompletter Remission',
      en: '',
    },
    {
      key: 'C94.70',
      de: 'Sonstige näher bezeichnete Leukämien: Ohne Angabe einer kompletten Remission',
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
      key: 'C85.9',
      de: 'Non-Hodgkin-Lymphom, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C85.7',
      de: 'Sonstige näher bezeichnete Typen des Non-Hodgkin-Lymphoms',
      en: '',
    },
    {
      key: 'C96.9',
      de: 'Bösartige Neubildung des lymphatischen, blutbildenden und verwandten Gewebes, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C96.2',
      de: 'Bösartiger Mastzelltumor',
      en: '',
    },
    {
      key: 'C96.8',
      de: 'Histiozytisches Sarkom',
      en: '',
    },
    {
      key: 'C96.0',
      de: 'Multifokale und multisystemische (disseminierte) Langerhans-Zell-Histiozytose [Abt-Letterer-Siwe-Krankheit]',
      en: '',
    },
    {
      key: 'C96.5',
      de: 'Multifokale und unisystemische Langerhans-Zell-Histiozytose',
      en: '',
    },
    {
      key: 'C96.4',
      de: 'Sarkom der dendritischen Zellen (akzessorische Zellen)',
      en: '',
    },
    {
      key: 'C96.7',
      de: 'Sonstige näher bezeichnete bösartige Neubildungen des lymphatischen, blutbildenden und verwandten Gewebes',
      en: '',
    },
    {
      key: 'C96.6',
      de: 'Unifokale Langerhans-Zell-Histiozytose',
      en: '',
    },
    {
      key: 'C86.5',
      de: 'Angioimmunoblastisches T-Zell-Lymphom',
      en: '',
    },
    {
      key: 'C86.4',
      de: 'Blastisches NK-Zell-Lymphom',
      en: '',
    },
    {
      key: 'C86.0',
      de: 'Extranodales NK/T-Zell-Lymphom, nasaler Typ',
      en: '',
    },
    {
      key: 'C86.1',
      de: 'Hepatosplenisches T-Zell-Lymphom',
      en: '',
    },
    {
      key: 'C86.6',
      de: 'Primäre kutane CD30-positive T-Zell-Proliferationen',
      en: '',
    },
    {
      key: 'C86.3',
      de: 'Subkutanes pannikulitisches T-Zell-Lymphom',
      en: '',
    },
    {
      key: 'C86.2',
      de: 'T-Zell-Lymphom vom Enteropathie-Typ',
      en: '',
    },
    {
      key: 'C80.9',
      de: 'Bösartige Neubildung, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'C80.0',
      de: 'Bösartige Neubildung, primäre Lokalisation unbekannt, so bezeichnet',
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
      key: 'C76.0',
      de: 'Bösartige Neubildung ungenau bezeichneter Lokalisationen: Kopf, Gesicht und Hals',
      en: '',
    },
    {
      key: 'C76.4',
      de: 'Bösartige Neubildung ungenau bezeichneter Lokalisationen: Obere Extremität',
      en: '',
    },
    {
      key: 'C76.1',
      de: 'Bösartige Neubildung ungenau bezeichneter Lokalisationen: Thorax',
      en: '',
    },
    {
      key: 'C76.5',
      de: 'Bösartige Neubildung ungenau bezeichneter Lokalisationen: Untere Extremität',
      en: '',
    },
    {
      key: 'C76.8',
      de: 'Bösartige Neubildung: Sonstige und ungenau bezeichnete Lokalisationen, mehrere Teilbereiche überlappend',
      en: '',
    },
    {
      key: 'C76.7',
      de: 'Bösartige Neubildung: Sonstige ungenau bezeichnete Lokalisationen',
      en: '',
    },
    {
      key: 'C79.1',
      de: 'Sekundäre bösartige Neubildung der Harnblase sowie sonstiger und nicht näher bezeichneter Harnorgane',
      en: '',
    },
    {
      key: 'C79.2',
      de: 'Sekundäre bösartige Neubildung der Haut',
      en: '',
    },
    {
      key: 'C79.7',
      de: 'Sekundäre bösartige Neubildung der Nebenniere',
      en: '',
    },
    {
      key: 'C79.0',
      de: 'Sekundäre bösartige Neubildung der Niere und des Nierenbeckens',
      en: '',
    },
    {
      key: 'C79.3',
      de: 'Sekundäre bösartige Neubildung des Gehirns und der Hirnhäute',
      en: '',
    },
    {
      key: 'C79.5',
      de: 'Sekundäre bösartige Neubildung des Knochens und des Knochenmarkes',
      en: '',
    },
    {
      key: 'C79.6',
      de: 'Sekundäre bösartige Neubildung des Ovars',
      en: '',
    },
    {
      key: 'C79.9',
      de: 'Sekundäre bösartige Neubildung nicht näher bezeichneter Lokalisation',
      en: '',
    },
    {
      key: 'C79.81',
      de: 'Sekundäre bösartige Neubildung der Brustdrüse',
      en: '',
    },
    {
      key: 'C79.82',
      de: 'Sekundäre bösartige Neubildung der Genitalorgane',
      en: '',
    },
    {
      key: 'C79.86',
      de: 'Sekundäre bösartige Neubildung des Bindegewebes und anderer Weichteilgewebe der Extremitäten',
      en: '',
    },
    {
      key: 'C79.85',
      de: 'Sekundäre bösartige Neubildung des Bindegewebes und anderer Weichteilgewebe des Halses',
      en: '',
    },
    {
      key: 'C79.83',
      de: 'Sekundäre bösartige Neubildung des Perikards',
      en: '',
    },
    {
      key: 'C79.88',
      de: 'Sekundäre bösartige Neubildung sonstiger näher bezeichneter Lokalisationen',
      en: '',
    },
    {
      key: 'C79.84',
      de: 'Sonstige sekundäre bösartige Neubildung des Herzens',
      en: '',
    },
    {
      key: 'C79.4',
      de: 'Sekundäre bösartige Neubildung sonstiger und nicht näher bezeichneter Teile des Nervensystems',
      en: '',
    },
    {
      key: 'C78.7',
      de: 'Sekundäre bösartige Neubildung der Leber und der intrahepatischen Gallengänge',
      en: '',
    },
    {
      key: 'C78.0',
      de: 'Sekundäre bösartige Neubildung der Lunge',
      en: '',
    },
    {
      key: 'C78.2',
      de: 'Sekundäre bösartige Neubildung der Pleura',
      en: '',
    },
    {
      key: 'C78.5',
      de: 'Sekundäre bösartige Neubildung des Dickdarmes und des Rektums',
      en: '',
    },
    {
      key: 'C78.4',
      de: 'Sekundäre bösartige Neubildung des Dünndarmes',
      en: '',
    },
    {
      key: 'C78.1',
      de: 'Sekundäre bösartige Neubildung des Mediastinums',
      en: '',
    },
    {
      key: 'C78.6',
      de: 'Sekundäre bösartige Neubildung des Retroperitoneums und des Peritoneums',
      en: '',
    },
    {
      key: 'C78.3',
      de: 'Sekundäre bösartige Neubildung sonstiger und nicht näher bezeichneter Atmungsorgane',
      en: '',
    },
    {
      key: 'C78.8',
      de: 'Sekundäre bösartige Neubildung sonstiger und nicht näher bezeichneter Verdauungsorgane',
      en: '',
    },
    {
      key: 'C77.3',
      de: 'Sekundäre und nicht näher bezeichnete bösartige Neubildung: Axilläre Lymphknoten und Lymphknoten der oberen Extremität',
      en: '',
    },
    {
      key: 'C77.4',
      de: 'Sekundäre und nicht näher bezeichnete bösartige Neubildung: Inguinale Lymphknoten und Lymphknoten der unteren Extremität',
      en: '',
    },
    {
      key: 'C77.2',
      de: 'Sekundäre und nicht näher bezeichnete bösartige Neubildung: Intraabdominale Lymphknoten',
      en: '',
    },
    {
      key: 'C77.5',
      de: 'Sekundäre und nicht näher bezeichnete bösartige Neubildung: Intrapelvine Lymphknoten',
      en: '',
    },
    {
      key: 'C77.1',
      de: 'Sekundäre und nicht näher bezeichnete bösartige Neubildung: Intrathorakale Lymphknoten',
      en: '',
    },
    {
      key: 'C77.0',
      de: 'Sekundäre und nicht näher bezeichnete bösartige Neubildung: Lymphknoten des Kopfes, des Gesichtes und des Halses',
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
      key: 'D36.9',
      de: 'Gutartige Neubildung an nicht näher bezeichneter Lokalisation',
      en: '',
    },
    {
      key: 'D36.0',
      de: 'Gutartige Neubildung: Lymphknoten',
      en: '',
    },
    {
      key: 'D36.1',
      de: 'Gutartige Neubildung: Periphere Nerven und autonomes Nervensystem',
      en: '',
    },
    {
      key: 'D36.7',
      de: 'Gutartige Neubildung: Sonstige näher bezeichnete Lokalisationen',
      en: '',
    },
    {
      key: 'D24',
      de: 'Gutartige Neubildung der Brustdrüse [Mamma]',
      en: '',
    },
    {
      key: 'D30.3',
      de: 'Gutartige Neubildung: Harnblase',
      en: '',
    },
    {
      key: 'D30.9',
      de: 'Gutartige Neubildung: Harnorgan, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D30.0',
      de: 'Gutartige Neubildung: Niere',
      en: '',
    },
    {
      key: 'D30.1',
      de: 'Gutartige Neubildung: Nierenbecken',
      en: '',
    },
    {
      key: 'D30.7',
      de: 'Gutartige Neubildung: Sonstige Harnorgane',
      en: '',
    },
    {
      key: 'D30.2',
      de: 'Gutartige Neubildung: Ureter',
      en: '',
    },
    {
      key: 'D30.4',
      de: 'Gutartige Neubildung: Urethra',
      en: '',
    },
    {
      key: 'D32.0',
      de: 'Gutartige Neubildung: Hirnhäute',
      en: '',
    },
    {
      key: 'D32.9',
      de: 'Gutartige Neubildung: Meningen, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D32.1',
      de: 'Gutartige Neubildung: Rückenmarkhäute',
      en: '',
    },
    {
      key: 'D34',
      de: 'Gutartige Neubildung der Schilddrüse',
      en: '',
    },
    {
      key: 'D11.9',
      de: 'Gutartige Neubildung: Große Speicheldrüse, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D11.0',
      de: 'Gutartige Neubildung: Parotis',
      en: '',
    },
    {
      key: 'D11.7',
      de: 'Gutartige Neubildung: Sonstige große Speicheldrüsen',
      en: '',
    },
    {
      key: 'D29.2',
      de: 'Gutartige Neubildung: Hoden',
      en: '',
    },
    {
      key: 'D29.9',
      de: 'Gutartige Neubildung: Männliches Genitalorgan, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D29.3',
      de: 'Gutartige Neubildung: Nebenhoden',
      en: '',
    },
    {
      key: 'D29.0',
      de: 'Gutartige Neubildung: Penis',
      en: '',
    },
    {
      key: 'D29.1',
      de: 'Gutartige Neubildung: Prostata',
      en: '',
    },
    {
      key: 'D29.4',
      de: 'Gutartige Neubildung: Skrotum',
      en: '',
    },
    {
      key: 'D29.7',
      de: 'Gutartige Neubildung: Sonstige männliche Genitalorgane',
      en: '',
    },
    {
      key: 'D31.9',
      de: 'Gutartige Neubildung: Auge, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D31.3',
      de: 'Gutartige Neubildung: Chorioidea',
      en: '',
    },
    {
      key: 'D31.0',
      de: 'Gutartige Neubildung: Konjunktiva',
      en: '',
    },
    {
      key: 'D31.1',
      de: 'Gutartige Neubildung: Kornea',
      en: '',
    },
    {
      key: 'D31.6',
      de: 'Gutartige Neubildung: Orbita, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D31.2',
      de: 'Gutartige Neubildung: Retina',
      en: '',
    },
    {
      key: 'D31.5',
      de: 'Gutartige Neubildung: Tränendrüse und Tränenwege',
      en: '',
    },
    {
      key: 'D31.4',
      de: 'Gutartige Neubildung: Ziliarkörper',
      en: '',
    },
    {
      key: 'D17.7',
      de: 'Gutartige Neubildung des Fettgewebes an sonstigen Lokalisationen',
      en: '',
    },
    {
      key: 'D17.3',
      de: 'Gutartige Neubildung des Fettgewebes der Haut und der Unterhaut an sonstigen und nicht näher bezeichneten Lokalisationen',
      en: '',
    },
    {
      key: 'D17.2',
      de: 'Gutartige Neubildung des Fettgewebes der Haut und der Unterhaut der Extremitäten',
      en: '',
    },
    {
      key: 'D17.0',
      de: 'Gutartige Neubildung des Fettgewebes der Haut und der Unterhaut des Kopfes, des Gesichtes und des Halses',
      en: '',
    },
    {
      key: 'D17.1',
      de: 'Gutartige Neubildung des Fettgewebes der Haut und der Unterhaut des Rumpfes',
      en: '',
    },
    {
      key: 'D17.5',
      de: 'Gutartige Neubildung des Fettgewebes der intraabdominalen Organe',
      en: '',
    },
    {
      key: 'D17.4',
      de: 'Gutartige Neubildung des Fettgewebes der intrathorakalen Organe',
      en: '',
    },
    {
      key: 'D17.6',
      de: 'Gutartige Neubildung des Fettgewebes des Samenstrangs',
      en: '',
    },
    {
      key: 'D17.9',
      de: 'Gutartige Neubildung des Fettgewebes, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D33.1',
      de: 'Gutartige Neubildung: Gehirn, infratentoriell',
      en: '',
    },
    {
      key: 'D33.2',
      de: 'Gutartige Neubildung: Gehirn, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D33.0',
      de: 'Gutartige Neubildung: Gehirn, supratentoriell',
      en: '',
    },
    {
      key: 'D33.3',
      de: 'Gutartige Neubildung: Hirnnerven',
      en: '',
    },
    {
      key: 'D33.4',
      de: 'Gutartige Neubildung: Rückenmark',
      en: '',
    },
    {
      key: 'D33.7',
      de: 'Gutartige Neubildung: Sonstige näher bezeichnete Teile des Zentralnervensystems',
      en: '',
    },
    {
      key: 'D33.9',
      de: 'Gutartige Neubildung: Zentralnervensystem, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D16.41',
      de: 'Gutartige Neubildung des Knochens und des Gelenkknorpels: Kraniofazial',
      en: '',
    },
    {
      key: 'D16.42',
      de: 'Gutartige Neubildung des Knochens und des Gelenkknorpels: Maxillofazial',
      en: '',
    },
    {
      key: 'D16.8',
      de: 'Gutartige Neubildung des Knochens und des Gelenkknorpels: Knöchernes Becken',
      en: '',
    },
    {
      key: 'D16.1',
      de: 'Gutartige Neubildung des Knochens und des Gelenkknorpels: Kurze Knochen der oberen Extremität',
      en: '',
    },
    {
      key: 'D16.3',
      de: 'Gutartige Neubildung des Knochens und des Gelenkknorpels: Kurze Knochen der unteren Extremität',
      en: '',
    },
    {
      key: 'D16.2',
      de: 'Gutartige Neubildung des Knochens und des Gelenkknorpels: Lange Knochen der unteren Extremität',
      en: '',
    },
    {
      key: 'D16.72',
      de: 'Gutartige Neubildung des Knochens und des Gelenkknorpels: Klavikula',
      en: '',
    },
    {
      key: 'D16.70',
      de: 'Gutartige Neubildung des Knochens und des Gelenkknorpels: Rippen',
      en: '',
    },
    {
      key: 'D16.71',
      de: 'Gutartige Neubildung des Knochens und des Gelenkknorpels: Sternum',
      en: '',
    },
    {
      key: 'D16.0',
      de: 'Gutartige Neubildung des Knochens und des Gelenkknorpels: Skapula und lange Knochen der oberen Extremität',
      en: '',
    },
    {
      key: 'D16.5',
      de: 'Gutartige Neubildung des Knochens und des Gelenkknorpels: Unterkieferknochen',
      en: '',
    },
    {
      key: 'D16.6',
      de: 'Gutartige Neubildung des Knochens und des Gelenkknorpels: Wirbelsäule',
      en: '',
    },
    {
      key: 'D16.9',
      de: 'Gutartige Neubildung: Knochen und Gelenkknorpel, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D12.9',
      de: 'Gutartige Neubildung: Analkanal und Anus',
      en: '',
    },
    {
      key: 'D12.1',
      de: 'Gutartige Neubildung: Appendix vermiformis',
      en: '',
    },
    {
      key: 'D12.2',
      de: 'Gutartige Neubildung: Colon ascendens',
      en: '',
    },
    {
      key: 'D12.4',
      de: 'Gutartige Neubildung: Colon descendens',
      en: '',
    },
    {
      key: 'D12.5',
      de: 'Gutartige Neubildung: Colon sigmoideum',
      en: '',
    },
    {
      key: 'D12.3',
      de: 'Gutartige Neubildung: Colon transversum',
      en: '',
    },
    {
      key: 'D12.6',
      de: 'Gutartige Neubildung: Kolon, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D12.7',
      de: 'Gutartige Neubildung: Rektosigmoid, Übergang',
      en: '',
    },
    {
      key: 'D12.8',
      de: 'Gutartige Neubildung: Rektum',
      en: '',
    },
    {
      key: 'D12.0',
      de: 'Gutartige Neubildung: Zäkum',
      en: '',
    },
    {
      key: 'D14.4',
      de: 'Gutartige Neubildung: Atmungssystem, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D14.3',
      de: 'Gutartige Neubildung: Bronchus und Lunge',
      en: '',
    },
    {
      key: 'D14.1',
      de: 'Gutartige Neubildung: Larynx',
      en: '',
    },
    {
      key: 'D14.0',
      de: 'Gutartige Neubildung: Mittelohr, Nasenhöhle und Nasennebenhöhlen',
      en: '',
    },
    {
      key: 'D14.2',
      de: 'Gutartige Neubildung: Trachea',
      en: '',
    },
    {
      key: 'D10.7',
      de: 'Gutartige Neubildung: Hypopharynx',
      en: '',
    },
    {
      key: 'D10.0',
      de: 'Gutartige Neubildung: Lippe',
      en: '',
    },
    {
      key: 'D10.2',
      de: 'Gutartige Neubildung: Mundboden',
      en: '',
    },
    {
      key: 'D10.6',
      de: 'Gutartige Neubildung: Nasopharynx',
      en: '',
    },
    {
      key: 'D10.9',
      de: 'Gutartige Neubildung: Pharynx, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D10.5',
      de: 'Gutartige Neubildung: Sonstige Teile des Oropharynx',
      en: '',
    },
    {
      key: 'D10.3',
      de: 'Gutartige Neubildung: Sonstige und nicht näher bezeichnete Teile des Mundes',
      en: '',
    },
    {
      key: 'D10.4',
      de: 'Gutartige Neubildung: Tonsille',
      en: '',
    },
    {
      key: 'D10.1',
      de: 'Gutartige Neubildung: Zunge',
      en: '',
    },
    {
      key: 'D27',
      de: 'Gutartige Neubildung des Ovars',
      en: '',
    },
    {
      key: 'D20.1',
      de: 'Gutartige Neubildung: Peritoneum',
      en: '',
    },
    {
      key: 'D20.0',
      de: 'Gutartige Neubildung: Retroperitoneum',
      en: '',
    },
    {
      key: 'D19.7',
      de: 'Gutartige Neubildung: Mesotheliales Gewebe an sonstigen Lokalisationen',
      en: '',
    },
    {
      key: 'D19.0',
      de: 'Gutartige Neubildung: Mesotheliales Gewebe der Pleura',
      en: '',
    },
    {
      key: 'D19.1',
      de: 'Gutartige Neubildung: Mesotheliales Gewebe des Peritoneums',
      en: '',
    },
    {
      key: 'D19.9',
      de: 'Gutartige Neubildung: Mesotheliales Gewebe, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D35.8',
      de: 'Gutartige Neubildung: Beteiligung mehrerer endokriner Drüsen',
      en: '',
    },
    {
      key: 'D35.3',
      de: 'Gutartige Neubildung: Ductus craniopharyngealis',
      en: '',
    },
    {
      key: 'D35.9',
      de: 'Gutartige Neubildung: Endokrine Drüse, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D35.4',
      de: 'Gutartige Neubildung: Epiphyse [Glandula pinealis] [Zirbeldrüse]',
      en: '',
    },
    {
      key: 'D35.6',
      de: 'Gutartige Neubildung: Glomus aorticum und sonstige Paraganglien',
      en: '',
    },
    {
      key: 'D35.5',
      de: 'Gutartige Neubildung: Glomus caroticum',
      en: '',
    },
    {
      key: 'D35.2',
      de: 'Gutartige Neubildung: Hypophyse',
      en: '',
    },
    {
      key: 'D35.0',
      de: 'Gutartige Neubildung: Nebenniere',
      en: '',
    },
    {
      key: 'D35.1',
      de: 'Gutartige Neubildung: Nebenschilddrüse',
      en: '',
    },
    {
      key: 'D35.7',
      de: 'Gutartige Neubildung: Sonstige näher bezeichnete endokrine Drüsen',
      en: '',
    },
    {
      key: 'D15.1',
      de: 'Gutartige Neubildung: Herz',
      en: '',
    },
    {
      key: 'D15.9',
      de: 'Gutartige Neubildung: Intrathorakales Organ, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D15.2',
      de: 'Gutartige Neubildung: Mediastinum',
      en: '',
    },
    {
      key: 'D15.7',
      de: 'Gutartige Neubildung: Sonstige näher bezeichnete intrathorakale Organe',
      en: '',
    },
    {
      key: 'D15.0',
      de: 'Gutartige Neubildung: Thymus',
      en: '',
    },
    {
      key: 'D28.7',
      de: 'Gutartige Neubildung: Sonstige näher bezeichnete weibliche Genitalorgane',
      en: '',
    },
    {
      key: 'D28.2',
      de: 'Gutartige Neubildung: Tubae uterinae und Ligamenta',
      en: '',
    },
    {
      key: 'D28.1',
      de: 'Gutartige Neubildung: Vagina',
      en: '',
    },
    {
      key: 'D28.0',
      de: 'Gutartige Neubildung: Vulva',
      en: '',
    },
    {
      key: 'D28.9',
      de: 'Gutartige Neubildung: Weibliches Genitalorgan, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D13.2',
      de: 'Gutartige Neubildung: Duodenum',
      en: '',
    },
    {
      key: 'D13.7',
      de: 'Gutartige Neubildung: Endokriner Drüsenanteil des Pankreas',
      en: '',
    },
    {
      key: 'D13.5',
      de: 'Gutartige Neubildung: Extrahepatische Gallengänge und Gallenblase',
      en: '',
    },
    {
      key: 'D13.4',
      de: 'Gutartige Neubildung: Leber',
      en: '',
    },
    {
      key: 'D13.1',
      de: 'Gutartige Neubildung: Magen',
      en: '',
    },
    {
      key: 'D13.6',
      de: 'Gutartige Neubildung: Pankreas',
      en: '',
    },
    {
      key: 'D13.3',
      de: 'Gutartige Neubildung: Sonstige und nicht näher bezeichnete Teile des Dünndarmes',
      en: '',
    },
    {
      key: 'D13.9',
      de: 'Gutartige Neubildung: Ungenau bezeichnete Lokalisationen innerhalb des Verdauungssystems',
      en: '',
    },
    {
      key: 'D13.0',
      de: 'Gutartige Neubildung: Ösophagus',
      en: '',
    },
    {
      key: 'D18.06',
      de: 'Hämangiom: Auge und Orbita',
      en: '',
    },
    {
      key: 'D18.01',
      de: 'Hämangiom: Haut und Unterhaut',
      en: '',
    },
    {
      key: 'D18.03',
      de: 'Hämangiom: Hepatobiliäres System und Pankreas',
      en: '',
    },
    {
      key: 'D18.02',
      de: 'Hämangiom: Intrakraniell',
      en: '',
    },
    {
      key: 'D18.00',
      de: 'Hämangiom: Nicht näher bezeichnete Lokalisation',
      en: '',
    },
    {
      key: 'D18.05',
      de: 'Hämangiom: Ohr, Nase, Mund und Rachen',
      en: '',
    },
    {
      key: 'D18.08',
      de: 'Hämangiom: Sonstige Lokalisationen',
      en: '',
    },
    {
      key: 'D18.04',
      de: 'Hämangiom: Verdauungssystem',
      en: '',
    },
    {
      key: 'D18.11',
      de: 'Lymphangiom: Axilla',
      en: '',
    },
    {
      key: 'D18.10',
      de: 'Lymphangiom: Hygroma colli cysticum',
      en: '',
    },
    {
      key: 'D18.12',
      de: 'Lymphangiom: Inguinal',
      en: '',
    },
    {
      key: 'D18.19',
      de: 'Lymphangiom: Nicht näher bezeichnete Lokalisation',
      en: '',
    },
    {
      key: 'D18.13',
      de: 'Lymphangiom: Retroperitoneal',
      en: '',
    },
    {
      key: 'D18.18',
      de: 'Lymphangiom: Sonstige Lokalisationen',
      en: '',
    },
    {
      key: 'D25.1',
      de: 'Intramurales Leiomyom des Uterus',
      en: '',
    },
    {
      key: 'D25.9',
      de: 'Leiomyom des Uterus, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D25.0',
      de: 'Submuköses Leiomyom des Uterus',
      en: '',
    },
    {
      key: 'D25.2',
      de: 'Subseröses Leiomyom des Uterus',
      en: '',
    },
    {
      key: 'D22.0',
      de: 'Melanozytennävus der Lippe',
      en: '',
    },
    {
      key: 'D22.4',
      de: 'Melanozytennävus der behaarten Kopfhaut und des Halses',
      en: '',
    },
    {
      key: 'D22.6',
      de: 'Melanozytennävus der oberen Extremität, einschließlich Schulter',
      en: '',
    },
    {
      key: 'D22.7',
      de: 'Melanozytennävus der unteren Extremität, einschließlich Hüfte',
      en: '',
    },
    {
      key: 'D22.1',
      de: 'Melanozytennävus des Augenlides, einschließlich Kanthus',
      en: '',
    },
    {
      key: 'D22.2',
      de: 'Melanozytennävus des Ohres und des äußeren Gehörganges',
      en: '',
    },
    {
      key: 'D22.5',
      de: 'Melanozytennävus des Rumpfes',
      en: '',
    },
    {
      key: 'D22.3',
      de: 'Melanozytennävus sonstiger und nicht näher bezeichneter Teile des Gesichtes',
      en: '',
    },
    {
      key: 'D22.9',
      de: 'Melanozytennävus, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D23.4',
      de: 'Sonstige gutartige Neubildungen: Behaarte Kopfhaut und Haut des Halses',
      en: '',
    },
    {
      key: 'D23.6',
      de: 'Sonstige gutartige Neubildungen: Haut der oberen Extremität, einschließlich Schulter',
      en: '',
    },
    {
      key: 'D23.7',
      de: 'Sonstige gutartige Neubildungen: Haut der unteren Extremität, einschließlich Hüfte',
      en: '',
    },
    {
      key: 'D23.1',
      de: 'Sonstige gutartige Neubildungen: Haut des Augenlides, einschließlich Kanthus',
      en: '',
    },
    {
      key: 'D23.2',
      de: 'Sonstige gutartige Neubildungen: Haut des Ohres und des äußeren Gehörganges',
      en: '',
    },
    {
      key: 'D23.5',
      de: 'Sonstige gutartige Neubildungen: Haut des Rumpfes',
      en: '',
    },
    {
      key: 'D23.3',
      de: 'Sonstige gutartige Neubildungen: Haut sonstiger und nicht näher bezeichneter Teile des Gesichtes',
      en: '',
    },
    {
      key: 'D23.9',
      de: 'Sonstige gutartige Neubildungen: Haut, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D23.0',
      de: 'Sonstige gutartige Neubildungen: Lippenhaut',
      en: '',
    },
    {
      key: 'D21.1',
      de: 'Sonstige gutartige Neubildungen: Bindegewebe und andere Weichteilgewebe der oberen Extremität, einschließlich Schulter',
      en: '',
    },
    {
      key: 'D21.2',
      de: 'Sonstige gutartige Neubildungen: Bindegewebe und andere Weichteilgewebe der unteren Extremität, einschließlich Hüfte',
      en: '',
    },
    {
      key: 'D21.4',
      de: 'Sonstige gutartige Neubildungen: Bindegewebe und andere Weichteilgewebe des Abdomens',
      en: '',
    },
    {
      key: 'D21.5',
      de: 'Sonstige gutartige Neubildungen: Bindegewebe und andere Weichteilgewebe des Beckens',
      en: '',
    },
    {
      key: 'D21.0',
      de: 'Sonstige gutartige Neubildungen: Bindegewebe und andere Weichteilgewebe des Kopfes, des Gesichtes und des Halses',
      en: '',
    },
    {
      key: 'D21.6',
      de: 'Sonstige gutartige Neubildungen: Bindegewebe und andere Weichteilgewebe des Rumpfes, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D21.3',
      de: 'Sonstige gutartige Neubildungen: Bindegewebe und andere Weichteilgewebe des Thorax',
      en: '',
    },
    {
      key: 'D21.9',
      de: 'Sonstige gutartige Neubildungen: Bindegewebe und andere Weichteilgewebe, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D26.0',
      de: 'Sonstige gutartige Neubildungen: Cervix uteri',
      en: '',
    },
    {
      key: 'D26.1',
      de: 'Sonstige gutartige Neubildungen: Corpus uteri',
      en: '',
    },
    {
      key: 'D26.7',
      de: 'Sonstige gutartige Neubildungen: Sonstige Teile des Uterus',
      en: '',
    },
    {
      key: 'D26.9',
      de: 'Sonstige gutartige Neubildungen: Uterus, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D05.9',
      de: 'Carcinoma in situ der Brustdrüse, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D05.1',
      de: 'Carcinoma in situ der Milchgänge',
      en: '',
    },
    {
      key: 'D05.0',
      de: 'Lobuläres Carcinoma in situ der Brustdrüse',
      en: '',
    },
    {
      key: 'D05.7',
      de: 'Sonstiges Carcinoma in situ der Brustdrüse',
      en: '',
    },
    {
      key: 'D06.9',
      de: 'Carcinoma in situ: Cervix uteri, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D06.1',
      de: 'Carcinoma in situ: Ektozervix',
      en: '',
    },
    {
      key: 'D06.0',
      de: 'Carcinoma in situ: Endozervix',
      en: '',
    },
    {
      key: 'D06.7',
      de: 'Carcinoma in situ: Sonstige Teile der Cervix uteri',
      en: '',
    },
    {
      key: 'D04.4',
      de: 'Carcinoma in situ: Behaarte Kopfhaut und Haut des Halses',
      en: '',
    },
    {
      key: 'D04.8',
      de: 'Carcinoma in situ: Haut an sonstigen Lokalisationen',
      en: '',
    },
    {
      key: 'D04.6',
      de: 'Carcinoma in situ: Haut der oberen Extremität, einschließlich Schulter',
      en: '',
    },
    {
      key: 'D04.7',
      de: 'Carcinoma in situ: Haut der unteren Extremität, einschließlich Hüfte',
      en: '',
    },
    {
      key: 'D04.1',
      de: 'Carcinoma in situ: Haut des Augenlides, einschließlich Kanthus',
      en: '',
    },
    {
      key: 'D04.2',
      de: 'Carcinoma in situ: Haut des Ohres und des äußeren Gehörganges',
      en: '',
    },
    {
      key: 'D04.5',
      de: 'Carcinoma in situ: Haut des Rumpfes',
      en: '',
    },
    {
      key: 'D04.3',
      de: 'Carcinoma in situ: Haut sonstiger und nicht näher bezeichneter Teile des Gesichtes',
      en: '',
    },
    {
      key: 'D04.9',
      de: 'Carcinoma in situ: Haut, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D04.0',
      de: 'Carcinoma in situ: Lippenhaut',
      en: '',
    },
    {
      key: 'D00.0',
      de: 'Carcinoma in situ: Lippe, Mundhöhle und Pharynx',
      en: '',
    },
    {
      key: 'D00.2',
      de: 'Carcinoma in situ: Magen',
      en: '',
    },
    {
      key: 'D00.1',
      de: 'Carcinoma in situ: Ösophagus',
      en: '',
    },
    {
      key: 'D02.4',
      de: 'Carcinoma in situ: Atmungssystem, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D02.2',
      de: 'Carcinoma in situ: Bronchus und Lunge',
      en: '',
    },
    {
      key: 'D02.0',
      de: 'Carcinoma in situ: Larynx',
      en: '',
    },
    {
      key: 'D02.3',
      de: 'Carcinoma in situ: Sonstige Teile des Atmungssystems',
      en: '',
    },
    {
      key: 'D02.1',
      de: 'Carcinoma in situ: Trachea',
      en: '',
    },
    {
      key: 'D07.0',
      de: 'Carcinoma in situ: Endometrium',
      en: '',
    },
    {
      key: 'D07.4',
      de: 'Carcinoma in situ: Penis',
      en: '',
    },
    {
      key: 'D07.5',
      de: 'Carcinoma in situ: Prostata',
      en: '',
    },
    {
      key: 'D07.6',
      de: 'Carcinoma in situ: Sonstige und nicht näher bezeichnete männliche Genitalorgane',
      en: '',
    },
    {
      key: 'D07.3',
      de: 'Carcinoma in situ: Sonstige und nicht näher bezeichnete weibliche Genitalorgane',
      en: '',
    },
    {
      key: 'D07.2',
      de: 'Carcinoma in situ: Vagina',
      en: '',
    },
    {
      key: 'D07.1',
      de: 'Carcinoma in situ: Vulva',
      en: '',
    },
    {
      key: 'D09.7',
      de: 'Carcinoma in situ sonstiger näher bezeichneter Lokalisationen',
      en: '',
    },
    {
      key: 'D09.9',
      de: 'Carcinoma in situ, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D09.2',
      de: 'Carcinoma in situ: Auge',
      en: '',
    },
    {
      key: 'D09.0',
      de: 'Carcinoma in situ: Harnblase',
      en: '',
    },
    {
      key: 'D09.3',
      de: 'Carcinoma in situ: Schilddrüse und sonstige endokrine Drüsen',
      en: '',
    },
    {
      key: 'D09.1',
      de: 'Carcinoma in situ: Sonstige und nicht näher bezeichnete Harnorgane',
      en: '',
    },
    {
      key: 'D01.3',
      de: 'Carcinoma in situ: Analkanal und Anus',
      en: '',
    },
    {
      key: 'D01.0',
      de: 'Carcinoma in situ: Kolon',
      en: '',
    },
    {
      key: 'D01.5',
      de: 'Carcinoma in situ: Leber, Gallenblase und Gallengänge',
      en: '',
    },
    {
      key: 'D01.1',
      de: 'Carcinoma in situ: Rektosigmoid, Übergang',
      en: '',
    },
    {
      key: 'D01.2',
      de: 'Carcinoma in situ: Rektum',
      en: '',
    },
    {
      key: 'D01.7',
      de: 'Carcinoma in situ: Sonstige näher bezeichnete Verdauungsorgane',
      en: '',
    },
    {
      key: 'D01.4',
      de: 'Carcinoma in situ: Sonstige und nicht näher bezeichnete Teile des Darmes',
      en: '',
    },
    {
      key: 'D01.9',
      de: 'Carcinoma in situ: Verdauungsorgan, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D03.8',
      de: 'Melanoma in situ an sonstigen Lokalisationen',
      en: '',
    },
    {
      key: 'D03.0',
      de: 'Melanoma in situ der Lippe',
      en: '',
    },
    {
      key: 'D03.4',
      de: 'Melanoma in situ der behaarten Kopfhaut und des Halses',
      en: '',
    },
    {
      key: 'D03.6',
      de: 'Melanoma in situ der oberen Extremität, einschließlich Schulter',
      en: '',
    },
    {
      key: 'D03.7',
      de: 'Melanoma in situ der unteren Extremität, einschließlich Hüfte',
      en: '',
    },
    {
      key: 'D03.1',
      de: 'Melanoma in situ des Augenlides, einschließlich Kanthus',
      en: '',
    },
    {
      key: 'D03.2',
      de: 'Melanoma in situ des Ohres und des äußeren Gehörganges',
      en: '',
    },
    {
      key: 'D03.5',
      de: 'Melanoma in situ des Rumpfes',
      en: '',
    },
    {
      key: 'D03.3',
      de: 'Melanoma in situ sonstiger und nicht näher bezeichneter Teile des Gesichtes',
      en: '',
    },
    {
      key: 'D03.9',
      de: 'Melanoma in situ, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D46.6',
      de: 'Myelodysplastisches Syndrom mit isolierter del(5q)-Chromosomenanomalie',
      en: '',
    },
    {
      key: 'D46.9',
      de: 'Myelodysplastisches Syndrom, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D46.2',
      de: 'Refraktäre Anämie mit Blastenüberschuss [RAEB]',
      en: '',
    },
    {
      key: 'D46.5',
      de: 'Refraktäre Anämie mit Mehrlinien-Dysplasie',
      en: '',
    },
    {
      key: 'D46.1',
      de: 'Refraktäre Anämie mit Ringsideroblasten',
      en: '',
    },
    {
      key: 'D46.0',
      de: 'Refraktäre Anämie ohne Ringsideroblasten, so bezeichnet',
      en: '',
    },
    {
      key: 'D46.4',
      de: 'Refraktäre Anämie, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D46.7',
      de: 'Sonstige myelodysplastische Syndrome',
      en: '',
    },
    {
      key: 'D48.9',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D48.1',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Bindegewebe und andere Weichteilgewebe',
      en: '',
    },
    {
      key: 'D48.6',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Brustdrüse [Mamma]',
      en: '',
    },
    {
      key: 'D48.5',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Haut',
      en: '',
    },
    {
      key: 'D48.0',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Knochen und Gelenkknorpel',
      en: '',
    },
    {
      key: 'D48.2',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Periphere Nerven und autonomes Nervensystem',
      en: '',
    },
    {
      key: 'D48.4',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Peritoneum',
      en: '',
    },
    {
      key: 'D48.3',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Retroperitoneum',
      en: '',
    },
    {
      key: 'D48.7',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Sonstige näher bezeichnete Lokalisationen',
      en: '',
    },
    {
      key: 'D41.4',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Harnblase',
      en: '',
    },
    {
      key: 'D41.9',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Harnorgan, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D41.0',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Niere',
      en: '',
    },
    {
      key: 'D41.1',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Nierenbecken',
      en: '',
    },
    {
      key: 'D41.7',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Sonstige Harnorgane',
      en: '',
    },
    {
      key: 'D41.2',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Ureter',
      en: '',
    },
    {
      key: 'D41.3',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Urethra',
      en: '',
    },
    {
      key: 'D42.0',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Hirnhäute',
      en: '',
    },
    {
      key: 'D42.9',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Meningen, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D42.1',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Rückenmarkhäute',
      en: '',
    },
    {
      key: 'D37.3',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Appendix vermiformis',
      en: '',
    },
    {
      key: 'D37.2',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Dünndarm',
      en: '',
    },
    {
      key: 'D37.4',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Kolon',
      en: '',
    },
    {
      key: 'D37.6',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Leber, Gallenblase und Gallengänge',
      en: '',
    },
    {
      key: 'D37.0',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Lippe, Mundhöhle und Pharynx',
      en: '',
    },
    {
      key: 'D37.1',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Magen',
      en: '',
    },
    {
      key: 'D37.5',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Rektum',
      en: '',
    },
    {
      key: 'D37.70',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Pankreas',
      en: '',
    },
    {
      key: 'D37.78',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Sonstige Verdauungsorgane',
      en: '',
    },
    {
      key: 'D37.9',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Verdauungsorgan, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D44.8',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Beteiligung mehrerer endokriner Drüsen',
      en: '',
    },
    {
      key: 'D44.4',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Ductus craniopharyngealis',
      en: '',
    },
    {
      key: 'D44.9',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Endokrine Drüse, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D44.5',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Epiphyse [Glandula pinealis] [Zirbeldrüse]',
      en: '',
    },
    {
      key: 'D44.7',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Glomus aorticum und sonstige Paraganglien',
      en: '',
    },
    {
      key: 'D44.6',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Glomus caroticum',
      en: '',
    },
    {
      key: 'D44.3',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Hypophyse',
      en: '',
    },
    {
      key: 'D44.1',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Nebenniere',
      en: '',
    },
    {
      key: 'D44.2',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Nebenschilddrüse',
      en: '',
    },
    {
      key: 'D44.0',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Schilddrüse',
      en: '',
    },
    {
      key: 'D40.1',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Hoden',
      en: '',
    },
    {
      key: 'D40.9',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Männliches Genitalorgan, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D40.0',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Prostata',
      en: '',
    },
    {
      key: 'D40.7',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Sonstige männliche Genitalorgane',
      en: '',
    },
    {
      key: 'D39.1',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Ovar',
      en: '',
    },
    {
      key: 'D39.2',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Plazenta',
      en: '',
    },
    {
      key: 'D39.7',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Sonstige weibliche Genitalorgane',
      en: '',
    },
    {
      key: 'D39.0',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Uterus',
      en: '',
    },
    {
      key: 'D39.9',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Weibliches Genitalorgan, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D43.1',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Gehirn, infratentoriell',
      en: '',
    },
    {
      key: 'D43.2',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Gehirn, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D43.0',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Gehirn, supratentoriell',
      en: '',
    },
    {
      key: 'D43.3',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Hirnnerven',
      en: '',
    },
    {
      key: 'D43.4',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Rückenmark',
      en: '',
    },
    {
      key: 'D43.7',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Sonstige Teile des Zentralnervensystems',
      en: '',
    },
    {
      key: 'D43.9',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Zentralnervensystem, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D38.6',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Atmungsorgan, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D38.0',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Larynx',
      en: '',
    },
    {
      key: 'D38.3',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Mediastinum',
      en: '',
    },
    {
      key: 'D38.2',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Pleura',
      en: '',
    },
    {
      key: 'D38.5',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Sonstige Atmungsorgane',
      en: '',
    },
    {
      key: 'D38.4',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Thymus',
      en: '',
    },
    {
      key: 'D38.1',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens: Trachea, Bronchus und Lunge',
      en: '',
    },
    {
      key: 'D45',
      de: 'Polycythaemia vera',
      en: '',
    },
    {
      key: 'D47.5',
      de: 'Chronische Eosinophilen-Leukämie [Hypereosinophiles Syndrom]',
      en: '',
    },
    {
      key: 'D47.1',
      de: 'Chronische myeloproliferative Krankheit',
      en: '',
    },
    {
      key: 'D47.3',
      de: 'Essentielle (hämorrhagische) Thrombozythämie',
      en: '',
    },
    {
      key: 'D47.0',
      de: 'Histiozyten- und Mastzelltumor unsicheren oder unbekannten Verhaltens',
      en: '',
    },
    {
      key: 'D47.2',
      de: 'Monoklonale Gammopathie unbestimmter Signifikanz [MGUS]',
      en: '',
    },
    {
      key: 'D47.9',
      de: 'Neubildung unsicheren oder unbekannten Verhaltens des lymphatischen, blutbildenden und verwandten Gewebes, nicht näher bezeichnet',
      en: '',
    },
    {
      key: 'D47.4',
      de: 'Osteomyelofibrose',
      en: '',
    },
    {
      key: 'D47.7',
      de: 'Sonstige näher bezeichnete Neubildungen unsicheren oder unbekannten Verhaltens des lymphatischen, blutbildenden und verwandten Gewebes',
      en: '',
    },
  ]
);
