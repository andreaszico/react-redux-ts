import { NavLink } from "react-router-dom";
import { ButtonNavigationInterface } from "@app/constants/button_navigations";

function ButtonIcon({ icons, name, href = "/" }: ButtonNavigationInterface) {
  const Icon = icons;
  return (
    <NavLink to={href}>
      {({ isActive }) => (
        <div className="flex flex-col items-center group">
          <Icon
            size={20}
            className={
              isActive
                ? "mb-1 text-green-700"
                : "mb-1 group-hover:text-green-400"
            }
          />
          <div
            className={
              isActive
                ? "text-sm text-green-700"
                : "text-sm group-hover:text-green-400"
            }
          >
            {name}
          </div>
        </div>
      )}
    </NavLink>
  );
}

export default ButtonIcon;
