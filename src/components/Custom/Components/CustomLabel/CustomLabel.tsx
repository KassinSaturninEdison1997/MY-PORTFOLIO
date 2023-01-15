import React from "react";

interface ICustomLabelProps {
  label: string;
  style?: object;
}
const CustomLabel: React.FunctionComponent<ICustomLabelProps> = ({
  label,
  style,
}) => {
  return (
    <div style={style} className="font-semibold text-slate-900">
      {label}
    </div>
  );
};

export default CustomLabel;
