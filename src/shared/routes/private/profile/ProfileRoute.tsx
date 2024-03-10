import ProfilePage from "@features/Profile/view/Profile";
import PrivateLayout from "@organisms/layout/PrivateLayout";
import { routesName } from "@shared/routes/constants";

export default function ProfileRoute() {
  const { PROFILE } = routesName.PRIVATE;

  return [
    {
      element: <PrivateLayout />,
      children: [
        {
          path: PROFILE,
          element: <ProfilePage />,
        },
      ],
    },
  ];
}
