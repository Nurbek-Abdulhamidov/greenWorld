import Courses from "../components/Courses";
import Generic from "../components/Generic";
import Home from "../components/Home";

export const navbar = [
  { id: 1, title: "Home", path: "/home", Element: Home, hidden: false },
  {
    id: 2,
    title: "Courses",
    path: "/courses",
    Element: Courses,
    hidden: false,
  },
  { id: 3, title: "Page", path: "/page", Element: Generic, hidden: false },
  { id: 4, title: "Blog", path: "/blog", Element: Generic, hidden: false },
  {
    id: 5,
    title: "Contact",
    path: "/contact",
    Element: Generic,
    hidden: false,
  },
];
