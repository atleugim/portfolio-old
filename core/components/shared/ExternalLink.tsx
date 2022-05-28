import { Route } from "@/utils/types";

const ExternalLink = ({ href, name }: Route) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="link-underline">
      {name}
    </a>
  );
};

export default ExternalLink;
