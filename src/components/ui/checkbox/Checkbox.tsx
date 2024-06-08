import React from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import "./Checkbox.scss";

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked,
  onChange,
  name,
}) => {
  return (
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} name={name} />}
      label={<span className={checked ? "strikethrough" : ""}>{label}</span>}
    />
  );
};

export default CustomCheckbox;
