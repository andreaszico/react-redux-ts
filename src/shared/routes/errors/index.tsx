import { routesName } from "@shared/routes/constants";
import ERROR_PAGE_403 from "./client-errors/403";

export default function ErrorRoute() {
  const { UNAUTHORIZED } = routesName.ERROR;

  return [
    {
      path: UNAUTHORIZED,
      element: <ERROR_PAGE_403 />,
    },
  ];
}
