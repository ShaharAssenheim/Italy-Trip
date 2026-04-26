export interface TouristLink {
  id: string;
  title: string;
  url: string;
  type: 'official' | 'booking' | 'review' | 'map' | 'other';
}

export interface Location {
  id: string;
  name: string;
  nameHe: string;
  lat: number;
  lng: number;
  description: string;
  image?: string;
  links: TouristLink[];
}

export interface ScheduleItem {
  text: string;
}

export interface FlexOption {
  title: string;
  items: string[];
}

export interface DayHotel {
  nameHe: string;
  googleMapsUrl: string;
}

export interface Day {
  id: number;
  emoji: string;
  title: string;
  color: string;
  tags: string[];
  schedule: ScheduleItem[];
  tip: string;
  locations: Location[];
  hotel?: DayHotel;
  isFlexible?: boolean;
  optionA?: FlexOption;
  optionB?: FlexOption;
}
