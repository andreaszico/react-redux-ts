import { FaHome } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { MdPayments } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { IconType } from "react-icons";
import { ROLES } from "./roles";
import { routesName } from "@shared/routes/constants";

export interface ButtonNavigationInterface {
  icons: IconType;
  name: string;
  href?: string;
}

export type ButtonNavigatorRoles = {
  [key in ROLES]: ButtonNavigationInterface[];
};

const { PROFILE } = routesName.PRIVATE;

const ButtonNavigationList: ButtonNavigationInterface[] = [
  {
    icons: FaHome,
    name: "Beranda",
  },
  {
    icons: IoIosHelpCircle,
    name: "Core",
  },
  {
    icons: MdPayments,
    name: "Bayar",
  },
  {
    icons: MdHistory,
    name: "Pemasukan",
  },
  {
    icons: IoPersonSharp,
    name: "Profile",
    href: PROFILE,
  },
];

const ButtonNavigationPetugas: ButtonNavigationInterface[] = [
  {
    icons: FaHome,
    name: "Beranda",
  },
  {
    icons: IoIosHelpCircle,
    name: "Bantuan",
  },
  {
    icons: MdPayments,
    name: "Bayar",
  },
  {
    icons: MdHistory,
    name: "History",
  },
  {
    icons: IoPersonSharp,
    name: "Profile",
    href: PROFILE,
  },
];

const ButtonNavigationRoles: ButtonNavigatorRoles = {
  [ROLES.OfficerDistrict]: ButtonNavigationPetugas,
  [ROLES.Pemungut]: ButtonNavigationList,
  [ROLES.Admin]: ButtonNavigationList,
};

export { ButtonNavigationList, ButtonNavigationRoles };
