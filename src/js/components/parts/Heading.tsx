import * as React from "react";
import { PropsWithChildren } from "react";

type props = {
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

 export const Heading = ({ level, children }: PropsWithChildren<props>) => {
  if((level === "h1"))
    return <h1 className="text-5xl font-bold">{ children }</h1>;
  if((level === "h2"))
    return <h2 className="text-4xl font-bold">{ children }</h2>;
  if((level === "h3"))
    return <h3 className="text-3xl font-bold">{ children }</h3>;
  if((level === "h4"))
    return <h4 className="text-2xl font-bold">{ children }</h4>;
  if((level === "h5"))
    return <h5 className="text-xl font-bold">{ children }</h5>;
  if((level === "h6"))
    return <h6 className="text-lg font-bold">{ children }</h6>;
};