import { ROLES } from "@app/constants/roles";
import OfficerIndex from "@features/Admin/Officer/Index/OfficerIndex";
import PrivateLayout from "@organisms/layout/PrivateLayout";
import { routesName } from "@shared/routes/constants";

export default function AdminRoute() {
  const { ADMIN } = routesName.PRIVATE;

  return [
    {
      element: <PrivateLayout allowedRoles={[ROLES.Pemungut, ROLES.Admin]} />,
      children: [
        {
          path: ADMIN.OFFICER.OFFICER_INDEX,
          element: <OfficerIndex />,
        },
      ],
    },
  ];
}
