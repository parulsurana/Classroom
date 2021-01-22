
import React from "react";
import './Button.css';

function Button({buttonName, label, onClick}) {
  // const [color] = useState(props.color);

  return (
    <button
      className={buttonName}
      onClick={onClick}>
      {label}
     
    </button>
  );
}

export default Button;
