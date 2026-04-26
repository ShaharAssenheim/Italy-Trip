import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: 32, height: 32, borderRadius: 4, overflow: 'hidden' }}>
        <div style={{ flex: 1, background: '#009246' }} />
        <div style={{ flex: 1, background: '#ffffff' }} />
        <div style={{ flex: 1, background: '#ce2b37' }} />
      </div>
    ),
    size,
  );
}
