import { Project } from './types';

export const projects: Project[] = [
  {
    id: 'kita-kleine-entdecker',
    title: 'Kita "Kleine Entdecker"',
    subtitle: 'Ein Raum für Wachstum und Geborgenheit',
    category: 'Soziales',
    description: 'Ein lichtdurchfluteter Holzrahmenbau, der sich organisch in den alten Baumbestand einfügt. Warme Materialien im Inneren schaffen Geborgenheit für die Kinder. Große Fensterflächen verbinden die Gruppenräume direkt mit dem Außenbereich und fördern das freie Spiel in der Natur.',
    year: '2023',
    location: 'Hamburg',
    images: [
      'https://picsum.photos/seed/wood/1600/1200',
      'https://picsum.photos/seed/kidsarch/1600/1200',
      'https://picsum.photos/seed/sunlight/1600/1200'
    ]
  },
  {
    id: 'wohnhaus-k',
    title: 'Wohnhaus K.',
    subtitle: 'Neues Leben in altem Klinker',
    category: 'Sanierung',
    description: 'Behutsame Modernisierung eines Klinkerbaus aus den 1920ern. Der Fokus lag auf dem Erhalt der historischen Substanz bei gleichzeitiger energetischer Ertüchtigung. Durch die Öffnung des Grundrisses entstand eine moderne Wohnatmosphäre, die den Charme des Altbaus bewahrt.',
    year: '2022',
    location: 'Lüneburg',
    images: [
      'https://picsum.photos/seed/brick/1600/1200',
      'https://picsum.photos/seed/interiordesign/1600/1200',
      'https://picsum.photos/seed/staircase/1600/1200'
    ]
  },
  {
    id: 'gemeindezentrum-nord',
    title: 'Gemeindezentrum Nord',
    subtitle: 'Begegnung für alle Generationen',
    category: 'Neubau',
    description: 'Begegnungsstätte für alle Generationen. Das offene Atrium verbindet den Saal mit dem öffentlichen Raum. Barrierefrei und inklusiv gestaltet, dient das Gebäude als neuer Mittelpunkt des Stadtteils und lädt zum Verweilen ein.',
    year: '2024',
    location: 'Bremen',
    images: [
      'https://picsum.photos/seed/concrete/1600/1200',
      'https://picsum.photos/seed/hall/1600/1200',
      'https://picsum.photos/seed/peoplearch/1600/1200'
    ]
  }
];