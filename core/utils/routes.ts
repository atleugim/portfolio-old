import { Route } from "./types";

export class Routes {
  static home = "/";
  static projects = "/#projects";
  static contact = "/#contact";

  static getAll(): Array<Route> {
    return [
      {
        href: Routes.home,
        name: "Home",
      },
      {
        href: Routes.projects,
        name: "Projects",
      },
      {
        href: Routes.contact,
        name: "Contact",
      },
    ];
  }
}
