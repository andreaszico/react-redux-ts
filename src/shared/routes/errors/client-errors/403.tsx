import { useLocation } from "react-router-dom";

function ERROR_PAGE_403() {
  const {
    state: { roles },
  } = useLocation();

  return (
    <div>
      <h1>403 Forbidden</h1>
      <p>
        You're not allowed to access this resource only{" "}
        {roles.map((el: any, id: any) => (
          <span
            key={id}
            className="bg-red-400 p-1 px-2 font-semibold mr-1 text-white rounded-md"
          >
            {el}
          </span>
        ))}
        . Please contact the website administrator if you believe this is an
        error.
      </p>
    </div>
  );
}

export default ERROR_PAGE_403;
