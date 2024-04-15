import { Link, useLocation } from 'react-router-dom';

const Button = ({ disabled = false, link, style, title, to, Icon, onClick = () => '', ...props }) => {
  const location = useLocation();

  let className = props.className || '';
  if (location.pathname === props.href && props.activeClassName) {
    className = `${className}${props.activeClassName}`.trim();
  }

  return (
    <>
      {!to ? (
        <button onClick={onClick} className={`${className}`} disabled={disabled} style={style} {...props}>
          {Icon ? <Icon width={15} height={15} /> : ''}
          {title}
        </button>
      ) : (
        <Link className={`${className}`} style={style} to={to} {...props}>
          {Icon ? <Icon width={15} height={15} /> : ''}
          {title}
        </Link>
      )}
    </>
  );
};

export default Button;
