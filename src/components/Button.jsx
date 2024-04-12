import { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classname, children, onClick, variant = "default" } = this.props;

    const buttonClasses =
      variant === "default"
        ? "bg-main hover:bg-teal-500"
        : "bg-white hover:bg-gray-200 border border-gray-400/40";

    const spanClasses = variant === "default" ? "text-white" : "text-black";

    return (
      <button
        className={
          buttonClasses +
          " rounded-md cursor-pointer flex items-center justify-center w-36 h-11"
        }
        type="button"
        onClick={onClick}
      >
        <span className={spanClasses + " font-normal font-inter text-base"}>
          {children}
        </span>
      </button>
    );
  }
}

export default Button;
