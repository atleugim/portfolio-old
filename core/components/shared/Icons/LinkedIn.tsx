import { IconWithLink } from "@/utils/types";

const LinkedIn = ({ size = "1em", className = "", link }: IconWithLink) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="duration-300 transform hover:scale-110 hover:-translate-y-1 hover:text-secondary"
    aria-label="GitHub Link"
  >
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height={size}
      width={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect x="2" y="9" width="4" height="12"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  </a>
);

export default LinkedIn;
