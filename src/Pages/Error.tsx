import { useEffect } from "react";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  return (
    <div id="error-page">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 h-screen">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h5 className="mt-6 text-center text-3xl font-bold tracking-tight text-indigo-500">
              {error.status}
            </h5>
            <h6 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              {error.statusText}
            </h6>
          </div>
          <div className="flex items-center justify-center">

            <div className="text-sm">
              <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                Go Back Home?
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}