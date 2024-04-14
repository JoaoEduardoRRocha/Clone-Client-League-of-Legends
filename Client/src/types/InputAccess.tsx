import React from "react";

export interface InputAccessProps {
  label: string;
  value: string;
  type: "text" | "password";
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  disabled?: boolean;
  hasToggleButton?: boolean;
}
