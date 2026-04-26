'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Day, Location } from '@/types';

// Fix Leaflet default icon paths broken by Webpack
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function createDayIcon(day: Day) {
  const svg = `
    <div style="
      width:38px; height:38px;
      background:${day.color};
      border-radius:50%;
      border:3px solid white;
      box-shadow:0 3px 14px rgba(0,0,0,0.35);
      display:flex; align-items:center; justify-content:center;
      font-size:14px; font-weight:900; color:white;
      font-family:'Heebo',sans-serif;
      cursor:pointer;
      transition:transform .15s;
    ">${day.id}</div>`;

  return L.divIcon({
    html: svg,
    className: '',
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -22],
  });
}

/* Flies map to the selected day's bounds */
function FlyController({
  selectedDay,
  days,
}: {
  selectedDay: number | null;
  days: Day[];
}) {
  const map = useMap();
  const prevDay = useRef<number | null>(null);

  useEffect(() => {
    if (selectedDay === null || selectedDay === prevDay.current) return;
    prevDay.current = selectedDay;

    const day = days.find((d) => d.id === selectedDay);
    if (!day) return;

    const locs = day.locations;
    if (locs.length === 0) return;

    if (locs.length === 1) {
      map.flyTo([locs[0].lat, locs[0].lng], 13, { duration: 1.1 });
    } else {
      const bounds = L.latLngBounds(locs.map((l) => [l.lat, l.lng]));
      map.flyToBounds(bounds, { padding: [70, 70], duration: 1.1 });
    }
  }, [selectedDay, days, map]);

  return null;
}

interface Props {
  days: Day[];
  selectedDay: number | null;
  onSelectDay: (id: number) => void;
}

export default function MapView({ days, selectedDay, onSelectDay }: Props) {
  return (
    <MapContainer
      center={[45.72, 10.78]}
      zoom={10}
      className="h-full w-full"
      zoomControl={true}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution="© OpenStreetMap © CARTO"
        subdomains="abcd"
        maxZoom={19}
      />

      <FlyController selectedDay={selectedDay} days={days} />

      {days.map((day) =>
        day.locations.map((loc: Location) => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={createDayIcon(day)}
            eventHandlers={{ click: () => onSelectDay(day.id) }}
          >
            <Popup className="italy-popup">
              <div
                className="overflow-hidden rounded-xl"
                style={{ direction: 'rtl', fontFamily: 'Heebo, sans-serif', minWidth: 180 }}
              >
                <div style={{ background: day.color, height: 5 }} />
                <div className="p-3">
                  <p
                    style={{ color: day.color }}
                    className="text-xs font-bold uppercase tracking-widest"
                  >
                    {day.emoji} יום {day.id}
                  </p>
                  <p className="mt-1 text-base font-extrabold text-gray-800">{loc.nameHe}</p>
                  <p className="mt-0.5 text-xs text-gray-500">{loc.description}</p>

                  {loc.links.length > 0 && (
                    <div className="mt-2 flex flex-col gap-1">
                      {loc.links.map((link) => (
                        <a
                          key={link.id}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium underline"
                          style={{ color: day.color }}
                        >
                          {link.title}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Popup>
          </Marker>
        ))
      )}

    </MapContainer>
  );
}
