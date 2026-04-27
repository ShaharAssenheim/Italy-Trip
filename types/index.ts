export type RecommendationCategory = 'place' | 'food' | 'restaurant';

export interface Recommendation {
  id: string;
  category: RecommendationCategory;
  name: string;
  description: string;
  tiktokUrl?: string;
  imageUrl?: string;
  linkUrl?: string;
  linkLabel?: string;
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
  image?: string;
  driveTime?: string;
  links: TouristLink[];
}

export interface ScheduleItem {
  text: string;
}

export interface DayHotel {
  nameHe: string;
  googleMapsUrl: string;
}

export interface Day {
  routeStart?: { lat: number; lng: number };
  routeWaypoints?: { lat: number; lng: number }[];
  routeType?: 'boat';
  routeLabel?: string;
  id: number;
  emoji: string;
  title: string;
  color: string;
  tags: string[];
  schedule: ScheduleItem[];
  locations: Location[];
  hotel?: DayHotel;
}
