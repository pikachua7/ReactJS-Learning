import { useRouteError } from "react-router-dom";

export const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>Ooops!!!Something went wrong!</h1>
      <h3>
        {error.status} : {error.statusText}
      </h3>
    </>
  );
};
