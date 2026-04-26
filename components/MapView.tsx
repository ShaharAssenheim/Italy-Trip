'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Day } from '@/types';

// Leaflet's default icon URLs break with Webpack — point to CDN instead
delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

function createDayIcon(day: Day) {
  return L.divIcon({
    html: `<div style="
      width:38px;height:38px;
      background:${day.color};
      border-radius:50%;
      border:3px solid white;
      box-shadow:0 3px 14px rgba(0,0,0,0.35);
      display:flex;align-items:center;justify-content:center;
      font-size:14px;font-weight:900;color:white;
      font-family:'Heebo',sans-serif;
      cursor:pointer;
    ">${day.id}</div>`,
    className: '',
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: [0, -22],
  });
}

function FlyController({ selectedDay, days }: { selectedDay: number | null; days: Day[] }) {
  const map = useMap();
  const prevDay = useRef<number | null>(null);

  useEffect(() => {
    if (selectedDay === null || selectedDay === prevDay.current) return;
    prevDay.current = selectedDay;

    const day = days.find((d) => d.id === selectedDay);
    if (!day?.locations.length) return;

    if (day.locations.length === 1) {
      map.flyTo([day.locations[0].lat, day.locations[0].lng], 13, { duration: 1.1 });
    } else {
      const bounds = L.latLngBounds(day.locations.map((l) => [l.lat, l.lng]));
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
    <MapContainer center={[45.72, 10.78]} zoom={10} className="h-full w-full">
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution="© OpenStreetMap © CARTO"
        subdomains="abcd"
        maxZoom={19}
      />

      <FlyController selectedDay={selectedDay} days={days} />

      {days.map((day) =>
        day.locations.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            icon={createDayIcon(day)}
            eventHandlers={{ click: () => onSelectDay(day.id) }}
          >
            <Popup>
              <div
                style={{
                  direction: 'rtl',
                  fontFamily: 'Heebo, sans-serif',
                  width: 220,
                  overflow: 'hidden',
                  borderRadius: '0.75rem',
                }}
              >
                {loc.image && (
                  <img
                    src={loc.image}
                    alt={loc.nameHe}
                    style={{ width: '100%', height: 120, objectFit: 'cover', display: 'block' }}
                  />
                )}
                <div style={{ background: day.color, height: 4 }} />
                <div style={{ padding: '0.6rem 0.75rem 0.75rem' }}>
                  <p
                    style={{
                      color: day.color,
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      margin: 0,
                    }}
                  >
                    {day.emoji} יום {day.id}
                  </p>
                  <p style={{ margin: '0.2rem 0 0', fontSize: '0.95rem', fontWeight: 800, color: '#1c1917' }}>
                    {loc.nameHe}
                  </p>
                  <p style={{ margin: '0.1rem 0 0', fontSize: '0.72rem', color: '#78716c' }}>
                    {loc.description}
                  </p>

                  {loc.links.length > 0 && (
                    <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                      {loc.links.map((link) => (
                        <a
                          key={link.id}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ fontSize: '0.7rem', fontWeight: 600, color: day.color }}
                        >
                          ↗ {link.title}
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
