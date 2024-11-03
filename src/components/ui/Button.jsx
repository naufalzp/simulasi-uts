import PropTypes from 'prop-types';

const Button = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`cursor-pointer rounded px-4 py-2 text-sm font-bold focus:outline-none focus:ring-4 ${className} `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
