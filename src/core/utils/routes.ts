import { Route } from "./types";

export class Routes {
  static home = "/";
  static projects = "/#projects";
  static contact = "/#contact";

  static getAll(): Array<Route> {
    return [
      {
        href: Routes.home,
        name: {
          en: "Home",
          es: "Inicio",
        },
      },
      {
        href: Routes.projects,
        name: {
          en: "Projects",
          es: "Proyectos",
        },
      },
      {
        href: Routes.contact,
        name: {
          en: "Contact",
          es: "Contacto",
        },
      },
    ];
  }
}
