
import React from "react";
import './Button.css';

function Button({buttonName, label}) {
  // const [color] = useState(props.color);

  return (
    <button
      className={buttonName}>
      {label}
    </button>
  );
}

export default Button;
