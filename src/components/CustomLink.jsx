import { Link, useMatch } from "react-router-dom";

export const CustomLink = ({to, children, className, ...props}) => {
  const match = useMatch(to)
  // console.log('match', match);

  return (
    <Link
      to={to}
      className={`${className} ${match ? 'active-link' : ''}`}
      {...props}
    >
      {children}
    </Link>
  )
}
