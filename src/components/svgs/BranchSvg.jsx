function BranchSvg({ width, className }) {
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
      <path d="M6 3L6 15"></path>
      <circle cx="18" cy="6" r="3"></circle>
      <circle cx="6" cy="18" r="3"></circle>
      <path d="M18 9a9 9 0 01-9 9"></path>
    </svg>
  );
}

export default BranchSvg;