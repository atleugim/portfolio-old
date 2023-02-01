import React from "react";

export interface Language {
  en: string;
  es: string;
}

export interface Route {
  href: string;
  name: Language;
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
  disabled?: boolean;
  readOnly?: boolean;
  error?: FieldError;
  dot?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

export interface TextAreaType extends InputType {
  rows?: number;
}

export interface IconWithLink extends Icon {
  link: string;
}

export interface Project {
  name: string;
  description: Language;
  image: string;
  link: string;
  technologies: {
    id: string;
    name: string;
  }[];
}

export interface ContactFormData {
  name?: string | null;
  email?: string | null;
  message?: string | null;
}

export interface ContactFormResponse {
  success: boolean;
  message?: string;
}

export interface SpotifyApiResponse {
  success: boolean;
  data?: SpotifyNowPlaying;
  message?: string;
}

type SidebarContextType = {
  isOpen: Boolean;
  toggle: () => void;
};

// spotify currently playing types
export interface SpotifyNowPlaying {
  timestamp: number;
  context: Context;
  progress_ms: number;
  item: Item;
  currently_playing_type: string;
  actions: Actions;
  is_playing: boolean;
}

export interface Actions {
  disallows: Disallows;
}

export interface Disallows {
  resuming: boolean;
}

export interface Context {
  external_urls: ExternalUrls;
  href: string;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Item {
  album: Album;
  artists: Artist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Album {
  album_type: string;
  artists: Artist[];
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: Date;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}

export interface ExternalIDS {
  isrc: string;
}
