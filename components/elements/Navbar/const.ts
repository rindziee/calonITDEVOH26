import { PaletteIcon, Contact2Icon, House, Building2, Megaphone, GalleryHorizontalEnd, FilePenLine} from "lucide-react";
export const NavbarItem = [
  {
    name: "Home",
    icon: House,
    link: "/ambassador",
    disabled: false,
  },
  {
    name: "Ambassador",
    icon: Contact2Icon,
    link: "/design-system",
    disabled: false,
  },
  {
    name: "About Fasilkom",
    icon: Building2,
    disabled: true,
  },
  {
    name: "Announcement",
    icon: Megaphone,
    disabled: true,
  },
  {
    name: "Wall of Fame",
    icon: GalleryHorizontalEnd,
    disabled: true,
  },
  {
    name: "Registration Page",
    icon: FilePenLine,
    disabled: true,
  },
];
