import Tooltip from "@mui/material/Tooltip";
import "./style.css";

const Button = ({ handleClick, tooltip = "", children }) => {
  return (
    <Tooltip title={tooltip}>
      <div className="button" onClick={handleClick}>
        {children}
      </div>
    </Tooltip>
  );
};

export default Button;
