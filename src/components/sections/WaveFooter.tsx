import Wave from 'react-wavify';

// Catppuccin Macchiato blues — fixed dark palette, no theme toggle on this site.
const WAVE_COLORS = {
  b1: 'rgba(125, 196, 228, 0.14)',
  b2: 'rgba(138, 173, 244, 0.28)',
  b3: 'rgba(145, 215, 227, 0.52)',
  b4: '#8aadf4',
};

export default function WaveFooter() {
  return (
    <div className="relative" aria-hidden="true">
      <div className="relative h-28 overflow-hidden">
        <Wave
          svgId="wave-back"
          fill={WAVE_COLORS.b1}
          paused={false}
          options={{ height: 18, amplitude: 38, speed: 0.09, points: 4 }}
          style={{ position: 'absolute', width: '100%', height: '100%', bottom: 0 }}
        />
        <Wave
          svgId="wave-mid1"
          fill={WAVE_COLORS.b2}
          paused={false}
          options={{ height: 30, amplitude: 30, speed: 0.15, points: 3 }}
          style={{ position: 'absolute', width: '100%', height: '100%', bottom: 0 }}
        />
        <Wave
          svgId="wave-mid2"
          fill={WAVE_COLORS.b3}
          paused={false}
          options={{ height: 44, amplitude: 22, speed: 0.21, points: 4 }}
          style={{ position: 'absolute', width: '100%', height: '100%', bottom: 0 }}
        />
        <Wave
          svgId="wave-front"
          fill={WAVE_COLORS.b4}
          paused={false}
          options={{ height: 60, amplitude: 15, speed: 0.29, points: 3 }}
          style={{ position: 'absolute', width: '100%', height: '100%', bottom: 0 }}
        />
      </div>
    </div>
  );
}
