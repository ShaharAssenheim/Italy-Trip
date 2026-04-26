export interface Hotel {
  id: string;
  name: string;
  nameHe: string;
  lat: number;
  lng: number;
  nights: string;
  googleMapsUrl: string;
}

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
  links: TouristLink[];
}

export interface ScheduleItem {
  text: string;
  time?: string;
}

export interface FlexOption {
  title: string;
  items: string[];
}

export interface DayHotel {
  name: string;
  nameHe: string;
  googleMapsUrl: string;
}

export interface Day {
  id: number;
  emoji: string;
  title: string;
  color: string;
  accentColor: string;
  tags: string[];
  schedule: ScheduleItem[];
  tip: string;
  locations: Location[];
  hotel?: DayHotel;
  isFlexible?: boolean;
  optionA?: FlexOption;
  optionB?: FlexOption;
}
