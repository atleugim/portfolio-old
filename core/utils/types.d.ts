export interface Component {
  children: React.ReactNode,
  className?: string,
}

export interface Route {
  href: string;
  name: string;
}

export interface Icon {
  size?: string;
  className?: string;
}

export interface IconWithLink extends Icon {
  link: string;
}