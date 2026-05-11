import { Link } from "react-router"

export const LinkButton = ({className, to = "/", children}) => {
  return (
    <Link to={to}>
      <button className={className} >
        {children}
      </button>
    </Link>
  )
}
