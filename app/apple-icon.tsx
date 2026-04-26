import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ display: 'flex', width: 180, height: 180 }}>
        <div style={{ flex: 1, background: '#009246' }} />
        <div style={{ flex: 1, background: '#f0f0f0' }} />
        <div style={{ flex: 1, background: '#ce2b37' }} />
      </div>
    ),
    size,
  );
}
