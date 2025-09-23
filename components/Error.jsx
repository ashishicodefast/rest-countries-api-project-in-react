import React from "react";
import { useRouteError } from "react-router";

export default function Error() {
   const {status,statusText} =useRouteError()
  return <div>{status},{statusText}</div>;
}
