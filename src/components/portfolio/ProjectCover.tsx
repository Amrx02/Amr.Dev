interface ProjectCoverProps {
  p: { name: string; g1: string; g2: string; icon: string };
}

export default function ProjectCover({ p }: ProjectCoverProps) {
  const id = p.name.replace(/\s+/g, "_");
  return (
    <svg viewBox="0 0 380 180" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
      <defs>
        <linearGradient id={`g${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={p.g1} stopOpacity={0.95} />
          <stop offset="100%" stopColor={p.g2} stopOpacity={1} />
        </linearGradient>
        <pattern id={`dots${id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="rgba(255,255,255,0.12)" />
        </pattern>
      </defs>
      <rect width="380" height="180" fill={`url(#g${id})`} />
      <rect width="380" height="180" fill={`url(#dots${id})`} />
      <circle cx="320" cy="30" r="70" fill="rgba(255,255,255,0.06)" />
      <circle cx="50" cy="155" r="90" fill="rgba(255,255,255,0.05)" />
      <circle cx="190" cy="90" r="130" fill="rgba(255,255,255,0.03)" />
      <text x="190" y="88" textAnchor="middle" dominantBaseline="middle" fontSize="54" fontFamily="system-ui">{p.icon}</text>
      <rect x="0" y="148" width="380" height="32" fill="rgba(0,0,0,0.38)" />
      <text x="16" y="169" fontSize="12" fontFamily="'Outfit',sans-serif" fontWeight="600" fill="rgba(255,255,255,0.88)">{p.name}</text>
    </svg>
  );
}
