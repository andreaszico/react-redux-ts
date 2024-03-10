import { ButtonNavigationRoles } from "@app/constants/button_navigations";
import { ROLES } from "@app/constants/roles";
import ButtonIcon from "@atoms/buttons/button_icon/ButtonIcon";

interface BottomNavigationInterface {
  userRole: ROLES;
}

function BottomNavigation({ userRole }: BottomNavigationInterface) {
  const adminNavigators = ButtonNavigationRoles[userRole];

  return (
    <div className="border rounded-md w-full fixed bottom-0 left-0 p-3 px-4 flex justify-between shadow-inner">
      {adminNavigators.map((el, i) => (
        <ButtonIcon key={i} icons={el.icons} name={el.name} href={el.href} />
      ))}
    </div>
  );
}

export default BottomNavigation;
