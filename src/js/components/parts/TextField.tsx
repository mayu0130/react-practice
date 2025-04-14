import * as React from "react"

type Props = {
  id: string
  label: string;
  value: string;
  onChange: (value: string) => void;
  type: "text" | "date";
}

export const TextField = ({ id, label, value, onChange, type }: Props) => {
  return (
    <div className="flex gap-1 items-center">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} className="border rounded p-1"></input>
    </div>
  )
}