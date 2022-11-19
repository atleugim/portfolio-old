import React from "react";

export interface Route {
  href: string;
  name: string;
}

export interface Component {
  children: React.ReactNode;
  className?: string;
}
export interface ComponentWithoutChildren extends Component {
  children?: React.ReactNode;
}

export interface Button extends Component {
  children?: React.ReactNode;
  childrenPosition?: "start" | "end";
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  text?: string;
  isNavigation?: boolean;
  target?: "_blank" | "_self" | "_parent" | "_top";
  href?: string;
  isLoading?: boolean;
}

export interface Icon {
  size?: string;
  className?: string;
}

export interface InputType {
  id: string;
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";
  name?: string;
  defaultValue?: string | number;
  placeholder?: string;
  className?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  label?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

export interface TextAreaType extends InputType {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  rows?: number;
}

export interface IconWithLink extends Icon {
  link: string;
}

export interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
  technologies: {
    id: string;
    name: string;
  }[];
}

export interface ContactFormData {
  name?: string;
  email?: string;
  message?: string;
}

export interface ContactFormResponse {
  success: boolean;
  message?: string;
}

type SidebarContextType = {
  isOpen: Boolean;
  toggle: () => void;
};
