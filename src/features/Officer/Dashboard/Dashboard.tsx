import { useUser } from "@organisms/layout/PrivateLayout";

function OfficerDashboard() {
  const { user } = useUser();

  return (
    <div>
      Dashboard {user?.role?.name} {user?.role?.id}
    </div>
  );
}

export default OfficerDashboard;
