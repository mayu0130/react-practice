import * as React from "react"
import { PropsWithChildren } from "react";

type Props = {
  onClick : () => void;
  color: "red" | "blue";
};

  export const Button = ({onClick, color,children}: PropsWithChildren<Props>) => {
    const style = color === "red" ? "bg-red-400" : "bg-cyan-400";
  return(
    <button className={`border w-16 rounded ${style}`}onClick={onClick}>
      {children}
    </button>
  );
};