import { Recommendation } from '@/types';

export const recommendations: Recommendation[] = [
  {
    id: 'rec-cable-car',
    category: 'place',
    name: 'רכבל מונטה באלדו — מלצ׳סינה',
    description:
      'רכבל מרהיב שעולה מהעיירה מלצ׳סינה עד פסגת מונטה באלדו (1,760 מ׳). נוף פנורמי עוצר נשימה על אגם גארדה מלמעלה. כדאי להגיע מוקדם לפני שמתמלא.',
    tiktokUrl: '',
    imageUrl: '/images/monte.jpg',
    linkUrl: 'https://www.funiviedelbaldo.it',
    linkLabel: 'אתר הרכבל',
  },
  {
    id: 'rec-sealife',
    category: 'place',
    name: 'Gardaland SEA LIFE Aquarium',
    description:
      'אקווריום מרהיב בתוך פארק גארדלנד עם מנהרת מים, כרישים, לינגפיש ועוד מאות מינים ימיים. חוויה מושלמת לילדים ומבוגרים כאחד.',
    tiktokUrl: '',
    imageUrl: '/images/aqurium.jpg',
    linkUrl: 'https://www.gardaland.it/en/parks/sea-life/',
    linkLabel: 'אתר רשמי',
  },
  {
    id: 'rec-il-leone',
    category: 'place',
    name: 'Il Leone Shopping Center',
    description:
      'קניון גדול ומודרני באזור ריבה דל גארדה — מגוון חנויות, מסעדות ובילוי. אידיאלי לקנייה או לעצירה ביום גשום.',
    tiktokUrl: '',
    imageUrl: '/images/leone.jpeg',
    linkUrl: 'https://maps.google.com/?q=Il+Leone+Shopping+Center+Riva+del+Garda',
    linkLabel: 'Google Maps',
  },
];
