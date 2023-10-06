import { ROLES } from "@app/constants/roles";
import PrivateLayout from "@organisms/layout/PrivateLayout";
import { routesName } from "@shared/routes/constants";

export default function OfficerRoute() {
  const { OFFICER, DASHBOARD } = routesName.PRIVATE;

  return [
    {
      element: (
        <PrivateLayout
          allowedRoles={[ROLES.OfficerDistrict]}
          redirectPath={DASHBOARD}
        />
      ),
      children: [
        {
          path: OFFICER.OFFICER_INDEX,
          element: <h1>Private Officer</h1>,
        },
      ],
    },
  ];
}
