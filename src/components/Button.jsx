import PropTypes from "prop-types";

function Button({ children, variant = "solid", className = "" }) {
  const buttonStyles = {
    solid:
      "bg-gradient-to-tr from-secondary to-secondary-dark text-white shadow-[0_8px_30px_0_rgba(10,2,23,0.2)]",
    outline: "border border-white text-white",
  };
  return (
    <button
      className={`${buttonStyles[variant]} px-5 py-2 rounded-md ${className}`}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["outline", "solid"]),
  className: PropTypes.string,
};

export default Button;
