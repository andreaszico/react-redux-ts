import PrivateLayout from "@organisms/layout/PrivateLayout";


export default function OfficerRoute() {
  return [
    {
      element: (
        <PrivateLayout
          allowedRoles={["petugas_kabupaten"]}
          redirectPath={"/dashboard"}
        />
      ),
      children: [{ path: "/admin/officer", element: <h1>Private Officer</h1> }],
    },
  ];
}
