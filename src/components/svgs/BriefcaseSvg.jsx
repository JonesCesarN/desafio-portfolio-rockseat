function BriefcaseSvg({ width, className }) {
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
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path>
    </svg>
  );
}

export default BriefcaseSvg;