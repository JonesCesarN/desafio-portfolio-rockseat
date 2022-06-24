function LinkedinSvg({ width, className }) {

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
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
      <path d="M2 9H6V21H2z"></path>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}

export default LinkedinSvg;