import { ReactElement } from "react";

export interface ActionButtonProps extends React.HTMLProps<HTMLAnchorElement> {
  icon: ReactElement;
  text: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  icon,
  text,
  className,
  ...props
}) => {
  return (
    <a
      className={`d-flex flex-row flex-nowrap align-items-center justify-content-center ${className}`}
      {...props}
    >
      {icon}
      <span className="ms-2">{text}</span>
    </a>
  );
};

export default ActionButton;
