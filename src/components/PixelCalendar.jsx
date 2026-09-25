// Calendário em pixel art (grade 12x12), na cor do texto atual (currentColor)
function PixelCalendar({ className = "" }) {
  return (
    <svg
      viewBox="0 0 12 12"
      shapeRendering="crispEdges"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* argolas */}
      <rect x="3" y="0" width="1" height="3" />
      <rect x="8" y="0" width="1" height="3" />
      {/* cabeçalho */}
      <rect x="0" y="2" width="12" height="3" />
      {/* contorno do corpo */}
      <rect x="0" y="5" width="1" height="7" />
      <rect x="11" y="5" width="1" height="7" />
      <rect x="0" y="11" width="12" height="1" />
      {/* dias */}
      <rect x="2" y="6" width="2" height="2" />
      <rect x="5" y="6" width="2" height="2" />
      <rect x="8" y="6" width="2" height="2" />
      <rect x="2" y="9" width="2" height="1" />
      <rect x="5" y="9" width="2" height="1" />
    </svg>
  );
}

export default PixelCalendar;
