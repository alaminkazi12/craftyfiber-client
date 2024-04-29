import { Helmet } from "react-helmet";
import { useRouteError } from "react-router-dom";
import { TbFaceIdError } from "react-icons/tb";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col items-center mt-20 space-y-2">
      <Helmet>
        <title>Page Not Found | CraftyFiber.com</title>
      </Helmet>
      <TbFaceIdError className=" text-9xl text-red-800" />
      <h1 className="text-4xl text-red-900 font-bold">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
