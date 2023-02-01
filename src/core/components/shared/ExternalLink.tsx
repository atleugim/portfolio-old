interface Link {
  href: string;
  name: string;
}

const ExternalLink = ({ href, name }: Link) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="link-underline">
      {name}
    </a>
  );
};

export default ExternalLink;
