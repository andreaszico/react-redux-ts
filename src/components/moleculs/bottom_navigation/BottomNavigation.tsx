import ButtonNavigationList from "@app/constants/button_navigations";
import ButtonIcon from "@atoms/buttons/button_icon/ButtonIcon";

function BottomNavigation() {
  return (
    <div className="border rounded-md w-full absolute bottom-0 left-0 p-3 px-4 flex justify-between shadow-inner">
      {ButtonNavigationList.map((el, i) => <ButtonIcon key={i} icons={el.icons} name={el.name}/>)}
    </div>
  );
}

export default BottomNavigation;
