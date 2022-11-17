import { IconWithLink } from "@/utils/types";

const Mail = ({ size = "1em", className = "", link }: IconWithLink) => (
  <a
    href={link}
    target="_blank"
    rel="noreferrer"
    className="duration-300 transform hover:scale-110 hover:-translate-y-1 hover:text-secondary"
    aria-label="Mail Link"
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
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  </a>
);

export default Mail;
