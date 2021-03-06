function MapPinSvg({ width, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}

      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className={className}
      viewBox="0 0 24 24"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

export default MapPinSvg;