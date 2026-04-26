import { Day } from '@/types';

const SHERATON: Day['hotel'] = {
  nameHe: 'שרתון מילאנו מלפנסה',
  googleMapsUrl:
    'https://maps.google.com/?q=Sheraton+Milan+Malpensa+Airport+Hotel+Conference+Centre',
};

const DU_LAC: Day['hotel'] = {
  nameHe: 'דו לק א דו פארק — ריבה דל גארדה',
  googleMapsUrl: 'https://maps.google.com/?q=Du+Lac+et+Du+Parc+Grand+Resort+Riva+del+Garda',
};

export const days: Day[] = [
  {
    id: 1,
    emoji: '✈️',
    title: 'הגעה למלפנסה — לילה במלון',
    color: '#4a3f7a',
    tags: ['מלפנסה', 'הגעה', 'שרתון'],
    schedule: [
      { text: 'נחיתה בשדה התעופה מלפנסה' },
      { text: 'צ׳ק אין לשרתון מילאנו מלפנסה' },
      { text: 'מנוחה לקראת הטיול' },
    ],
    tip: 'יום הגעה — לנוח טוב לקראת ימי הטיול',
    hotel: SHERATON,
    locations: [
      {
        id: 'milan-malpensa-arrival',
        name: 'Milan Malpensa Airport',
        nameHe: 'שדה מלפנסה — הגעה',
        lat: 45.6306,
        lng: 8.7226,
        description: 'שדה התעופה הבינלאומי של מילאנו',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Milano_malpensa_terminal_1.JPG/330px-Milano_malpensa_terminal_1.JPG',
        driveTime: 'המלון צמוד לשדה התעופה',
        links: [
          {
            id: 'mxp-map',
            title: 'Google Maps',
            url: 'https://maps.google.com/?q=Milan+Malpensa+Airport',
            type: 'map',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    emoji: '🚗',
    title: 'נסיעה + סירמיונה + הגעה לריבה',
    color: '#1a6b8a',
    tags: ['סירמיונה', 'ריבה דל גארדה', 'אגם גארדה'],
    schedule: [
      { text: 'נסיעה מהשדה צפונה לעבר אגם גארדה' },
      { text: 'עצירה בסירמיונה (2–3 שעות): טירה, סמטאות, גלידה' },
      { text: 'המשך לריבה דל גארדה — התמקמות במלון' },
    ],
    tip: 'יום מעבר נעים — לא לדחוק, להתחיל בקצב רגוע',
    hotel: DU_LAC,
    locations: [
      {
        id: 'sirmione',
        name: 'Sirmione',
        nameHe: 'סירמיונה',
        lat: 45.4944,
        lng: 10.6077,
        description: 'חצי אי ציורי עם טירה מימי הביניים',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Italy_-_Sirmione_-_Scaligero_Castle.jpg/330px-Italy_-_Sirmione_-_Scaligero_Castle.jpg',
        driveTime: 'כ-1:20 שעות ממלפנסה',
        links: [
          {
            id: 'sirmione-map',
            title: 'Google Maps',
            url: 'https://maps.google.com/?q=Sirmione,+Italy',
            type: 'map',
          },
          {
            id: 'sirmione-castle',
            title: 'Rocca Scaligera (הטירה)',
            url: 'https://maps.google.com/?q=Rocca+Scaligera+Sirmione',
            type: 'other',
          },
        ],
      },
      {
        id: 'riva-del-garda',
        name: 'Riva del Garda',
        nameHe: 'ריבה דל גארדה',
        lat: 45.8847,
        lng: 10.841,
        description: 'בסיס הטיול — עיר נמל בצפון האגם',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Riva_del_garda_from_Torre_Apponale.JPG/330px-Riva_del_garda_from_Torre_Apponale.JPG',
        driveTime: 'כ-1 שעה נוספת מסירמיונה',
        links: [
          {
            id: 'riva-map',
            title: 'Google Maps',
            url: 'https://maps.google.com/?q=Riva+del+Garda,+Italy',
            type: 'map',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    emoji: '🦁',
    title: 'ספארי — Parco Natura Viva',
    color: '#8b5e1a',
    tags: ['Parco Natura Viva', 'ספארי', 'גן חיות'],
    schedule: [
      { text: 'יציאה מוקדמת מריבה' },
      { text: 'ספארי ברכב — נסיעה בין בעלי החיים' },
      { text: 'גן חיות רגלי עם מינים נדירים' },
      { text: 'חזרה למלון + מנוחה מוקדמת' },
    ],
    tip: 'יום אחד "גדול" בלבד — שאר הימים הרבה יותר רגועים',
    hotel: DU_LAC,
    locations: [
      {
        id: 'parco-natura-viva',
        name: 'Parco Natura Viva',
        nameHe: 'פארקו נאטורה ויבה',
        lat: 45.3907,
        lng: 10.8474,
        description: 'פארק ספארי וגן חיות ליד ורונה',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/ITALY_-_Tigre_Siberiana_-_Parco_Natura_Viva_-_Verona_1.JPG/330px-ITALY_-_Tigre_Siberiana_-_Parco_Natura_Viva_-_Verona_1.JPG',
        driveTime: 'כ-55 דקות מריבה דל גארדה',
        links: [
          {
            id: 'parco-map',
            title: 'Google Maps',
            url: 'https://maps.google.com/?q=Parco+Natura+Viva+Bussolengo',
            type: 'map',
          },
          {
            id: 'parco-site',
            title: 'אתר רשמי',
            url: 'https://www.parconaturaviva.it',
            type: 'official',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    emoji: '🚠',
    title: 'יום גמיש — רכבל או מנוחה',
    color: '#3d7a55',
    tags: ['Monte Baldo', "מלצ'סינה", 'רכבל'],
    schedule: [],
    tip: "יום 'בולמי עומס' — לבחור לפי מצב הרוח בבוקר",
    hotel: DU_LAC,
    isFlexible: true,
    optionA: {
      title: "A — רכבל ומלצ'סינה",
      items: ['רכבל למונטה באלדו', 'נוף פנורמי ופתוח', "ירידה למלצ'סינה", 'טיול קצר + גלידה'],
    },
    optionB: {
      title: 'B — יום רגוע בריבה',
      items: ['טיילת האגם', 'חוף / מים רדודים', 'פארק וגלידות', 'מנוחה במלון'],
    },
    locations: [
      {
        id: 'monte-baldo',
        name: 'Monte Baldo',
        nameHe: 'מונטה באלדו',
        lat: 45.75,
        lng: 10.8667,
        description: 'רכבל עם נוף פנורמי על האגם',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Monte-Baldo-Funivia-Bergstation-CTH.JPG/330px-Monte-Baldo-Funivia-Bergstation-CTH.JPG',
        driveTime: 'כ-30 דקות מריבה דל גארדה',
        links: [
          {
            id: 'baldo-map',
            title: 'Google Maps',
            url: 'https://maps.google.com/?q=Monte+Baldo+cable+car+Malcesine',
            type: 'map',
          },
          {
            id: 'baldo-cable',
            title: 'אתר הרכבל',
            url: 'https://www.funiviedelbaldo.it',
            type: 'official',
          },
        ],
      },
      {
        id: 'malcesine',
        name: 'Malcesine',
        nameHe: "מלצ'סינה",
        lat: 45.7669,
        lng: 10.8079,
        description: 'עיירה ציורית על גדת האגם',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Malcesine%2C_on_the_Via_Lungolago.JPG/330px-Malcesine%2C_on_the_Via_Lungolago.JPG',
        driveTime: 'צמודה לתחנת הרכבל',
        links: [
          {
            id: 'malcesine-map',
            title: 'Google Maps',
            url: 'https://maps.google.com/?q=Malcesine,+Italy',
            type: 'map',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    emoji: '🏔️',
    title: 'אגם טובל — דולומיטים',
    color: '#2d5f8a',
    tags: ['Lago di Tovel', 'דולומיטים', 'אגם טורקיז'],
    schedule: [
      { text: 'נסיעה לכיוון ההרים' },
      { text: 'אגם טובל — נוף טורקיז מדהים' },
      { text: 'הליכה קצרה / פיקניק ליד האגם' },
      { text: 'חזרה לריבה' },
    ],
    tip: 'טבע בלי מאמץ גדול — שווה כל קילומטר',
    hotel: DU_LAC,
    locations: [
      {
        id: 'lago-di-tovel',
        name: 'Lago di Tovel',
        nameHe: 'אגם טובל',
        lat: 46.2386,
        lng: 10.9467,
        description: 'אגם טורקיז בלב הדולומיטים',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Lago_di_Tovel.JPG/330px-Lago_di_Tovel.JPG',
        driveTime: 'כ-50 דקות מריבה דל גארדה',
        links: [
          {
            id: 'tovel-map',
            title: 'Google Maps',
            url: 'https://maps.google.com/?q=Lago+di+Tovel,+Italy',
            type: 'map',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    emoji: '🚤',
    title: 'לימונה + שייט באגם',
    color: '#c4613a',
    tags: ['לימונה סול גארדה', 'שייט', 'אגם גארדה'],
    schedule: [
      { text: 'שייט על האגם או נסיעה לאורך החוף' },
      { text: 'ביקור בלימונה סול גארדה' },
      { text: 'סמטאות, גלידה, נוף לאגם' },
      { text: 'עצירות קצרות בדרך חזרה לריבה' },
    ],
    tip: 'יום רגוע ועגול — ספוג את אגם גארדה לפני הסיום',
    hotel: DU_LAC,
    locations: [
      {
        id: 'limone-sul-garda',
        name: 'Limone sul Garda',
        nameHe: 'לימונה סול גארדה',
        lat: 45.8114,
        lng: 10.7922,
        description: 'כפר ים ציורי עם לימונים ונוף עוצר נשימה',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Limone_sul_Garda%2C_the_town.JPG/330px-Limone_sul_Garda%2C_the_town.JPG',
        driveTime: 'כ-20 דקות מריבה (רכב) / כ-30 דקות (מעבורת)',
        links: [
          {
            id: 'limone-map',
            title: 'Google Maps',
            url: 'https://maps.google.com/?q=Limone+sul+Garda,+Italy',
            type: 'map',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    emoji: '🛫',
    title: 'חזרה + אגם לדרו + מלפנסה',
    color: '#6b3d8a',
    tags: ['Lago di Ledro', 'מלפנסה', 'חזרה הביתה'],
    schedule: [
      { text: "בוקר שקט — צ'ק אאוט מריבה" },
      { text: 'עצירת תצפית קצרה באגם לדרו' },
      { text: 'נסיעה ישירה לשדה התעופה מלפנסה' },
    ],
    tip: 'לצאת בזמן! סיום רגוע ולא לחוץ',
    hotel: SHERATON,
    locations: [
      {
        id: 'lago-di-ledro',
        name: 'Lago di Ledro',
        nameHe: 'אגם לדרו',
        lat: 45.8767,
        lng: 10.7319,
        description: 'תצפית קצרה — אגם שקט ומרהיב',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Lago_di_Ledro_-_crystal-clear_water.JPG/330px-Lago_di_Ledro_-_crystal-clear_water.JPG',
        driveTime: 'כ-20 דקות מריבה דל גארדה',
        links: [
          {
            id: 'ledro-map',
            title: 'Google Maps',
            url: 'https://maps.google.com/?q=Lago+di+Ledro,+Italy',
            type: 'map',
          },
        ],
      },
      {
        id: 'milan-malpensa',
        name: 'Milan Malpensa Airport',
        nameHe: 'שדה מלפנסה',
        lat: 45.6306,
        lng: 8.7226,
        description: 'שדה התעופה הבינלאומי של מילאנו',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Milano_malpensa_terminal_1.JPG/330px-Milano_malpensa_terminal_1.JPG',
        driveTime: 'כ-2 שעות מאגם לדרו',
        links: [
          {
            id: 'mxp-dep-map',
            title: 'Google Maps',
            url: 'https://maps.google.com/?q=Milan+Malpensa+Airport',
            type: 'map',
          },
        ],
      },
    ],
  },
];
