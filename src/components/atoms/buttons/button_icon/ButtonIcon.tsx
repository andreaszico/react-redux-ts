import { Link } from "react-router-dom";
import { ButtonNavigationInterface } from "@app/constants/button_navigations";

function ButtonIcon({icons, name}: ButtonNavigationInterface) {
  const Icon = icons;
  return (
    <Link to={"/"}>
      <div className="flex flex-col items-center group">
        <Icon size={20} className="mb-1 group-hover:text-green-600" />
        <div className="text-sm group-hover:text-green-600">{name}</div>
      </div>
    </Link>
  );
}

export default ButtonIcon;
