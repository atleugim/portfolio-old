
export interface Route {
  href: string;
  name: string;
}

export interface Component {
  children: React.ReactNode,
  className?: string,
}

export interface Button extends Component {
  children?: React.ReactNode,
  childrenPosition?: 'start' | 'end',
  className?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  text?: string
  isNavigation?: boolean
  target?: '_blank' | '_self' | '_parent' | '_top'
  href?: string
  isLoading?: boolean
}

interface Img extends Component {
  src: string;
  fallbackSrc?: string;
  children?: React.ReactNode;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "auto" | "sync";
}

export interface Icon {
  size?: string;
  className?: string;
}

export interface IconWithLink extends Icon {
  link: string;
}

interface Technology {
  id: string;
  name: string;
  icon: Icon;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  technologies: Technology[];
}