import { ROLES } from "@app/constants/roles";
import OfficerDashboard from "@features/Officer/Dashboard/Dashboard";
import PrivateLayout from "@organisms/layout/PrivateLayout";
import { routesName } from "@shared/routes/constants";

export default function OfficerRoute() {
  const { OFFICER } = routesName.PRIVATE;

  return [
    {
      element: (
        <PrivateLayout allowedRoles={[ROLES.OfficerDistrict, ROLES.Pemungut]} />
      ),
      children: [
        {
          path: OFFICER.OFFICER_INDEX,
          element: <OfficerDashboard />,
        },
      ],
    },
  ];
}
