
import { FaHome } from "react-icons/fa";
import { IoIosHelpCircle } from "react-icons/io";
import { MdPayments } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

export interface ButtonNavigationInterface {
  icons: any,
  name: string,
}

const ButtonNavigationList: ButtonNavigationInterface[] = [
  {
    icons: FaHome,
    name: 'Beranda'
  },
  {
    icons: IoIosHelpCircle,
    name: 'Bantuan'
  },
  {
    icons: MdPayments,
    name: 'Bayar'
  },
  {
    icons: MdHistory,
    name: 'History'
  },
  {
    icons: IoPersonSharp,
    name: 'Profile'
  },
];

export default ButtonNavigationList;


