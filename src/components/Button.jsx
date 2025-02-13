export const Button = ({
  classname,
  children,
  onClick,
  variant = "default",
}) => {
  const buttonClasses =
    variant === "default"
      ? "bg-main hover:bg-main/80"
      : "bg-white hover:bg-gray-100 border border-gray-400/40";

  const spanClasses = variant === "default" ? "text-white" : "text-black";

  return (
    <button
      className={`${buttonClasses} rounded-md cursor-pointer flex items-center justify-center w-36 h-11 ${classname}`}
      type="button"
      onClick={onClick}
    >
      <span className={`${spanClasses} font-normal font-inter text-base`}>
        {children}
      </span>
    </button>
  );
};
